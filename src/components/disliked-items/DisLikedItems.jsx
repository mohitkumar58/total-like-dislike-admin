import React from "react";
import EventList from "../event/EventList";

const DisLikedItems = ({ items }) => {
  return (
    <>
      <EventList items={items} />
    </>
  );
};

export default DisLikedItems;
