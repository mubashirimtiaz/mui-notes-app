import { format } from "date-fns";
import { makeStyles } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
const useStyles = makeStyles((theme) => ({
  navbar: {
    width: "calc(100% - 240px)",
  },
  date: {
    flexGrow: 1,
  },
  avatar: {
    marginLeft: theme.spacing(1),
  },
}));
const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.navbar}>
      <Toolbar>
        <Typography className={classes.date}>
          Today is the {format(new Date(), "do MMMM y")}
        </Typography>
        <Typography>Mario</Typography>
        <Avatar className={classes.avatar} src="/mario-av.png" />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
