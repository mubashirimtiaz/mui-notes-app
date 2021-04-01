import { makeStyles } from "@material-ui/core";
import Drawer from "../drawer/Drawer.component";
import Navbar from "../navbar/Navbar.component";

const useStyles = makeStyles((theme) => ({
  page: {
    backgroundColor: "#f9f9f9",
    width: "100%",
    minHeight: "100vh",
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
}));
const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <div className="flex">
      <Navbar />
      <Drawer />
      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}
      </div>
    </div>
  );
};

export default Layout;
