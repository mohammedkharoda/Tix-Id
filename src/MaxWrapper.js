import { Box } from "@mui/system";
import React from "react";

const MaxWrapper = (props) => {
  return (
    <Box
      id="MaxWrapper"
      sx={{ maxWidth: "1600px", width: "100%", margin: "auto" }}
    >
      {props.children}
    </Box>
  );
};

export default MaxWrapper;
