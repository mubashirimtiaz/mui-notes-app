import { makeStyles } from "@material-ui/core";
import MuiCard from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { blue, green, pink, yellow } from "@material-ui/core/colors";

const useStyles = makeStyles({
  avatar: {
    backgroundColor: ({ type }) => {
      if (type === "work") {
        return yellow[700];
      } else if (type === "reminder") {
        return green[500];
      } else if (type === "todos") {
        return pink[500];
      } else {
        return blue[500];
      }
    },
  },
});

const Card = ({ title, detail, type, id, deleteNote }) => {
  const classes = useStyles({ type });
  return (
    <MuiCard elevation={1}>
      <CardHeader
        avatar={
          <Avatar className={classes.avatar}>{type[0].toUpperCase()}</Avatar>
        }
        action={
          <IconButton onClick={() => deleteNote(id)}>
            <DeleteOutlined />
          </IconButton>
        }
        title={title}
        subheader={type}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary">
          {detail}
        </Typography>
      </CardContent>
    </MuiCard>
  );
};

export default Card;
