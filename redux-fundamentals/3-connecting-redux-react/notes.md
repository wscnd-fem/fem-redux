# Connect API

**Hooks**
Since it's called inside a component it bring issues about separation of concerns, it's hard to unit test it without bringing the whole redux store with it (and other side effects), it also has no way of stopping the component from rendering when the parent component renders.
<br>
> The connect API is usually used to wrap a component that has no sense of state (presentational components) with a High Order Component that passes {ownProps, stateProps, dispatchProps} to it.

Can bring some kind of noise to the ReduxDevTools.
Can prevent React's Context default behavior of rendering down the entire component tree.

<br>
## Good Practices

Use `reselect ` functions everywhere to avoid going after the whole codebase for `state.x` because the state tree has been changed. It optimizes calculations by memoizing them and become only source of truth for calculations.
Using good abstractions even before needed are good to optimize for change.