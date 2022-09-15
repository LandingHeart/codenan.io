import React, { useState, useEffect } from "react";
import { withStyles } from "@mui/styles";
import "./main-layout.css";
import SideNav from "../../pages/Tutorial/SideNav";
const styles = (theme) => ({
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100vw",
    height: "100vh"
  },
  sidemenu: {
    flex: "1",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: "40px",
    borderRight: "2px solid rgba(160, 161, 163,0.3)",
    width: "100%"
  },
  content: {
    display: "flex",
    flexDirection: "column",
    flex: "3",
    padding: "10px"
  },
  right_side_nav: {
    display: "flex",
    flexDirection: "column",
    flex: "1"
  }
});

function MainLayout({ classes, children }) {
  return (
    <div className={classes.container}>
      <div className={classes.sidemenu}>
        <SideNav />
      </div>
      <div className={classes.content}>{children}</div>
      <div className={classes.right_side_nav}></div>
    </div>
  );
}
export default withStyles(styles)(MainLayout);
