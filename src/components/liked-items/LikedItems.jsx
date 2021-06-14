import React from "react";
import EventList from "../event/EventList";

const LikedItems = ({ items }) => {
  return (
    <>
      <EventList items={items} />
    </>
  );
};

export default LikedItems;
