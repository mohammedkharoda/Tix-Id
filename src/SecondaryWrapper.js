import { Box } from "@mui/system";
import React from "react";

const SecondaryWrapper = (props) => {
  return <Box sx={{ width: "90%", margin: "auto" }}>{props.children}</Box>;
};

export default SecondaryWrapper;
