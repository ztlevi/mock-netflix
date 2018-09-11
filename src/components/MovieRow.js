import React, { Component } from 'react';
import './MovieRow.css';
import MovieItem from './MovieItem';

export default class MovieRow extends Component {
  render() {
    const { movielists, type } = this.props;
    return (
      <div>
        <h3>{type.toUpperCase()}</h3>
        <div className="Movie-row">
          {movielists[type].map(movie => {
            return <MovieItem key={movie.id} movie={movie} type={type} />;
          })}
        </div>
      </div>
    );
  }
}
