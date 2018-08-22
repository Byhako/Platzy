import React, { Component } from 'react'
import { FlatList, Text, StyleSheet, View, ImageBackground } from 'react-native'

import Empty from './empty'
import Separator from './HorizontalSeparator'
import Suggestion from './suggestion'

export default class CategoryList extends Component {

  renderEmpty = () => <Empty text='No hay sugerencias.' />
  keyExtractor = item => item.id.toString()
  renderItem = ({item}) => <Suggestion {...item} />
  itemSeparator = () => <Separator color='#204A87' />
  
  render () {
    return (
      <ImageBackground 
        source={require('../../assets/background.png')}
        style={styles.container} 
      >
        <Text style={styles.title}>Categorias</Text>
        <FlatList
          data={this.props.list}
          keyExtractor={this.keyExtractor}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={this.renderItem}
          horizontal
        />
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 10
  },
  title: {
    color: '#4c4c4c',
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  }
})
