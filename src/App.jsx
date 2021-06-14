import { Box, Link, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DisLikedItems from "./components/disliked-items/DisLikedItems";
import EventList from "./components/event/EventList";
import Layout from "./components/layout/Layout";
import LikedItems from "./components/liked-items/LikedItems";
import { getAllEvents, getDisLikedEvents, getLikedEvents } from "./dummy-data";

const useStyles = makeStyles((theme) => ({
  linkWrapper: {
    position: "absolute",
    bottom: 0,
    margin: theme.spacing(3, 2),
  },
  link: {
    color: "#ef6464",
    fontSize: 14,
    fontWeight: 500,
    lineHeight: "25px",
    letterSpacing: "0.25px",
    textTransform: "uppercase",
  },
  seperator: {
    position: "relative",
    width: 1,
    height: 12,
    backgroundColor: "#ef6464",
    margin: theme.spacing(0, 1),
    display: "inline-block",
  },
}));

const App = () => {
  const classes = useStyles();
  const events = getAllEvents();
  const likedEvents = getLikedEvents();
  const disLikedEevents = getDisLikedEvents();

  const handleLiked = () => {
    console.log("LIKE CLICKED!!");
  };

  const handleDisLiked = () => {
    console.log("DISLIKE CLICKED!!");
  };

  return (
    <Layout>
      <Router>
        <Switch>
          <Route exact path="/">
            <EventList
              handleLiked={handleLiked}
              handleDisLiked={handleDisLiked}
              items={events}
            />
          </Route>
          <Route path="/total-likes">
            <LikedItems items={likedEvents} />
          </Route>
          <Route path="/total-dislikes">
            <DisLikedItems items={disLikedEevents} />
          </Route>
        </Switch>
        <Box className={classes.linkWrapper}>
          <Link className={classes.link} href="/total-likes">
            Total Likes
          </Link>
          <Typography
            className={classes.seperator}
            variant="subtitle1"
            component="span"
          />
          <Link className={classes.link} href="/total-dislikes">
            Total Dislikes
          </Link>
        </Box>
      </Router>
    </Layout>
  );
};

export default App;
