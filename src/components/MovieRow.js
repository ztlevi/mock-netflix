import React, { Component, Fragment } from 'react';
import MovieItem from './MovieItem';
import { GridList, GridListTile, Paper, withStyles } from '@material-ui/core';
const styles = theme => ({
  paper: {
    padding: theme.spacing.unit,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    margin: 1,
  },
  listName: {
    textAlign: 'center',
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
    height: 305,
  },
  gridListTile: {
    height: 305,
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
});

const XS_WIDTH = 768;

class MovieRow extends Component {
  render() {
    const { classes, movielists, type } = this.props;

    return (
      <Fragment>
        <h2 className={classes.listName}>{type.toUpperCase()}</h2>
        <GridList
          className={classes.gridList}
          cellHeight="auto"
          cols={window.innerWidth < XS_WIDTH ? 2 : 5}
        >
          {movielists[type] &&
            movielists[type].map(movie => {
              return (
                <GridListTile className={classes.gridListTile} key={movie.id}>
                  <Paper className={classes.paper}>
                    <MovieItem movie={movie} type={type} />
                  </Paper>
                </GridListTile>
              );
            })}
        </GridList>
      </Fragment>
    );
  }
}

export default withStyles(styles)(MovieRow);
