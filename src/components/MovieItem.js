import React, { Component } from 'react';
import { removeFromMyList, addToMyList } from '../actions';
import { connect } from 'react-redux';
import './MovieItem.css';

class MovieItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMouseHover: false,
    };
  }
  onMouseEnterHandler = event => {
    this.setState({
      isMouseHover: true,
    });
  };

  onMouseLeaveHandler = event => {
    this.setState({
      isMouseHover: false,
    });
  };
  handleClick = event => {
    if (this.props.removeFromMyList != null) {
      this.props.removeFromMyList(this.props.movie);
    } else if (this.props.addToMyList != null) {
      this.props.addToMyList(this.props.movie);
    }
  };
  render() {
    const { movie, type } = this.props;
    return (
      <div
        className="Movie-item"
        onMouseEnter={this.onMouseEnterHandler}
        onMouseLeave={this.onMouseLeaveHandler}
      >
        <img src={movie.img} alt={movie.title} />
        {this.state.isMouseHover ? (
          <button onClick={this.handleClick}>{type === 'mylist' ? 'Remove' : 'Add'}</button>
        ) : null}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  if (ownProps.type === 'mylist') {
    return { removeFromMyList: movie => dispatch(removeFromMyList(movie)) };
  } else {
    return { addToMyList: movie => dispatch(addToMyList(movie)) };
  }
};

export default connect(
  null,
  mapDispatchToProps
)(MovieItem);
