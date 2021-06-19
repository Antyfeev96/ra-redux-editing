import { createStore, combineReducers } from "redux";
import itemListReducer from '../reducers/itemList';
import itemAddReducer from '../reducers/Item';

const reducer = combineReducers({
  itemList: itemListReducer,
  itemAdd: itemAddReducer,
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;