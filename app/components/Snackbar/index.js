import React from 'react';
import PropTypes from 'prop-types';
import MaterialSnackbar from '@material-ui/core/Snackbar';
import { makeStyles } from '@material-ui/core/styles';
import SnackbarContentWrapper from './SnackBarContentWrapper';
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

function SnackBar({ variant, message }) {
  const classes = useStyles();

  return (
    <div>
      <MaterialSnackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={!!message}
        autoHideDuration={60000}
      >
        <SnackbarContentWrapper
          variant={variant}
          message={message}
          className={classes.margin}
        />
      </MaterialSnackbar>
    </div>
  );
}


SnackBar.propTypes = {
  message: PropTypes.string,
  variant: PropTypes.string.isRequired,
};

export default SnackBar;
