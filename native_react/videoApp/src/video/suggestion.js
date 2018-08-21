import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function Suggestion (props) {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Image
          style={styles.cover}
          source={require('../../assets/logo.png')}
        />
        <View style={styles.gener}>
          <Text style={styles.generText}>bebe</Text>
        </View>
      </View>

      <View style={styles.right}>
        <Text style={styles.title}> Selene </Text>
        <Text style={styles.year}> 2007 </Text>
        <Text style={styles.rating}> 5 starts </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  cover: {
    height: 150,
    width: 100,
    resizeMode: 'contain'
  },
  left: {},
  gener: {
    position: 'absolute',
    left: 0,
    top: 0,
    backgroundColor: 'black'
  },
  generText: {
    color: 'white',
    fontSize: 11,
    paddingVertical: 5,
    paddingHorizontal: 7
  },
  right: {
    paddingLeft: 10,
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 18,
    color: '#44546d'
  },
  year: {
    backgroundColor: '#70b124',
    paddingVertical: 4,
    paddingHorizontal: 6,
    color: 'white',
    fontSize: 11,
    borderRadius: 5,
    overflow: 'hidden',
    alignSelf: 'flex-start'
  },
  rating: {
    color: '#6b6b6b',
    fontSize: 14,
    fontWeight: 'bold'
  }
})