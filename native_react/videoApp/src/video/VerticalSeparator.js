import React from 'react'
import { View, StyleSheet } from 'react-native'

export default function (props) {
  return (
    <View style={[
      styles.separator,
      {borderTopColor: (props.color) ? props.color: '#eaeaea'}
    ]} />
  )
}

const styles = StyleSheet.create({
  separator:{
    borderTopWidth: 1,
    marginVertical: 5,
  }
})