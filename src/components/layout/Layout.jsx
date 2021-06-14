import { Box } from "@material-ui/core";
import React from "react";
import Sidebar from "../sidebar/Sidebar";
import useStyles from "./styles";

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <>
      <Sidebar />
      <Box className={classes.wrapper} component="div">
        {children}
      </Box>
    </>
  );
};

export default Layout;
