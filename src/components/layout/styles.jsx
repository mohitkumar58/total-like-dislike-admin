import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginLeft: theme.spacing(7.5),
    padding: theme.spacing(4),
    width: "calc(100% - 124px)",
    minHeight: "calc(100vh - 64px)",
  },
}));

export default useStyles;
