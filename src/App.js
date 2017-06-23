import React from 'react'
import { AsyncStorage } from 'react-native'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import createEncryptor from 'redux-persist-transform-encrypt'

import AppWithNavigationState from './navigators/AppWithNavigator'
import configureStore from './store/configureStore'

const encryptor = createEncryptor({
  secretKey: 'encryptKey',
})

const store = configureStore()
persistStore(store, {
  storage: AsyncStorage,
  whitelist: ['repos'],
  transforms: [
    encryptor,
  ],
})

const App = () => (
  <Provider store={store}>
    <AppWithNavigationState />
  </Provider>
)

export default App
