import { Grid, withStyles } from '@material-ui/core';
import { compose } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';

import { startFetchData } from '../actions';
import MovieRow from './MovieRow';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    margin: 10,
    textAlign: 'center',
    // color: theme.palette.text.secondary,
    color: 'blue',
  },
  movieTitle: {
    position: 'absolute',
    bottom: 0,
  },
});

class GridRows extends Component {
  componentDidMount() {
    this.props.startFetchData();
  }
  render() {
    return (
      <Grid container spacing={24}>
        <Grid item xs={false} md={2} />
        <Grid item xs={12} md={8}>
          <MovieRow movielists={this.props.movielists} type="mylist" />
          <MovieRow movielists={this.props.movielists} type="recommendations" />
          <h2 style={{ textAlign: 'center', marginLeft: 10 }}>MYLIST TITLES</h2>
          {this.props.movielists.mylist &&
            this.props.movielists.mylist.map(movie => (
              <span key={movie.id} style={{ margin: 10 }}>
                {movie.title}
              </span>
            ))}
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  movielists: state.movielists,
});
const mapDispatchToProps = dispatch => ({
  startFetchData: () => dispatch(startFetchData()),
});

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(GridRows);
