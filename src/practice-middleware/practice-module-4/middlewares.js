// we are not using this applyMiddleware because we are using redux thank , this middleware function is also thunk middleware
const delayActionMiddleware = (store) => (next) => (action) => {
  if (action.type === "todo/todoAdded") {
    console.log("im delaying you");
    setTimeout(() => {
      next(action);
    }, 2000);
    return;
  }
  return next(action);
};
const fetchApiMiddleware = (store) => (next) => async (action) => {
  if (typeof action === "function") {
    return action(store.dispatch, store.getState);
  }
  return next(action);
};

module.exports = {
  delayActionMiddleware,
  fetchApiMiddleware,
};
