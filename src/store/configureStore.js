import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { autoRehydrate } from 'redux-persist'

import rootReducer from '../reducers'

const configureStore = (initialState) => {
  let composeEnhancers = compose

  if (__DEV__) {
    composeEnhancers = (
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
      require('remote-redux-devtools').composeWithDevTools
    )
  }

  const enhancer = composeEnhancers(
    applyMiddleware(thunk),
    autoRehydrate({ log: true }),
  )

  const store = createStore(rootReducer, initialState, enhancer)
  if (module.hot) {
    module.hot.accept(() => {
      store.replaceReducer(require('../reducers').default)
    })
  }

  return store
}

export default configureStore
