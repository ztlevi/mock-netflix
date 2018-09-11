import React, { Component } from 'react';
import MovieRow from './MovieRow';
import './GridRows.css';
import { connect } from 'react-redux';

class GridRows extends Component {
  render() {
    return (
      <div className="Movie-row-container">
        <MovieRow movielists={this.props.movielists} type="mylist" />
        <MovieRow movielists={this.props.movielists} type="recommendations" />
        <div className="Movie-titles">
          {this.props.movielists.mylist.map(movie => (
            <span key={movie.id} style={{ margin: 10 }}>
              {movie.title}
            </span>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movielists: state.movielists,
});

export default connect(mapStateToProps)(GridRows);
