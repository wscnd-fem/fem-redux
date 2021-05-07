# Hooking up with React

1. What are all the things that could happen and states that are needed?
2. Connecting to React
    1. Tell React that Redux Exists (react-redux)
    2. How to receive the state from Redux
    3. How to dispatch actions to Redux

<br>
## **React-Redux**

4 main API methods
    **2 hooks**, one for dispatching actions, one for getting state
    **connect** to wrap components with state and dispatch
    **provider** hooks up Redux into Context API

<br>
## Best Practices

* The logic to get the state in the right shape happen in the reducer.
* Have an Object Literal with `action.type ` for O(1) (redux toolkit does that tho)
*

<br>
<br>
