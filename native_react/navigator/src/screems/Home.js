import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

class Home extends Component {

  render () {
    return (
      <View style={styles.container}>
        <Text>Home</Text>
        <Button 
          title='Ir al login'
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alingItems: 'center',
    justifyContent: 'center'
  }
})

export default Home
