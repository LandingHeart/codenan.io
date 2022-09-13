import React, { useState, useEffect } from "react";
import { withStyles } from "@mui/styles";

const styles = (theme) => ({
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100vw"
  },
  sidemenu: {
    flex: "1",
    display: "flex",
    flexDirection: "column",
    height: "80vh",
    alignItems: "center",
    paddingTop: "20px"
  },
  content: {
    display: "flex",
    flexDirection: "column",
    flex: "3"
  }
});

function TutorialPage({ classes, children }) {
  return (
    <div className={classes.container}>
      <div className={classes.sidemenu}></div>
      <div className={classes.content}>{children}</div>
      <div></div>
    </div>
  );
}
export default withStyles(styles)(TutorialPage);
