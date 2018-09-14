import { Button } from '@material-ui/core';
import React, { Component, Fragment } from 'react';
import ReactHoverObserver from 'react-hover-observer';
import { connect } from 'react-redux';
import { addToMyList, removeFromMyList } from '../actions';

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
      <ReactHoverObserver>
        <img src={movie.img} alt={movie.title} style={{ height: 233, width: 166 }} />
        <HiddenButton handleClick={this.handleClick} type={type} />
      </ReactHoverObserver>
    );
  }
}
class HiddenButton extends Component {
  render() {
    return (
      <Fragment>
        {this.props.isHovering ? (
          <Button
            onClick={this.props.handleClick}
            style={{
              backgroundColor: this.props.type === 'mylist' ? '#e74c3c' : '#3498db',
              color: 'white',
              marginTop: 5,
              width: 166,
              margin: 'auto',
            }}
          >
            {this.props.type === 'mylist' ? 'Remove' : 'Add'}
          </Button>
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
