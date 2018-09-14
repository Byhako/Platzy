import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

class Login extends Component {

  render () {
    return (
      <View style={styles.container}>
        <Text>Login</Text>
        <Button 
          title='Ir a About'
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

export default Login
