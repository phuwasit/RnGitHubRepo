import React from 'react'
import { View, FlatList } from 'react-native'

import RepoItem from './RepoItem'

const RepoList = ({ repos, selectRepo }) => (
  <View>
    <FlatList
      keyExtractor={item => item.id}
      data={repos}
      renderItem={({ item }) => (
        <RepoItem
          key={item.id} repo={item} onPress={() => selectRepo(item)}
        />
      )}
    />
  </View>
)

export default RepoList
