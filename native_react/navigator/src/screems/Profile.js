import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

class Profile extends Component {

  render () {
    return (
      <View style={styles.container}>
        <Text Profile</Text>
        <Button 
          title='Ir a la home'
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

export default Profile
