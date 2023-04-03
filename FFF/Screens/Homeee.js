import React from 'react';
import {StyleSheet, Text, View , Image, ScrollView, TouchableOpacity} from 'react-native';

const Homeee = ({navigation}) => {
  return (
    <View style={styles.container}>
    <ScrollView>

    <Image 
      source={require('../Picters/Header.png')}
      resizeMode='cover'
      style={{ width: 415, height: 63,marginTop : 4, marginLeft : 0}}
     />

    <Image 
      source={require('../Picters/Bar.png')}
      resizeMode='cover'
      style={{ width: 415, height: 63,marginTop : 1, marginLeft : 0}}
    />

    <Image 
      source={require('../Picters/Card.png')}
      resizeMode='cover'
      style={{ width: 390, height: 362,marginTop : 15, marginLeft : 12}}
    />

    <Image 
      source={require('../Picters/Card2.png')}
      resizeMode='cover'
      style={{ width: 390, height: 362,marginTop : 15, marginLeft : 12}}
    />

    <Image 
      source={require('../Picters/Card.png')}
      resizeMode='cover'
      style={{ width: 390, height: 362,marginTop : 15, marginLeft : 12}}
    />


     </ScrollView>

    <TouchableOpacity 
     onPress={()=>navigation.navigate('Catagory')}
    >
     <Image 
      source={require('../Picters/Navigation.png')}
      resizeMode='cover'
      style={{ width: 430,backgroundColor : `#ffffff`, height: 152, marginBottom : -50, position : 'relative', }}
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

export default Homeee;
