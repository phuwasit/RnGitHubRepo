import { combineReducers } from 'redux'

import navReducer from './navReducer'
import reposReducer from './reposReducer'
import contributorsReducer from './contributorsReducer'

const rootReducer = combineReducers({
  nav: navReducer,
  repos: reposReducer,
  contributors: contributorsReducer,
})

export default rootReducer
