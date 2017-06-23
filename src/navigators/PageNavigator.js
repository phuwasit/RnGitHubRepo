import { StackNavigator } from 'react-navigation'

import ReposPage from '../pages/ReposPage'
import RepoDetailPage from '../pages/RepoDetailPage'
import AboutPage from '../pages/AboutPage'

const defaultHeaderStyle = {
  headerTintColor: '#fff',
  headerTitleStyle: {
    color: '#fff',
  },
  headerBackTitleStyle: {
    color: '#fff',
  },
  headerStyle: {
    backgroundColor: '#4CC1D3',
  },
}

export const RepoStack = StackNavigator({
  Repos: {
    screen: ReposPage,
    navigationOptions: {
      title: 'GitHub Repositories',
      ...defaultHeaderStyle,
    },
  },
  RepoDetail: {
    screen: RepoDetailPage,
    navigationOptions: {
      title: 'Detail',
      ...defaultHeaderStyle,
    },
  },
})

export const AboutStack = StackNavigator({
  About: {
    screen: AboutPage,
    navigationOptions: {
      title: 'About',
      ...defaultHeaderStyle,
    },
  },
})

