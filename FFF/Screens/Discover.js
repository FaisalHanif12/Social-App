import React from 'react';
import {StyleSheet, Text, View, Image , ScrollView, TouchableOpacity} from 'react-native';


const Discover = ({navigation}) => {
  return (
    <View style={styles.container}>
     
    <TouchableOpacity 
    onPress={()=> navigation.navigate('Search')}
    >
     <Image 
      source={require('../Picters/Header.png')}
      resizeMode='cover'
      style={{ width: 410, height: 73,marginTop : 4, marginLeft : 1}}
     /> 
    </TouchableOpacity>
     <Text 
     style = {{marginLeft : 17, marginTop : 15, color : 'black' , fontWeight : 'bold', fontSize : 25}}
    >
        Topic
     </Text>
     <Text  
      style = {{marginLeft : 330, marginTop : -24, color : 'blue', fontWeight : '400'}}
     >
       View More
     </Text>
    <ScrollView 
     horizontal
    >

    <TouchableOpacity>
     <Image 
      source={require('../Picters/photoH.png')}
      resizeMode='cover'
      style={{ width: 185, height: 127,marginTop : 24, marginLeft : 3}}
     />
    </TouchableOpacity>

    <TouchableOpacity>
    <Image 
      source={require('../Picters/DesignerH.png')}
      resizeMode='cover'
      style={{ width: 185, height: 127, marginTop : 23, marginLeft : 19}}
    />
    </TouchableOpacity> 


    <TouchableOpacity>
    <Image 
      source={require('../Picters/photoH.png')}
      resizeMode='cover'
      style={{ width: 185, height: 127, marginTop : 23, marginLeft : 19}}
    />
    </TouchableOpacity> 

    <TouchableOpacity>
    <Image 
      source={require('../Picters/DesignerH.png')}
      resizeMode='cover'
      style={{ width: 185, height: 127, marginTop : 23, marginLeft : 19}}
    />
    </TouchableOpacity>

    </ScrollView>
    
    <Text 
     style = {{marginLeft : 13, marginTop : 10, marginBottom : 10, color : 'black' , fontWeight : 'bold', fontSize : 25}}
      >
    Collection

    </Text>
    
    <Text  
      style = {{marginLeft : 330, marginTop : -34, marginBottom : 20, color : 'blue', fontWeight : '400'}}
     >
       View More
     </Text>

    <ScrollView 
     horizontal
    >

    <Image 
      source={require('../Picters/collection.png')}
      resizeMode='cover'
      style={{ width: 715, height: 200, marginTop : 5, marginLeft : 5}}
    />
     
    </ScrollView>
    


    <Text 
     style = {{marginLeft : 13, marginTop : 10, color : 'black' , fontWeight : 'bold', fontSize : 25}}
      >
    Collection

    </Text>
    
    <Text  
      style = {{marginLeft : 330, marginTop : -20, color : 'blue', fontWeight : '400'}}
     >
       View More
     </Text>

    <ScrollView 
     horizontal
    >

    <Image 
      source={require('../Picters/collection.png')}
      resizeMode='cover'
      style={{ width: 715, height: 195, marginTop : 20, marginLeft : 5}}
    />
     
    </ScrollView>


    <Image 
      source={require('../Picters/Navigation.png')}
      resizeMode='cover'
      style={{ width: 430,backgroundColor : `#ffffff`, height: 152, marginBottom : -50, position : 'relative', }}
    />
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color : 'white',
  },
});

export default Discover;
