import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import utcn from '../../images/utcn-logo.png';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    color: '#BB181D'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    maxHeight: 40,
  },
  title: {
    flexGrow: 1,
    margin: '2%'
  },
  image: {
    width: '3%',
    height: '3%'
  }
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#BB181D'
    }
  }
});

export default function NavBar({ authenticated, role }) {
  const classes = useStyles();
  if (authenticated) {
    if (role === 'STUDENT') {
      return (
        <ThemeProvider theme={theme}>
          <div className={classes.root}>
            <AppBar position="static">
              <Toolbar className={classes.toolbar}>
                <img src={utcn} alt={'logo'} className={classes.image}/>
                <Typography variant="h6" className={classes.title}>
                  SINU
                </Typography>
                <Button color="inherit" to="/" component={Link}>
                  Home
                </Button>
                <Button color="inherit" to="/group" component={Link}>
                  Group
                </Button>
                <Button color="inherit" to="/" component={Link}>
                  Grades
                </Button>
                <Button color="inherit" to="/schedule" component={Link}>
                  Schedule
                </Button>
                <Button color="inherit" to="/subjects" component={Link}>
                  Subjects
                </Button>
                <Button color="inherit" to="/signin" component={Link} onClick={() => {
                  localStorage.removeItem('token');
                }}>
                  Sign Out
                </Button>
              </Toolbar>
            </AppBar>
          </div>
        </ThemeProvider>
      );
    } else {
      return (
        <ThemeProvider theme={theme}>
          <div className={classes.root}>
            <AppBar position="static">
              <Toolbar className={classes.toolbar}>
                <img src={utcn} alt={'logo'} className={classes.image}/>
                <Typography variant="h6" className={classes.title}>
                  SINU
                </Typography>
                <Button color="inherit" to="/" component={Link}>
                  Home
                </Button>
                <Button color="inherit" to="/" component={Link}>
                  Grades
                </Button>
                <Button color="inherit" to="/schedule" component={Link}>
                  Schedule
                </Button>
                <Button color="inherit" to="/subjects" component={Link}>
                  Subjects
                </Button>
                <Button color="inherit" to="/signin" component={Link} onClick={() => {
                  localStorage.removeItem('token');
                }}>
                  Sign Out
                </Button>
              </Toolbar>
            </AppBar>
          </div>
        </ThemeProvider>
      );
    }
  } else {
    return (
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <img src={utcn} alt={'logo'} className={classes.image}/>
              <Typography variant="h6" className={classes.title}>
                SINU
              </Typography>
              <Button color="inherit" to="/" component={Link}>
                Home
              </Button>
              <Button color="inherit" to="/register" component={Link}>
                Register
              </Button>
              <Button color="inherit" to="/signin" component={Link}>
                Sign In
              </Button>
            </Toolbar>
          </AppBar>
        </div>
      </ThemeProvider>
    );
  }
}

NavBar.propTypes = {
  authenticated : PropTypes.bool.isRequired,
}
