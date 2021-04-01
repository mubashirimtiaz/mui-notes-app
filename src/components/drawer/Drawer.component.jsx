import { makeStyles } from "@material-ui/core";
import { useHistory, useLocation } from "react-router-dom";
import SideDrawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import SubjectOutlined from "@material-ui/icons/SubjectOutlined";
import AddCircleOutlined from "@material-ui/icons/AddCircleOutlined";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  page: {
    backgroundColor: "#f9f9f9",
    width: "100%",
    minHeight: "100vh",
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  active: {
    backgroundColor: "#f9f9f9",
  },
  title: {
    padding: theme.spacing(2),
  },
}));
const menuItems = [
  {
    text: "My Note",
    icon: <SubjectOutlined color="primary" />,
    path: "/",
  },
  {
    text: "Create Note",
    icon: <AddCircleOutlined color="primary" />,
    path: "/create",
  },
];
const Drawer = () => {
  const history = useHistory();
  const location = useLocation();
  const classes = useStyles();
  return (
    <SideDrawer
      variant="permanent"
      anchor="left"
      className={classes.drawer}
      classes={{ paper: classes.drawerPaper }}
    >
      <Typography
        className={classes.title}
        variant="h5"
        component="h1"
        color="primary"
        align="center"
      >
        Ninja Notes
      </Typography>
      <List>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.text}
            onClick={() => history.push(item.path)}
            className={location.pathname === item.path ? classes.active : null}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </SideDrawer>
  );
};

export default Drawer;
