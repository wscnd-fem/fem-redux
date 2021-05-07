import {
  createStore,
  compose,
  applyMiddleware,
  bindActionCreators,
  combineReducers,
} from "redux";

const reducer = (state = { time: 1 }, payload) => ({ ...state });

const monitorMiddleWare = (store) => (next) => (action) => {
  const start = performance.now();
  next(action); /* executes the reducer */
  const end = performance.now();
  const diff = end - start;
  console.log(diff);
};

const logMiddleWare = (store) => (next) => (action) => {
  console.log("oldState", store.getState(), action);
  next(action); /* executes the reducer */
  console.log("new state", store.getState(), action);
};

const store = createStore(
  reducer,
  // applyMiddleware(logMiddleWare, monitorMiddleWare),
  applyMiddleware(monitorMiddleWare, logMiddleWare),
);

store.dispatch({
  type: "blah",
  payload: {
    add: 1,
  },
});
