import { Typography } from "@mui/material";
import React from "react";

export default function MergeSort() {
  const list = [1, 2, 3, 4, 5];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <div>
        <Typography
          style={{
            padding: "0px",
            margin: "0px",
            fontSize: "30px",
            fontWeight: "700",
            textAlign: "center",
            lineHeight: "40px",
          }}
        >
          Merge Sort
        </Typography>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {list.map((ele) => (
          <div
            style={{
              backgroundColor: "grey",
              borderRadius: "50px",
              width: "50px",
              height: "50px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "grey",
              margin: "5px",
            }}
          >
            <Typography style={{ color: "white" }}>{ele}</Typography>
          </div>
        ))}
      </div>
    </div>
  );
}
