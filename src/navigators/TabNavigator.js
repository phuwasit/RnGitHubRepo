import React from 'react'
import { TabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'

import {
  RepoStack,
  AboutStack,
} from './PageNavigator'

export const routes = {
  ReposTab: {
    screen: RepoStack,
    navigationOptions: {
      tabBarLabel: 'GitHub',
      tabBarIcon: ({ tintColor }) => (<Icon name="github" size={30} color={tintColor} />),
    },
  },
  AboutTab: {
    screen: AboutStack,
    navigationOptions: {
      tabBarLabel: 'About',
      tabBarIcon: ({ tintColor }) => (<Icon name="info-circle" size={30} color={tintColor} />),
    },
  },
}

const routeConfig = {
  tabBarPosition: 'bottom',
  tabBarOptions: {
    showIcon: true,
    activeBackgroundColor: '#fff',
    inactiveBackgroundColor: '#fff',
    activeTintColor: '#4CC1D3',
    inactiveTintColor: '#ccc',
    style: {
      backgroundColor: '#fff',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: -1 },
      shadowOpacity: 0.1,
      elevation: 2,
    },
  },
}

export default TabNavigator(routes, routeConfig)
