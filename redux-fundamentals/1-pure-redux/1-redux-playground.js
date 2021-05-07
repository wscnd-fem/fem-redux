import {
  createStore,
  compose,
  applyMiddleware,
  bindActionCreators,
} from "redux";

const initialState = { value: 0 };

const INCREMENT = "counter/increment";
const ADD = "ADD";

// const incrementAction = {
//   type: INCREMENT,
//   payload: 5 /* meta: {}, error: ""*/,
// };

const increment = () => ({ type: INCREMENT });
const add = (amount) => ({ type: ADD, payload: amount });

const reducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    return { value: state.value + 1 };
  }

  if (action.type === ADD) {
    return { value: state.value + action.payload };
  }
  return state;
};

const store = createStore(reducer);
// const dispatch = (type) => store.dispatch(type);
// const state = store.getState;
store;

const subscriber = () => console.log("SUBSCRIBER", store.getState());
store.subscribe(subscriber);
// console.log(state());

// dispatch(increment());
// console.log(state());

// dispatch(add(3));
// dispatch(add(300));

// console.log(state());
//

const actions = bindActionCreators({ increment, add }, store.dispatch);
actions;
actions.increment();
actions.add(10000);
actions.add(300);
