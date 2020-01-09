import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Formik } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Looks5Icon from '@material-ui/icons/Looks5';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    margin: theme.spacing(0)
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {
    marginLeft: theme.spacing(0),
    marginTop: theme.spacing(1.5),
    minWidth: 120,
  }
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#BB181D'
    }
  }
});


export default function createGrade({ submit, namesData }) {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline/>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <Looks5Icon/>
          </Avatar>
          <Typography component="h1" variant="h5">
            Insert Grade
          </Typography>
          <Formik
            initialValues={{name: '', grade: '', date: ''}}
            validationSchema={Yup.object({
              name: Yup.string().required('Required!'),
              grade: Yup.number().required('Required!'),
              date: Yup.string().required('Required!'),
            })}
            onSubmit={(values, {setSubmitting}) => {
              setSubmitting(false);
              const nameData = namesData.filter((nameData) => values.name === nameData.username);

              submit({ ...values, classId: nameData[0].classId });
            }}
          >{({
               values,
               isSubmitting,
               handleSubmit,
               touched,
               errors,
               handleChange,
               handleBlur,
             }) => (
            <form className={classes.form} onSubmit={handleSubmit}>
              <FormControl variant="outlined"
                           className={classes.formControl}
                           margin={'none'}>
                <InputLabel id="demo-simple-select-outlined-label">
                  Name
                </InputLabel>
                <Select
                  variant="outlined"
                  required
                  fullWidth
                  name="name"
                  label="Student Name"
                  type="name"
                  id="name"
                  value={values.name}
                  onChange={handleChange}
                >
                  {namesData.map((nameData) => <MenuItem value={nameData.username}>{nameData.name}</MenuItem>)}
                </Select>
              </FormControl>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="date"
                label="Date"
                name="date"
                value={values.date}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="grade"
                label="Grade"
                name="grade"
                value={values.grade}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                disabled={isSubmitting}
              >
                Submit
              </Button>
            </form>
          )}
          </Formik>
        </div>
      </Container>
    </ThemeProvider>
  );
}

createGrade.propTypes = {
  submit : PropTypes.func.isRequired,
}
