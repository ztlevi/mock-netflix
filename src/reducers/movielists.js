import initialState from '../testData/data.json';
import _cloneDeep from 'lodash/cloneDeep';

const movielists = (state = initialState, action) => {
  let newState = _cloneDeep(state);

  switch (action.type) {
    case 'ADD_TO_MYLIST':
      let isDuplicateItem = false;
      for (let key in newState.mylist) {
        let movie = newState.mylist[key];

        if (movie.id === action.movie.id) {
          isDuplicateItem = true;
          break;
        }
      }
      if (!isDuplicateItem) {
        newState.mylist.push(action.movie);
      } else {
        alert('Duplicated item added!');
      }
      break;
    case 'REMOVE_FROM_MYLIST':
      newState.mylist = newState.mylist.filter(el => el.id !== action.movie.id);
      break;
    default:
      break;
  }

  return newState;
};

export default movielists;
