import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

function CodeEditor() {
  const onChange = React.useCallback((value, viewUpdate) => {
    console.log("value:", value);
  }, []);
  return (
    <CodeMirror
      style={{ fontSize: "16px" }}
      value="console.log('hello world!');"
      height="400px"
      theme="dark"
      extensions={[javascript({ jsx: true })]}
      onChange={onChange}
    />
  );
}
export default CodeEditor;
