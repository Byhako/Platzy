import React, { Component } from 'react'
import { FlatList, Text, StyleSheet, View } from 'react-native'

import Empty from './empty'
import Separator from './VerticalSeparator'
import Suggestion from './suggestion'

export default class Suggestions extends Component {

  renderEmpty = () => <Empty text='No hay sugerencias.' />
  itemSeparator = () => <Separator color='#204A87' />
  renderItem = ({item}) => <Suggestion {...item} />
  keyExtractor = item => item.id.toString()
  
  render() {


    return (
      <View style={styles.container}>
        <Text style={styles.title}>Recomendado para ti</Text>

        <FlatList
          data={this.props.list}
          keyExtractor={this.keyExtractor}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={this.renderItem}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10
  },
  title: {
    color: '#4c4c4c',
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    marginLeft: 8
  }
})
