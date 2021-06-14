import { List } from "@material-ui/core";
import React from "react";
import EventItem from "./EventItem";
import useStyles from "./styles";

const EventList = ({ items, handleLiked, handleDisLiked }) => {
  const classes = useStyles();

  return (
    <List className={classes.list}>
      {items.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          subTitle={event.subTitle}
          handleLiked={handleLiked}
          handleDisLiked={handleDisLiked}
        />
      ))}
    </List>
  );
};

export default EventList;
