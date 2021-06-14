import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  item: {
    backgroundColor: "#ffdcdc",
    border: "1px solid #a6a4ac",
    boxShadow: "0 5px 10px rgb(0 0 0 / 12%)",
    borderRadius: 4,
    width: "calc(94% / 3)",
    margin: "1%",
    padding: theme.spacing(3, 2),
  },
  title: {
    color: "#fff",
    fontSize: 14,
    lineHeight: "28px",
    fontWeight: 500,
    letterSpacing: "0.45px",
    width: 85,
    textAlign: "center",
    textTransform: "uppercase",
    borderRadius: 2,
    backgroundColor: "#a6a4ac",
    padding: theme.spacing(0.5, 1),
    marginBottom: theme.spacing(2),
  },
  subTitle: {
    color: "#000",
    fontSize: 14,
    lineHeight: "24px",
    fontWeight: 400,
    letterSpacing: "0.15px",
  },
  actions: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  iconButton: {
    padding: theme.spacing(1),
    backgroundColor: "rgba(0, 0, 0, 0.04)",
    marginRight: theme.spacing(2),
    "&:last-child": {
      marginRight: 0,
    },
  },
  likeIcon: {
    color: "#24b300",
  },
  disLikeIcon: {
    color: "#e62c2c",
  },
  list: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
  },
}));

export default useStyles;
