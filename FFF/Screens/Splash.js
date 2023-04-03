import React, {useEffect} from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground
} from 'react-native';


const Splash = ({ navigation }) => {

   const fun=()=>navigation.navigate('Boarding');
   
  useEffect(()=>{
    setTimeout(()=>{
      fun();
    }, 4000);

  }, []);

  return (

    <View style={styles.container}>


      <ImageBackground source={require('../Picters/splash.png')}
        resizeMode='cover'
        style={{ width: 500, height: 1000 }}
      >

        <Image source={require('../Picters/click.png')}
          resizeMode='cover' style={{ width: 200, height: 80, marginLeft: 110, marginTop: 100 }} />

        <Image source={require('../Picters/Banda.png')}
          resizeMode='cover' style={{ width: 300, height: 350, marginTop: 80, marginLeft: 50 }} />



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

export default Splash;
