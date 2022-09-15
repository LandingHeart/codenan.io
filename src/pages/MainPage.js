import { Button, Typography } from "@mui/material";
import React from "react";
import { withStyles } from "@mui/styles";
import "./main-page.css";
const styles = (theme) => ({});

function MainPage() {
  const twoSum = `let TwoSum = ()=>{
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
      let dif = target - nums[i];

      if (map.has(dif)) {
        return [map.get(dif), i];
      } else {
        map.set(nums[i], i);
      }
    }
  }
`;
  const executeCode = (codeString) => {};
  return (
    <section className="row">
      <section className="col-1">
        <Typography className="col-1-h1">Visualize Complex</Typography>
        <Typography className="col-1-heading">
          Coding Problems
          <br />
        </Typography>
        <Typography>You Know Code, You just don't see it</Typography>
        <Button
          style={{
            backgroundColor: "black",
            color: "white",
            fontWeight: "bold",
            fontSize: "16px",
            width: "50%"
          }}
        >
          Start Learning
        </Button>
      </section>
      <section className="col-2">
        <iframe
          src="https://codesandbox.io/embed/stoic-haslett-rkkrh2?fontsize=14&hidenavigation=1&theme=dark"
          style={{
            width: "100%",
            height: "400px",
            border: "none",
            borderRadius: "4px",
            overflow: "hidden"
          }}
          title="React"
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe>
      </section>
    </section>
  );
}

export default withStyles(styles)(MainPage);
