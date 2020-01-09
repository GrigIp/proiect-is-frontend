import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import { green } from '@material-ui/core/colors';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import ListIcon from '@material-ui/icons/List';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles(theme => ({
  root: {
    //padding: theme.spacing(3, 2),
    //flexGrow: 1,
  },
  title: {
    padding: theme.spacing(2, 0, 0, 3),
  },
  redAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: '#BB181D',
  },
  cardGrid: {
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(0),
    paddingLeft: theme.spacing(0)
  },
  infoGrid: {
    marginLeft: theme.spacing(3)
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  table: {
    margin: theme.spacing(0, 1),
  },
}));

export default function DisplayPage({
                                      error,
                                      tableTitle,
                                      fields = [],
                                      tableHeader = [],
                                      tableData = [],
                                    }) {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <main>
        <Paper className={classes.root}>
          <Grid container justify="center">
            <Avatar className={classes.redAvatar}>
              <ListIcon />
            </Avatar>
          </Grid>
          {fields.map(field => (
            <Grid
              container
              direction="row"
              spacing={0}
              justify="flex-start"
              key={field.id}
              className={classes.infoGrid}
            >
              <Typography variant="body1" color="inherit" noWrap>
                {field.label + '  ' + field.value}
              </Typography>
            </Grid>
          ))}
        </Paper>
        {tableData.length === 0 ? (
          <Typography
            variant="body1"
            color="inherit"
            className={classes.title}
            noWrap
          >
            {error}
          </Typography>
        ) : (
          <React.Fragment>
            <Typography
              variant="body1"
              color="inherit"
              className={classes.title}
              noWrap
            >
              {tableTitle}
            </Typography>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  {tableHeader.map(cell => (
                    <TableCell key={cell}>{cell}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {tableData.map(row => (
                  <TableRow key={row.id}>
                    {Object.keys(row).map(key =>
                      key === 'id' ? null : (
                        <TableCell key={row[key]}>{row[key]}</TableCell>
                      ),
                    )}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </React.Fragment>
        )}
      </main>
    </>
  );
}

DisplayPage.propTypes = {
  error: PropTypes.string,
  tableTitle: PropTypes.string,
  tableData: PropTypes.array,
  tableHeader: PropTypes.array,
  fields: PropTypes.array,
};
