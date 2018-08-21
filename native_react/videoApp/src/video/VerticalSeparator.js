import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function (props) {
  return (
    <View style={[
      styles.separator,
      {borderTopColor: (props.color) ? props.color: '#eaeaea'}
    ]}>
    </View>
  )
}

const styles = StyleSheet.create({
  separator:{
    borderTopWidth: 1,
  }
})