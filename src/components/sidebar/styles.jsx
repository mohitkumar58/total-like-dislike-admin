import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: "fixed",
    top: 0,
    left: 0,
    bottom: 0,
    width: 60,
    backgroundColor: "#f05b5b",
  },
  listItem: {
    padding: theme.spacing(2),
    margin: theme.spacing(3, 0),
    backgroundColor: "rgba(255, 255, 255, 0.12)",
    borderTop: "1px solid rgba(255, 255, 255, 0.6)",
    borderBottom: "1px solid rgba(255, 255, 255, 0.6)",
  },
  icon: {
    color: "#fff",
  },
}));

export default useStyles;
