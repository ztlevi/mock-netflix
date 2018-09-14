export const addToMyList = movie => ({
  type: 'ADD_TO_MYLIST',
  movie,
});

export const removeFromMyList = movie => ({
  type: 'REMOVE_FROM_MYLIST',
  movie,
});

export const fetchData = dispatch => {
  return dispatch => {
    return fetch('data.json')
      .then(res => res.json())
      .then(res => {
        dispatch({
          type: 'DATA_FETCHED',
          data: res,
        });
      });
  };
};
