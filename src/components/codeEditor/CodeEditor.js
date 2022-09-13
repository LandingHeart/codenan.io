import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

function CodeEditor({ twoSum, width, height }) {
  const [code, setCode] = useState(twoSum);
  const [output, setOutput] = useState("");

  const onChange = React.useCallback((value, viewUpdate) => {
    setCode(twoSum);
  }, []);

  const executeCode = () => {
    let temp = eval(console.log("hello"));
    setOutput(temp);
  };
  return (
    <>
      {/* <CodeMirror
        style={{
          fontSize: "16px",
          width: `${width}`
        }}
        maxHeight="400"
        value={code}
        theme="dark"
        extensions={[javascript({ jsx: true })]}
        onChange={onChange}
      /> */}
    </>
  );
}
export default CodeEditor;
