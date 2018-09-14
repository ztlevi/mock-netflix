// import initialState from '../testData/data.json';
import _cloneDeep from 'lodash/cloneDeep';

const initialState = {
  mylist: [],
  recommendations: [],
};
const movielists = (state = initialState, action) => {
  let newState = _cloneDeep(state);

  switch (action.type) {
    case 'FETCH_REQUESTED':
      newState.mylist = initialState.mylist;
      newState.recommendations = initialState.recommendations;
      break;
    case 'FETCH_DATA_SUCCESS':
      newState.mylist = action.data.mylist;
      newState.recommendations = action.data.recommendations;
      break;
    case 'FETCH_DATA_FAILED':
      break;

    case 'ADD_TO_MYLIST':
      newState.recommendations = newState.recommendations.filter(el => el.id !== action.movie.id);
      newState.mylist.push(action.movie);
      break;
    case 'REMOVE_FROM_MYLIST':
      newState.mylist = newState.mylist.filter(el => el.id !== action.movie.id);
      newState.recommendations.push(action.movie);
      break;
    default:
      break;
  }

  return newState;
};

export default movielists;
