import React, { Component, Fragment } from 'react';
import { removeFromMyList, addToMyList } from '../actions';
import { connect } from 'react-redux';
import ReactHoverObserver from 'react-hover-observer';
import './MovieItem.css';

class MovieItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMouseHover: false,
    };
  }
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
      <div>
        <ReactHoverObserver className="Movie-item">
          <img src={movie.img} alt={movie.title} />
          <Button handleClick={this.handleClick} type={type} />
        </ReactHoverObserver>
      </div>
    );
  }
}
class Button extends Component {
  render() {
    return (
      <Fragment>
        {this.props.isHovering ? (
          <button onClick={this.props.handleClick}>
            {this.props.type === 'mylist' ? 'Remove' : 'Add'}{' '}
          </button>
        ) : null}
      </Fragment>
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
