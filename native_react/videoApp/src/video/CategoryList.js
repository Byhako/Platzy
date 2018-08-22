import React, { Component } from 'react'
import { View, FlatList } from 'react-native'

import Empty from './empty'
import Separator from './VerticalSeparator'
import Suggestion from './suggestion'

export default class CategoryList extends Component {

  renderEmpty = () => <Empty text='No hay sugerencias.' />
  keyExtractor = item => item.id.toString()
  renderItem = ({item}) => <Suggestion {...item} />
  itemSeparator = () => <Separator color='#204A87' />
  
  render () {
    return (
      <FlatList
        data={this.props.list}
        keyExtractor={this.keyExtractor}
        ListEmptyComponent={this.renderEmpty}
        ItemSeparatorComponent={this.itemSeparator}
        renderItem={this.renderItem}
      />
    )
  }
}