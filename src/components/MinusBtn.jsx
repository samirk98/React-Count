import React from "react";
import Button from "@mui/material/Button";

const MinusBtn = (props) => {
  return (
    <Button variant="contained" onClick={props.handleAzalan}>
      -
    </Button>
  );
};

export default MinusBtn;
