import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import { fetchRepos, selectRepo } from '../actions/reposActions'
import { fetchContributors } from '../actions/contributorsActions'

import RepoList from '../components/RepoList'

class ReposPage extends Component {
  constructor(props) {
    super(props)
    this.state = { searchText: '' }
    this.selectRepoAndNavigate = this.selectRepoAndNavigate.bind(this)
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this)
  }

  handleSearchSubmit() {
    console.log(this.state)
    if (typeof this.state.searchText === 'string' && this.state.searchText !== '') {
      this.props.fetchRepos(this.state.searchText.toLocaleLowerCase())
    }
  }
  selectRepoAndNavigate(repo) {
    this.props.selectRepo(repo)
    this.props.fetchContributes(repo.owner.login, repo.name)
    this.props.navigation.navigate('RepoDetail')
  }

  render() {
    if (this.props.isLoading) {
      return (
        <View style={styles.loading}>
          <Text>Loading...</Text>
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search username"
          onChangeText={searchText => this.setState({ searchText })}
          onSubmitEditing={this.handleSearchSubmit}
        />
        <RepoList repos={this.props.repos} selectRepo={this.selectRepoAndNavigate} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchInput: {
    height: 40,
    margin: 16,
    padding: 8,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#eee',
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const mapStateToProps = state => ({
  repos: state.repos.data,
  isLoading: state.repos.isLoading,
})

const mapDispatchToProps = dispatch => ({
  fetchRepos: username => dispatch(fetchRepos(username)),
  selectRepo: repo => dispatch(selectRepo(repo)),
  fetchContributes: (owner, repoName) => dispatch(fetchContributors(owner, repoName)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ReposPage)
