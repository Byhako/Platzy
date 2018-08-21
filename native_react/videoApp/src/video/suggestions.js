import React, { Component } from 'react'
import { FlatList, Text } from 'react-native'

import Layout from './suggestionListLayout'
import Empty from './empty'
import Separator from './VerticalSeparator'

export default class Suggestions extends Component {

  renderEmpty = () => <Empty text='No hay sugerencias.' />
  itemSeparator = () => <Separator color='#b9f182' />

  render() {
    const list = [
      {
        title: 'Selene',
        key: '1'
      },
      {
        title: 'pokemon',
        key: '2'
      }
    ]

    return (
      <Layout
        title='Recomendado para ti'
      >
        <FlatList
          data={list}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={({item}) => <Text>{item.title}</Text>}
        />
      </Layout>
    )
  }
}

