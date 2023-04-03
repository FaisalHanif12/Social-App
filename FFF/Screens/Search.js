import React from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Image , ScrollView} from 'react-native';



const Search = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style = {{ position : 'absolute',backgroundColor : '#00000025', marginTop : 25 , borderRadius : 30 , borderColor : 'black', width : '90%', marginLeft : 15}}>
      <TextInput 
       placeholder='Search'
       style = {{marginLeft : 20, fontSize : 18, fontWeight : 'bold'}}
      // onChangeText  = {(val)=> fun(val)}
      />
       </View>

       <ScrollView>

    <TouchableOpacity 
    onPress={()=> navigation.navigate('Challenge')}
    >
     <Image 
      source={require('../Picters/PhotoV.png')}
      resizeMode='cover'
      style={{ width: 395, height: 165,marginTop : 100, marginLeft : 3}}
     />
    </TouchableOpacity>

    <TouchableOpacity>
     <Image 
      source={require('../Picters/illustrationV.png')}
      resizeMode='cover'
      style={{ width: 395, height: 165,marginTop : 15, marginLeft : 3}}
     />
    </TouchableOpacity>


    <TouchableOpacity>
     <Image 
      source={require('../Picters/DesignV.png')}
      resizeMode='cover'
      style={{ width: 395, height: 165,marginTop : 15, marginLeft : 3}}
     />
    </TouchableOpacity>


    <TouchableOpacity>
     <Image 
      source={require('../Picters/MakingVedioV.png')}
      resizeMode='cover'
      style={{ width: 395, height: 165,marginTop : 15, marginLeft : 3}}
     />
    </TouchableOpacity>
    </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Search;
