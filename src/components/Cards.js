import React from "react";
import { withStyles } from "@mui/styles";
const styles = (theme) => ({
  cards: {
    display: "flex",
    width: "300px",
    height: "300px",
    backgroundColor: "grey",
    borderRadius: "3px",
    boxShadow: "",
    margin: "5px",
  },
});

function Cards({ classes, ele }) {
  return <div className={classes.cards}>{ele}</div>;
}

export default withStyles(styles)(Cards);
