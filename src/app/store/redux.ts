// import { combineReducers, createStore, applyMiddleware } from 'redux';
// console.log('ads');

// const userReducer = (state = {}, action) => {
//   switch (action.type) {
//     case "CHANGE_NAME": {
//       state = { ...state, name: action.payload }
//       break;
//     }
//     case "CHANGE_AGE": {
//       state = { ...state, age: action.payload }
//       break;
//     }

//   }
//   return state
// }
// const tweetReducer = (state = [], action) => {
//   return state
// }

// const reducers = combineReducers({
//   user: userReducer,
//   tweets: tweetReducer
// })

// // first type of middleware
// const logger = (store) => (next) => (action) => {
//   console.log('action fired', action);
//   next(action)
// }
// const error = (store) => (next) => (action) => {
//   try {
//     next(action)
//   }
//   catch (e) {
//     console.log('ahhhh', e);
//   }
//   action.type = 'CHANGE_NAME'
//   next(action)
// }

// const middleware = applyMiddleware(logger, error)

// const store = createStore(reducers, middleware)

// store.subscribe(() => {
//   console.log('store changed', store.getState());
// })

// store.dispatch({ type: 'CHANGE_NAME', payload: 'Will' })
// store.dispatch({ type: 'CHANGE_AGE', payload: 35 })
// store.dispatch({ type: 'CHANGE_AGE', payload: 36 })
// store.dispatch({ type: 'E', payload: 36 })

// export default store;
