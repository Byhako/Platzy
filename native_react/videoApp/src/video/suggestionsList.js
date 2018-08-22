import React, { Component } from 'react'
import { FlatList, Text } from 'react-native'

import Layout from './suggestionListLayout'
import Empty from './empty'
import Separator from './VerticalSeparator'
import Suggestion from './suggestion'

export default class Suggestions extends Component {

  renderEmpty = () => <Empty text='No hay sugerencias.' />
  itemSeparator = () => <Separator color='#b9f182' />
  renderItem = ({item}) => <Suggestion {...item} />
  keyExtractor = item => item.id.toString()
  
  render() {


    return (
      <Layout
        title='Recomendado para ti'
      >
        <FlatList
          data={this.props.list}
          keyExtractor={this.keyExtractor}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={this.renderItem}
        />
      </Layout>
    )
  }
}

