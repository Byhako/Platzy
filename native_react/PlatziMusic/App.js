/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  Platform, StyleSheet,
  Text, View, Image,
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'

type Props = {};
export default class App extends Component<Props> {
  
  render() {
    const imagen = 'http://listas.eleconomista.es/system/lists/000/013/992/medium/listas-economista-vanessa-hudgens.jpg?1518398888'
    const name = 'Vanessa Hudgens'
    const likes = 200
    const comments = 140

    return (
      <View style={styles.container}>
        <View style={styles.artisBox}>
          <Image style={styles.image} source={{uri: imagen}} />
          <View style={styles.info}>
            <Text style={styles.name}> {name} </Text>
            <View style={styles.row}>
              <View style={styles.iconContainer}>
                <Icon name="ios-heart-outline" size={30} color="gray" />
                <Text style={styles.count}> {likes} </Text>
              </View>

              <View style={styles.iconContainer}>
                <Icon name="ios-chatboxes-outline" size={30} color="gray" />
                <Text style={styles.count}> {comments} </Text>
              </View>
              
              
            </View>

          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,  //all screem
    backgroundColor: 'lightgray',
  },
  artisBox: {
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  info: {
    flex:1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  name: {
    fontSize: 20,
    marginTop: 10,
    color: '#333'
  },
  image: {
    width: 150,
    height: 110,
  },
  row : {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 40,
    marginTop: 15
  },
  iconContainer: {
    flex:1,
    alignItems: 'center'
  },
  count: {
    color: 'gray'
  }
})

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
})

/*
//    alignSelf: 'flex-end',
//    alignSelf: 'flex-start',
// flexWrap: 'wrap', // sobresale del contenedor, -> reorganiza elementos
//flex: 1,  //all screem
//flexDirection: 'column',
//justifyContent: 'center',
// justifyContent: 'space-between',  // solo espacio entre elementos
// justifyContent: 'space-arrow', // tengo en cuenta bordes
*/