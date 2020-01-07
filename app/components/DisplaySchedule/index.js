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

export default function DisplaySchedule({
                                      error,
                                      tableTitle,
                                      fields = [],
                                      tableHeader = [],
                                      fromEight = [],
                                      fromTen = [],
                                      fromTwelve = [],
                                      fromTwo = [],
                                      fromFour = [],
                                      fromSix = [],
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
                <TableRow></TableRow>
                <TableRow>
                  <TableCell>08:00</TableCell>
                  {fromEight.map((elem) => {
                    if(elem === '-') {
                      return <TableCell>-</TableCell>;
                    }

                    return <TableCell>
                            <div>Subj: {elem.name}</div>
                            <div>Type: {elem.type}</div>
                            <div>Location: {elem.location}</div>
                            <div>{elem.weeks} weeks</div>
                            <div>Teacher: {elem.professor}</div>
                          </TableCell>
                  })}
                </TableRow>
                <TableRow>
                  <TableCell>10:00</TableCell>
                  {fromTen.map((elem) => {
                    if(elem === '-') {
                      return <TableCell>-</TableCell>;
                    }

                    return <TableCell>
                      <div>Subj: {elem.name}</div>
                      <div>Type: {elem.type}</div>
                      <div>Location: {elem.location}</div>
                      <div>{elem.weeks} weeks</div>
                      <div>Teacher: {elem.professor}</div>
                    </TableCell>
                  })}
                </TableRow>
                <TableRow>
                  <TableCell>12:00</TableCell>
                  {fromTwelve.map((elem) => {
                    if(elem === '-') {
                      return <TableCell>-</TableCell>;
                    }

                    return <TableCell>
                      <div>Subj: {elem.name}</div>
                      <div>Type: {elem.type}</div>
                      <div>Location: {elem.location}</div>
                      <div>{elem.weeks} weeks</div>
                      <div>Teacher: {elem.professor}</div>
                    </TableCell>
                  })}
                </TableRow>
                <TableRow>
                  <TableCell>14:00</TableCell>
                  {fromTwo.map((elem) => {
                    if(elem === '-') {
                      return <TableCell>-</TableCell>;
                    }

                    return <TableCell>
                      <div>Subj: {elem.name}</div>
                      <div>Type: {elem.type}</div>
                      <div>Location: {elem.location}</div>
                      <div>{elem.weeks} weeks</div>
                      <div>Teacher: {elem.professor}</div>
                    </TableCell>
                  })}
                </TableRow>
                <TableRow>
                  <TableCell>16:00</TableCell>
                  {fromFour.map((elem) => {
                    if(elem === '-') {
                      return <TableCell>-</TableCell>;
                    }

                    return <TableCell>
                      <div>Subj: {elem.name}</div>
                      <div>Type: {elem.type}</div>
                      <div>Location: {elem.location}</div>
                      <div>{elem.weeks} weeks</div>
                      <div>Teacher: {elem.professor}</div>
                    </TableCell>
                  })}
                </TableRow>
                <TableRow>
                  <TableCell>18:00</TableCell>
                  {fromSix.map((elem) => {
                    if(elem === '-') {
                      return <TableCell>-</TableCell>;
                    }

                    return <TableCell>
                      <div>Subj: {elem.name}</div>
                      <div>Type: {elem.type}</div>
                      <div>Location: {elem.location}</div>
                      <div>{elem.weeks} weeks</div>
                      <div>Teacher: {elem.professor}</div>
                    </TableCell>
                  })}
                </TableRow>
              </TableBody>
            </Table>
          </React.Fragment>
      </main>
    </>
  );
}

DisplaySchedule.propTypes = {
  error: PropTypes.string,
  tableTitle: PropTypes.string,
  tableHeader: PropTypes.array,
  fields: PropTypes.array,
  fromEight: PropTypes.array,
  fromTen: PropTypes.array,
  fromTwelve: PropTypes.array,
  fromTwo: PropTypes.array,
  fromFour: PropTypes.array,
  fromSix: PropTypes.array,
};
