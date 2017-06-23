import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const RepoItem = ({ repo, onPress }) => (
  <TouchableOpacity onPress={onPress} activeOpacity={0.8} >
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{repo.full_name}</Text>
      </View>
      <View style={styles.detail}>
        <View>
          <Text style={styles.detailText}>
            <Icon name="eye" size={16} color="#333" /> Watch {repo.watchers_count}
          </Text>
        </View>
        <View>
          <Text style={styles.detailText}>
            <Icon name="star" size={16} color="#333" /> Start {repo.stargazers_count}
          </Text>
        </View>
        <View>
          <Text style={styles.detailText}>
            <Icon name="code-fork" size={16} color="#333" /> Fork {repo.forks}
          </Text>
        </View>
      </View>
    </View>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginBottom: 16,
    marginLeft: 16,
    backgroundColor: '#fff',
    marginRight: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -1 },
    shadowOpacity: 0.1,
    elevation: 2,
  },
  title: {
    fontWeight: 'bold',
    color: '#4CC1D3',
  },
  detail: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailText: {
    color: '#666',
  },
})

export default RepoItem

