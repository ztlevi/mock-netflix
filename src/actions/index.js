export const addToMyList = movie => ({
  type: 'ADD_TO_MYLIST',
  movie,
});

export const removeFromMyList = movie => ({
  type: 'REMOVE_FROM_MYLIST',
  movie,
});

export const startFetchData = () => ({
  type: 'FETCH_REQUESTED',
});

export const fetchDataSuccess = data => ({
  type: 'FETCH_DATA_SUCCESS',
  data,
});

export const fetchDataFailed = e => ({
  type: 'FETCH_DATA_FAILED',
  e,
});
