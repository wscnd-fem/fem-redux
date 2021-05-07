import {
  createStore,
  compose,
  applyMiddleware,
  bindActionCreators,
  combineReducers,
} from "redux";

const initialState = {
  users: [
    {
      id: 1,
      name: "Steve",
      tasks: ["File the TPS Reports"],
    },
    {
      id: 2,
      name: "Peter",
      tasks: [],
    },
  ],
  tasks: [
    {
      title: "File the TPS Reports",
      assignedTo: 1,
    },
    {
      title: "Order more energy drinks",
      assignedTo: null,
    },
  ],
};

const ADD_USER = "ADD_USER";
const ADD_TASK = "ADD_TASK";
const ADD_TASK_USER = "ADD_TASK_USER";

const addTask = (title) => ({ type: ADD_TASK, payload: { title } });
const addUser = (user) => ({ type: ADD_USER, payload: user });
const addTaskToUser = (title, user) => ({
  type: ADD_TASK_USER,
  payload: {
    title,
    user,
  },
});

// const reducer = (state = initialState, action) => {
//   if (action.type === ADD_USER) {
//     return {
//       ...state,
//       users: [...state.users, action.payload],
//     };
//   }
//   if (action.type === ADD_TASK) {
//     return {
//       ...state,
//       tasks: [...state.tasks, action.payload],
//     };
//   }

//   return state;
// };

const userReducer = (users = initialState.users, action) => {
  if (action.type === ADD_USER) {
    return [...users, action.payload];
  }
  if (action.type === ADD_TASK_USER) {
    const { title, user } = action.payload;
    const [foundUser] = users.filter((u) => u.id === user.id);
    user.tasks = [...foundUser.tasks, title];

    return [
      ...users.filter((user) => user.id !== action.payload.user.id),
      foundUser,
    ];
  } else return users;
};

const taskReducer = (tasks = initialState.tasks, action) => {
  if (action.type === ADD_TASK) {
    return [...tasks, action.payload];
  }
  if (action.type === ADD_TASK_USER) {
    const { title, user } = action.payload;
    return [
      ...tasks.filter((tasks) => tasks.title !== action.payload.title),
      {
        title,
        assignedTo: user.id,
      },
    ];
  } else return tasks;
};

console.log(initialState.users);
console.log(initialState.tasks);

const reducer = combineReducers({ users: userReducer, tasks: taskReducer });

const store = createStore(reducer);

store.dispatch(addUser({ id: 3, name: "Bobby" }));

console.log(store.getState());

store.dispatch(
  addTaskToUser("Order more energy drinks", {
    id: 2,
    name: "Peter",
  }),
);

console.log(store.getState());
