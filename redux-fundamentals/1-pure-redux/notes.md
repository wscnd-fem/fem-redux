# Redux API

Very small API consisting of
<br>
* applyMiddleWare
* compose
* combineReducer
* bindActionCreators
* createStore

## API

### createStore

Method names are self explanatory

<span class="colour" style="color:rgb(95, 102, 114)">'</span><span class="colour" style="color:rgb(152, 195, 121)">@@observable</span><span class="colour" style="color:rgb(95, 102, 114)">'</span><span class="colour" style="color:rgb(169, 178, 195)">: </span><span class="colour" style="color:rgb(95, 102, 114)">[</span><span class="colour" style="color:rgb(97, 175, 239)">Function</span><span class="colour" style="color:rgb(169, 178, 195)">: </span><span class="colour" style="color:rgb(198, 204, 215)">observable</span><span class="colour" style="color:rgb(95, 102, 114)">],</span>
<span class="colour" style="color:rgb(169, 178, 195)"> dispatch</span><span class="colour" style="color:rgb(95, 102, 114)">:</span><span class="colour" style="color:rgb(169, 178, 195)"> </span><span class="colour" style="color:rgb(95, 102, 114)">[</span><span class="colour" style="color:rgb(97, 175, 239)">Function</span><span class="colour" style="color:rgb(169, 178, 195)">: </span><span class="colour" style="color:rgb(198, 204, 215)">dispatch</span><span class="colour" style="color:rgb(95, 102, 114)">],</span>
<span class="colour" style="color:rgb(169, 178, 195)"> getState</span><span class="colour" style="color:rgb(95, 102, 114)">:</span><span class="colour" style="color:rgb(169, 178, 195)"> </span><span class="colour" style="color:rgb(95, 102, 114)">[</span><span class="colour" style="color:rgb(97, 175, 239)">Function</span><span class="colour" style="color:rgb(169, 178, 195)">: </span><span class="colour" style="color:rgb(198, 204, 215)">getState</span><span class="colour" style="color:rgb(95, 102, 114)">],</span>
<span class="colour" style="color:rgb(169, 178, 195)"> replaceReducer</span><span class="colour" style="color:rgb(95, 102, 114)">:</span><span class="colour" style="color:rgb(169, 178, 195)"> </span><span class="colour" style="color:rgb(95, 102, 114)">[</span><span class="colour" style="color:rgb(97, 175, 239)">Function</span><span class="colour" style="color:rgb(169, 178, 195)">: </span><span class="colour" style="color:rgb(198, 204, 215)">replaceReducer</span><span class="colour" style="color:rgb(95, 102, 114)">],</span>
<span class="colour" style="color:rgb(169, 178, 195)"> subscribe</span><span class="colour" style="color:rgb(95, 102, 114)">:</span><span class="colour" style="color:rgb(169, 178, 195)"> </span><span class="colour" style="color:rgb(95, 102, 114)">[</span><span class="colour" style="color:rgb(97, 175, 239)">Function</span><span class="colour" style="color:rgb(169, 178, 195)">: </span><span class="colour" style="color:rgb(198, 204, 215)">subscribe</span><span class="colour" style="color:rgb(95, 102, 114)">]</span>

<span class="colour" style="color:rgb(169, 178, 195)">**replaceReducer**</span>   good option when using code-splitting
<span class="colour" style="color:rgb(169, 178, 195)">**subscribe**</span>        attach handler to a state change
<br>
### bindActionCreators

> Bind action functions to dispatch.

``` js
const [dispatchA, dispatchB] = [actionCreatorA, actionCreatorB].map(fn => compose(store.dispatch, fn))

// same thing as

bindActionCreators({actionCreatorA, actionCreatorB}, store.dispatch)
```

### applyMiddleWare

> Takes a array of different middleware functions and creates an enhancer out of them by composing.

Middlewares are used to modify how dispatching actions works in the application, and is a abstraction on top of Enhancers.

> middleware: store => next => action => {
>    \*\*\*before\*\*\*
>    next(action)
>    \*\*\*after\*\*\*
> }

It gives the opportunity to do things before and after the reducer is used.

#### Enhancer

> Enhancer is a High Order Function such that `enhancer: (createStore) => (reducer, initialState, enhancer) => createStore(changedReducer, initialState, enhancer)`

* Used to add functionality to a redux store
* `createStore` third parameter is an `enhancer`.
* Enhancer can be created with `applyMiddleWare`

<br>
## Conventions

* Assign action.type to variables to avoid mispellings
* Assign functions to create actions on our behalf
* Prefer **flat** objects, if found in a situation with deep nested objects:
    * Reformat JSON from API, translating it => Use data as needed => Translate to output
    * Split between multiple reducers