import { legacy_createStore, applyMiddleware, combineReducers} from 'redux';
import { thunk} from 'redux-thunk'
import userReducer from './users/user.reducer';
import { noteReducer } from './notes/note.reducer';

// Combine reducers if you have more than one reducer
const rootReducer = combineReducers({
  userReducer: userReducer,
  noteReducer: noteReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store; // Export the store as the default export
