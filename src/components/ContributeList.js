import React from 'react'
import { View, FlatList } from 'react-native'

import ContributeItem from './ContributeItem'

const ContributeList = ({ contributes }) => (
  <View style={{ marginTop: 16 }}>
    <FlatList
      numColumns={3}
      keyExtractor={item => item.id}
      data={contributes}
      renderItem={({ item }) => (
        <ContributeItem contribute={item} />
      )}
    />
  </View>
)

export default ContributeList
