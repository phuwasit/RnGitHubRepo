import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import pkg from '../../package.json'

class AboutPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>GitHub Repositories App</Text>
        <Text>version {pkg.version}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default AboutPage
