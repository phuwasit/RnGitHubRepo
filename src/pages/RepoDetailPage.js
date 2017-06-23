import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'

import ContributeList from '../components/ContributeList'

class RepoDetailPage extends Component {
  render() {
    const { selectedRepo, contributors } = this.props
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>{selectedRepo.name}</Text>
        <Text style={styles.subTitle}>{selectedRepo.full_name}</Text>
        <View style={styles.detail}>
          <View>
            <Text style={styles.detailText}>
              <Icon name="eye" size={16} color="#333" /> Watch {selectedRepo.watchers_count}
            </Text>
          </View>
          <View>
            <Text style={styles.detailText}>
              <Icon name="star" size={16} color="#333" /> Start {selectedRepo.stargazers_count}
            </Text>
          </View>
          <View>
            <Text style={styles.detailText}>
              <Icon name="code-fork" size={16} color="#333" /> Fork {selectedRepo.forks}
            </Text>
          </View>
        </View>
        <Text style={styles.description}>{selectedRepo.description}</Text>
        <View style={{ flex: 1, marginTop: 16 }}>
          <Text style={styles.title}>Contributors</Text>
          { contributors.isLoading ?
            <Text style={styles.loading}>Loading...</Text> :
            <ContributeList contributes={contributors.data} />
          }
        </View>
      </ScrollView>
    )
  }
}

const mapStateToProps = state => ({
  selectedRepo: state.repos.selected,
  contributors: state.contributors,
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    padding: 16,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -1 },
    shadowOpacity: 0.1,
    elevation: 2,
  },
  loading: {
    padding: 20,
    alignSelf: 'center',
  },
  title: {
    fontWeight: 'bold',
    color: '#4CC1D3',
  },
  subTitle: {
    marginTop: 4,
    fontSize: 12,
    color: '#999',
  },
  detail: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailText: {
    color: '#666',
  },
  description: {
    marginTop: 16,
  },
})

export default connect(mapStateToProps)(RepoDetailPage)
