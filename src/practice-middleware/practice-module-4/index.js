const { createStore, applyMiddleware } = require("redux");
const thunk = require("redux-thunk");
const { fetchTodoFunction } = require("./utilsFunction");

// initialState
const initialState = {
  todos: [],
};
// create reducer
const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case "todo/todoAdded":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            title: action.payload,
          },
        ],
      };
    case "todo/todoLoaded":
      return {
        ...state,
        todos: [...state.todos, ...action.payload],
      };
    default:
      return state;
  }
};
// create store
const store = createStore(todosReducer, applyMiddleware(thunk.default));
// subscribe to state changes
store.subscribe(() => {
  console.log(store.getState());
});
// dispatch actios
// store.dispatch({
//   type: "todo/todoAdded",
//   payload: "Learn Redux Like a Pro..",
// });
store.dispatch(fetchTodoFunction);
