const { default: fetch } = require("node-fetch");

const fetchTodoFunction = async (dispatch, getState) => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=6"
  );
  const todos = await response.json();
  dispatch({ type: "todo/todoLoaded", payload: todos });
  console.log(`Num of todos property ${getState().todos.length}`);
};
module.exports = {
  fetchTodoFunction,
};
