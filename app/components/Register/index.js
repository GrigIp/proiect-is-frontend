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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {
    margin: theme.spacing(1),
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


export default function Register({ register }) {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline/>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon/>
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <Formik
            initialValues={{firstName: '', lastName: '', email: '', username: '', password: '',matchingPassword: '', role: ''}}
            validationSchema={Yup.object({
              firstName: Yup.string().required('Required!'),
              lastName: Yup.string().required('Required!'),
              email: Yup.string().email().required('Required!'),
              username: Yup.string().required('Required!'),
              password: Yup.string().required('Required!'),
              matchingPassword: Yup.string().oneOf([Yup.ref('password'), null]).required('Required!'),
              role: Yup.string().required('Required!'),
            })}
            onSubmit={(values, {setSubmitting}) => {
              setSubmitting(false);
              register({ ...values });
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
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="firstName"
                label="First Name"
                name="firstName"
                helperText={touched.firstName ? errors.firstName : ''}
                error={touched.firstName && Boolean(errors.firstName)}
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="firstName"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                helperText={touched.lastName ? errors.lastName : ''}
                error={touched.lastName && Boolean(errors.lastName)}
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="lastName"
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                helperText={touched.email ? errors.email : ''}
                error={touched.email && Boolean(errors.email)}
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="email"
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                helperText={touched.username ? errors.username : ''}
                error={touched.username && Boolean(errors.username)}
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="username"
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                helperText={touched.password ? errors.password : ''}
                error={touched.password && Boolean(errors.password)}
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="current-password"
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="matchingPassword"
                label="Confirm Password"
                type="password"
                id="matchingPassword"
                helperText={touched.matchingPassword ? errors.matchingPassword : ''}
                error={touched.matchingPassword && Boolean(errors.matchingPassword)}
                value={values.matchingPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="current-password"
              />
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">
                  Role
                </InputLabel>
                <Select
                  variant="outlined"
                  required
                  fullWidth
                  name="role"
                  label="Role"
                  type="role"
                  id="role"
                  error={touched.role && Boolean(errors.role)}
                  value={values.role}
                  onChange={handleChange}
                >
                  <MenuItem value={"STUDENT"}>Student</MenuItem>
                  <MenuItem value={"PROFESSOR"}>Professor</MenuItem>
                  <MenuItem value={"ADMIN"}>Admin</MenuItem>
                </Select>
              </FormControl>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                disabled={isSubmitting}
              >
                Register
              </Button>
            </form>
          )}
          </Formik>
        </div>
      </Container>
    </ThemeProvider>
  );
}

Register.propTypes = {
  register : PropTypes.func.isRequired,
}
