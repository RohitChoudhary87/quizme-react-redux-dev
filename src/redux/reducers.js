import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import inviteList from '../containers/inviteList/duck';

const rootReducer = combineReducers({
  form: formReducer,
  inviteList
});

export default rootReducer;
