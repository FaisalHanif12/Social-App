import React from 'react';
import {StyleSheet, Text, View, ImageBackground , Image ,Button, TouchableOpacity } from 'react-native';


const Challenge = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
      source={require('../Picters/MenPhoto.png')}
      resizeMode='cover'
      style={{ width: 450, height: 250 }}
     />  
     
     <TouchableOpacity 
     onPress={()=> navigation.navigate('Search')}
     >
     <Image
     source={require('../Picters/Arrow.png')}
     resizeMode='cover'
     style={{ width: 40, height: 40, position : 'absolute', marginTop : -210, marginLeft : 21 }}
     />
     </TouchableOpacity>

    <Image
     source={require('../Picters/Whiteline.png')}
     style = {{width : '90%', height : 120, marginLeft : 20, marginTop : -53}}
    /> 

    <Image
     source={require('../Picters/contentofwhite.png')}
     style = {{width : 176, height : 12, marginLeft : 120, marginTop : -69}}
    /> 


    <Image
     source={require('../Picters/Textfield1.png')}
     style = {{width : 336, height : 53, marginLeft : 46, marginTop : 45}}
    />

    <Image
     source={require('../Picters/TextField2.png')}
     style = {{width : 336, height : 53, marginLeft : 46, marginTop : 30}}
    />

    <Image
     source={require('../Picters/Msg.png')}
     style = {{width : 236, height : 10, marginLeft : 90, marginTop : 35}}
    /> 

    <TouchableOpacity 
    onPress={()=> navigation.navigate('Profile')}
    >
    <Image
     source={require('../Picters/SubmitButton.png')}
     style = {{width : 236, height : 50, marginLeft : 90, marginTop : 35}}
    /> 
    </TouchableOpacity>
 
    <Image
     source={require('../Picters/Lorum.png')}
     style = {{width : 245, height : 167, marginLeft : 90, marginTop : 20}}
    /> 
 

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Challenge;
