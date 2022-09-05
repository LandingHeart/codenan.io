import { Button, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import CodeEditor from "./codeEditor/CodeEditor";
import { withStyles } from "@mui/styles";
import "./main-page.css";
import MergeSort from "./MergeSort";

const styles = (theme) => ({});

function MainPage() {
  return (
    <div className="main-page">
      <div className="main-page-container">
        <div className="main-page-code-editor-col-1">
          <CodeEditor />
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
            <Button
              style={{
                color: "white",
                backgroundColor: "#be3723",
                marginBottom: "100px",
              }}
            >
              Start Now
            </Button>
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
