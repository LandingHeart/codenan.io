import { Button, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import CodeEditor from "../components/codeEditor/CodeEditor";
import { withStyles } from "@mui/styles";
import "./main-page.css";
import MergeSort from "../components/MergeSort";

const styles = (theme) => ({});

function MainPage() {
  const executeCode = (codeString) => {};
  return (
    <div className="main-page">
      <div className="main-page-container">
        <div className="main-page-code-editor-col-1">
          <CodeEditor execute={executeCode} />
        </div>
        <div className="main-page-action-content">
          <div className="action-content-col">
            <Typography
              style={{
                padding: "0px",
                margin: "0px",
                fontSize: "30px",
                fontWeight: "700",
                textAlign: "center",
                lineHeight: "40px",
                marginBottom: "5px",
              }}
            >
              Visualizing Coding Puzzles
            </Typography>
          </div>
          <div className="action-content-col">
            <MergeSort />
          </div>
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(MainPage);
