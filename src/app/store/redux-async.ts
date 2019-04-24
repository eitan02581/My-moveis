import { applyMiddleware, createStore } from "redux";
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'



const reducer = (state = {}, action) => {
  return state
}


const middleware = applyMiddleware(thunk ,createLogger())

const store = createStore(reducer, middleware)

store.subscribe(() => {
  console.log('store changed', store.getState());
})

store.dispatch((dispatch) => {
  dispatch({ type: 'FOO' })
  // do something async
  dispatch({ type: 'BAR' })
})


export default store;
