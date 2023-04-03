
import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity
} from 'react-native';

import Login from './Login'

const Boarding=({navigation})=>{
  return(
    
    <View style={styles.container}>


    <ImageBackground source={require('../Picters/splash.png')}
      resizeMode='cover'
      style={{ width: 500, height: 1000 }}
    >

      <Image source={require('../Picters/click.png')}
        resizeMode='cover' style={{ width: 200, height: 80, marginLeft: 110, marginTop: 100 }} />

      <Image source={require('../Picters/Banda.png')}
        resizeMode='cover' style={{ width: 300, height: 350, marginTop: 40, marginLeft: 50 }} />
      <TouchableOpacity 
       onPress={()=> navigation.navigate('Login')}
      >
      <Image source={require('../Picters/Meesage.png')}
        resizeMode='cover' style={{ width: 190, height: 60, marginTop: 50, marginLeft: 190 }} />
      </TouchableOpacity>
    </ImageBackground>

   </View>

  ) 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  images: {
    flex: 1,
  } 
});

export default Boarding;
