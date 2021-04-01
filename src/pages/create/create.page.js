import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import * as yup from "yup";
import { useFormik } from "formik";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import { useHistory } from "react-router-dom";

const validationSchema = yup.object({
  title: yup.string("Enter your Note Title").required("Note Title is required"),
  detail: yup
    .string("Enter your Note Detail")
    .min(80, "Minimum 80 characters are required")
    .required("Note Detail is required"),
  type: yup.string("Select your Note Type").required("Note Type is required"),
});

const useStyles = makeStyles({
  field: {
    display: "block",
    marginTop: 20,
    marginBottom: 20,
  },
});

const Create = () => {
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      title: "",
      detail: "",
      type: "money",
    },
    validationSchema: validationSchema,
    onSubmit: ({ title, detail, type }) => {
      fetch("https://cool-json-server.herokuapp.com/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, detail, category: type }),
      }).then(() => history.push("/"));
    },
  });
  const classes = useStyles();
  return (
    <Container>
      <Typography
        variant="h6"
        component="h2"
        color="textSecondary"
        gutterBottom
      >
        Create a New Note
      </Typography>
      <form noValidate autoComplete="off" onSubmit={formik.handleSubmit}>
        <TextField
          className={classes.field}
          id="title"
          name="title"
          label="Note Title"
          value={formik.values.title}
          onChange={formik.handleChange}
          variant="outlined"
          error={formik.touched.title && Boolean(formik.errors.title)}
          helperText={formik.touched.title && formik.errors.title}
          required
          fullWidth
        />
        <TextField
          className={classes.field}
          id="detail"
          name="detail"
          label="Note Detail"
          value={formik.values.detail}
          onChange={formik.handleChange}
          variant="outlined"
          error={formik.touched.detail && Boolean(formik.errors.detail)}
          helperText={formik.touched.detail && formik.errors.detail}
          multiline
          rows={4}
          required
          fullWidth
        />
        <FormControl className={classes.field}>
          <FormLabel>Note Category / Type</FormLabel>
          <RadioGroup
            name="type"
            value={formik.values.type}
            onChange={formik.handleChange}
          >
            <FormControlLabel value="money" control={<Radio />} label="Money" />
            <FormControlLabel value="todos" control={<Radio />} label="Todos" />
            <FormControlLabel
              value="reminder"
              control={<Radio />}
              label="Reminder"
            />
            <FormControlLabel value="work" control={<Radio />} label="Work" />
            {Boolean(formik.errors.type) && (
              <FormHelperText>
                <Typography color="error" variant="inherit">
                  {formik.errors.type}
                </Typography>
              </FormHelperText>
            )}
          </RadioGroup>
        </FormControl>
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          endIcon={<KeyboardArrowRightIcon />}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default Create;
