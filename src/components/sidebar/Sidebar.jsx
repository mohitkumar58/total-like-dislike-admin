import { Box, Link, List, ListItem } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import React from "react";
import useStyles from "./styles";

const Sidebar = () => {
  const classes = useStyles();
  return (
    <Box className={classes.wrapper}>
      <List>
        <Link href="/">
          <ListItem className={classes.listItem} button>
            <HomeIcon className={classes.icon} />
          </ListItem>
        </Link>
      </List>
    </Box>
  );
};

export default Sidebar;
