import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { Typography } from "@mui/material";

const mergeSort = `mergeSort([2,4,1,3,2,4,32,6,56,3])
function merge(left, right) {
  let arr = []
  // Break out of loop if any one of the array gets empty
  while (left.length && right.length) {
      // Pick the smaller among the smallest element of left and right sub arrays 
      if (left[0] < right[0]) {
          arr.push(left.shift())  
      } else {
          arr.push(right.shift()) 
      }
  }
  
  // Concatenating the leftover elements
  // (in case we didn't go through the entire left or right array)
  return [ ...arr, ...left, ...right ]
}
function mergeSort(array) {
  const half = array.length / 2
  
  // Base case or terminating case
  if(array.length < 2){
    return array 
  }
  
  const left = array.splice(0, half)
  return merge(mergeSort(left),mergeSort(array))
}
console.log('helloasdflkj')
`;

function CodeEditor(props) {
  const [code, setCode] = useState(mergeSort);
  const [output, setOutput] = useState("");
  const onChange = React.useCallback((value, viewUpdate) => {
    setCode(value);
  }, []);

  const executeCode = () => {
    let temp = eval(console.log("hello"));
    setOutput(temp);
  };
  return (
    <>
      <CodeMirror
        style={{ fontSize: "16px" }}
        value={code}
        height="400px"
        theme="dark"
        extensions={[javascript({ jsx: true })]}
        onChange={onChange}
      />
      <button onClick={executeCode}> Run code</button>
      <div
        style={{
          display: "flex",
          flex: "1",
          flexDirection: "column",
          backgroundColor: "#f3f3f3",
        }}
      >
        <Typography>Output</Typography>
        {output}
      </div>
    </>
  );
}
export default CodeEditor;
