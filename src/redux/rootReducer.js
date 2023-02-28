import { combineReducers } from "redux";
import filtersReducer from "./filters/reducer";
import todosReducer from "./todos/reducer";

const rootReducer = combineReducers({
  filters: filtersReducer,
  todos: todosReducer,
});
export default rootReducer;
