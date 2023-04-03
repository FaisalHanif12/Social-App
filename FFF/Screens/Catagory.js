import React from 'react';
import {StyleSheet, Text, View , Image , TouchableOpacity} from 'react-native';


const Catagory = ({navigation}) => {
  return (
    <View style={styles.container}>
     <Image 
      source={require('../Picters/Upper.png')}
      resizeMode='cover'
      style={{ width: 420, height: 159}}
    /> 

    <Image 
      source={require('../Picters/click.png')}
      resizeMode='cover'
      style={{ width: 118, height: 49 , marginLeft : 170, marginTop : -113}}
    /> 

    <Image 
      source={require('../Picters/Who.png')}
      resizeMode='cover'
      style={{ width: 138, height: 20 , marginLeft : 140, marginTop : 95}}
    /> 
    
    <TouchableOpacity>
    <Image 
      source={require('../Picters/Photo.png')}
      resizeMode='cover'
      style={{ width: 155, height: 183 , marginLeft : 50, marginTop : 29}}
    />
    </TouchableOpacity> 

    <TouchableOpacity>
    <Image 
      source={require('../Picters/illustration.png')}
      resizeMode='cover'
      style={{ width: 155, height: 183 , marginLeft : 50, marginTop : 29}}
    />
    </TouchableOpacity> 

    <TouchableOpacity>
    <Image 
      source={require('../Picters/Designer.png')}
      resizeMode='cover'
      style={{ width: 155, height: 183 , marginLeft : 220, marginTop : -395}}
    /> 
    </TouchableOpacity>

    <TouchableOpacity>
    <Image 
      source={require('../Picters/Vedio.png')}
      resizeMode='cover'
      style={{ width: 155, height: 183 , marginLeft : 220, marginTop : -182}}
    /> 
    </TouchableOpacity>

     

    <Image 
      source={require('../Picters/Share.png')}
      resizeMode='cover'
      style={{ width: 200, height: 10 , marginLeft : 120, marginTop : 30}}
    /> 

    <TouchableOpacity 
     onPress={()=> navigation.navigate('Discover')}
    >
    <Image 
      source={require('../Picters/Explore.png')}
      resizeMode='cover'
      style={{ width: 400, height: 90 , marginLeft : 15 , marginTop : 10}}
    /> 
    </TouchableOpacity>
    
    </View>

    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Catagory;
