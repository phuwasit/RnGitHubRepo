import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const ContributeItem = ({ contribute }) => (
  <View style={styles.container}>
    <Image source={{ uri: contribute.avatar_url }} style={styles.avatarImage} />
    <Text style={styles.contributeName}>{contribute.login}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    width: 100,
    marginBottom: 16,
  },
  avatarImage: {
    alignSelf: 'center',
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 1,
    borderColor: '#ccc',

  },
  contributeName: {
    marginTop: 8,
    fontSize: 12,
    alignSelf: 'center',
  },
})
export default ContributeItem
