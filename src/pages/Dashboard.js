import React from "react";
import { withStyles } from "@mui/styles";
import Cards from "../components/Cards";
const styles = (theme) => ({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "80vh",
  },
});
const items = [1, 2, 3];
function Dashboard({ classes }) {
  return (
    <div className={classes.container}>
      {items.map((ele, index) => (
        <Cards ele={ele} key={index} />
      ))}
    </div>
  );
}
export default withStyles(styles)(Dashboard);
