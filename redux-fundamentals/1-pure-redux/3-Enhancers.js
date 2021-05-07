import {
  createStore,
  compose,
  applyMiddleware,
  bindActionCreators,
  combineReducers,
} from "redux";

const reducer = (state = { time: 1 }) => state;

const monitorEnhancer = (createStore) => (reducer, initialState, enhancer) => {
  const monitorReducer = (state, action) => {
    const start = performance.now();
    const newState = reducer(state, action);
    const end = performance.now();
    const diff = end - start;
    console.log(diff);

    return newState;
  };

  return createStore(monitorReducer, initialState, enhancer);
};

// const store = createStore(reducer, {}, monitorEnhancer);
// store.dispatch({ type: "blah" });

const loggerEnhancer = (createStore) => (reducer, initialState, enhancer) => {
  const loggerReducer = (state, action) => {
    console.log(state, action);
    const newState = reducer(state, action);
    console.log(newState, action);
    return newState;
  };
  return createStore(loggerReducer, enhancer);
};

// const store2 = createStore(reducer, {}, loggerEnhancer);
// store2.dispatch({ type: "alll" });

const store = createStore(reducer, compose(loggerEnhancer, monitorEnhancer));

store.dispatch({ type: "blah" });
