import { StackNavigator } from 'react-navigation'

import Tabs from './TabNavigator'

export const routes = {
  Index: { screen: Tabs },
}

const routeConfig = {
  headerMode: 'none',
  mode: 'modal',
}

export default StackNavigator(routes, routeConfig)
