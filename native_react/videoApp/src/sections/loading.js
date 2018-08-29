import React from 'react'
import {StyleSheet, Image, ActivityIndicator, View} from 'react-native'

export default function loading (props) {
  return (
      <View style={styles.container}>
        <Image
          source={require('../../assets/logo.png')}
          style={styles.logo}
        />
        <ActivityIndicator size='large' color='#BE2EE2' />
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    marginBottom: 10,
    width: 200,
    height: 80,
    resizeMode: 'contain'
  }
})
