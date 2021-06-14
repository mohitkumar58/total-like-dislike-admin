import { Box, IconButton, ListItem, Typography } from "@material-ui/core";
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import React from "react";
import useStyles from "./styles";

const EventItem = ({ id, title, subTitle, handleDisLiked, handleLiked }) => {
  const classes = useStyles();

  return (
    <ListItem key={id} className={classes.item}>
      <Box component="div">
        <Box>
          <Typography className={classes.title} variant="h1" component="h1">
            {title}
          </Typography>
          <Typography
            className={classes.subTitle}
            variant="subtitle1"
            component="p"
          >
            {subTitle}
          </Typography>
        </Box>
        <Box className={classes.actions}>
          <IconButton
            id={"1"}
            className={classes.iconButton}
            onClick={handleLiked}
          >
            <ThumbUpAltIcon className={`${classes.icon} ${classes.likeIcon}`} />
          </IconButton>
          <IconButton
            id={"2"}
            className={classes.iconButton}
            onClick={handleDisLiked}
          >
            <ThumbDownAltIcon
              className={`${classes.icon} ${classes.disLikeIcon}`}
            />
          </IconButton>
        </Box>
      </Box>
    </ListItem>
  );
};

export default EventItem;
