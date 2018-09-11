export const addToMyList = movie => ({
  type: 'ADD_TO_MYLIST',
  movie,
});

export const removeFromMyList = movie => ({
  type: 'REMOVE_FROM_MYLIST',
  movie,
});
