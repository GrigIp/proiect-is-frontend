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
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Looks5Icon from '@material-ui/icons/Looks5';


const useStyles = makeStyles(theme => ({
  rootExpansion: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
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
                                      fields = [],
                                      tableHeader = [],
                                      firstYear = [],
                                      secondYear = [],
                                      thirdYear = [],
                                      forthYear = [],
                                      icon = [],
                                    }) {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <main>
        <Paper className={classes.root}>
          <Grid container justify="center">
            <Avatar className={classes.redAvatar}>
              {icon === 'five' ? <Looks5Icon /> : <ListIcon/> }
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
        <div className={classes.rootExpansion}>
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>First Year Subjects</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              {firstYear.length === 0 ? (
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
                  <Table className={classes.table}>
                    <TableHead>
                      <TableRow>
                        {tableHeader.map(cell => (
                          <TableCell key={cell}>{cell}</TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {firstYear.map(row => (
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
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>Second Year Subjects</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              {secondYear.length === 0 ? (
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
                  <Table className={classes.table}>
                    <TableHead>
                      <TableRow>
                        {tableHeader.map(cell => (
                          <TableCell key={cell}>{cell}</TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {secondYear.map(row => (
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
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>Third Year Subjects</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              {thirdYear.length === 0 ? (
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
                  <Table className={classes.table}>
                    <TableHead>
                      <TableRow>
                        {tableHeader.map(cell => (
                          <TableCell key={cell}>{cell}</TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {thirdYear.map(row => (
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
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>Forth Year Subjects</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              {forthYear.length === 0 ? (
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
                  <Table className={classes.table}>
                    <TableHead>
                      <TableRow>
                        {tableHeader.map(cell => (
                          <TableCell key={cell}>{cell}</TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {forthYear.map(row => (
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
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
      </main>
    </>
  );
}

DisplayPage.propTypes = {
  error: PropTypes.string,
  tableTitle: PropTypes.string,
  firstYear: PropTypes.array,
  secondYear: PropTypes.array,
  thirdYear: PropTypes.array,
  forthYear: PropTypes.array,
  tableHeader: PropTypes.array,
  icon: PropTypes.string,
  fields: PropTypes.array,
};
