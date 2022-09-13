import { Button, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { withStyles } from "@mui/styles";
import "./main-layout.css";

const styles = (theme) => ({});

function MainLayout({ children }) {
  return <section className="row">{children}</section>;
}

export default withStyles(styles)(MainLayout);
