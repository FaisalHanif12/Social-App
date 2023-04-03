import React from 'react';
import {
StyleSheet,
Text,
View,
ImageBackground,
Image,
TextInput,
TouchableOpacity 
} from 'react-native';

import * as Animatable from 'react-native-animatable';

const Login = ({navigation}) => {
  return (
    <Animatable.View 
    animation= "fadeInUpBig"
    duration= {1000}>
     <ImageBackground 
      source={require('../Picters/Welcome.png')}
      resizeMode='cover'
      style={{ width: 450, height: 300 }}
     />

     <Image 
      source={require('../Picters/sheet.png')}
      resizeMode='cover'
      style={{ width: 415, height: 900 , borderTopRightRadius : 30 , borderTopLeftRadius : 30 , marginTop : -40, marginLeft : 0}}
     />
     
     <View style = {{ position : 'absolute',backgroundColor : '#00000025', marginTop : 330 , borderRadius : 30 , borderColor : 'black', width : '85%', marginLeft : 25}}>
      <TextInput 
       placeholder='Email'
       style = {{marginLeft : 20, fontSize : 18, fontWeight : 'bold'}}
      // onChangeText  = {(val)=> fun(val)}
      />
       </View>


      <View style = {{position : 'absolute',backgroundColor : '#00000025', marginTop : 430 , borderRadius : 30 , borderColor : 'black', width : '85%', marginLeft : 25}}>
      <TextInput 
       placeholder='Password'
       secureTextEntry = {true}
       style = {{marginLeft : 20, fontSize : 18, fontWeight : 'bold'}}
      // onChangeText  = {(val)=> fun(val)}
      />
       </View>

      <TouchableOpacity 
       onPress={()=> navigation.navigate('Forgot')}
       style = {{position : 'absolute' ,  marginTop : 520, marginLeft : 120,marginBottom : 20}}
      >
       <Image 
      source={require('../Picters/FGP.png')}
      style={{ width: 160, height: 11 , position : 'absolute',}}
       />
      </TouchableOpacity>

      <TouchableOpacity 
       style = {{position : 'absolute' ,  marginTop : 570, marginLeft : 25,}}
       onPress = {()=> navigation.navigate('Homeee')}
       >
       <Image 
      source={require('../Picters/Login.png')}
      style={{ width: 350, height: 64 }}
       />
      </TouchableOpacity>

      <Image 
      source={require('../Picters/Lg.png')}
      style={{ marginTop : 650 , width: 90, height: 8 , position : 'absolute',marginLeft : 160}}
       />
      
      <TouchableOpacity 
        style = {{ marginTop : 670 ,marginLeft : 170, position : 'absolute'}}
      >
      <Image 
      source={require('../Picters/Google.png')}
      style={{ width: 30, height: 30 ,}}
      />
      </TouchableOpacity>

      <TouchableOpacity 
       style = {{ marginTop : 670 , position : 'absolute',marginLeft : 210}}
      >
      <Image 
      source={require('../Picters/Facebook.png')}
      style={{ width: 30, height: 30 ,}}
      />
      </TouchableOpacity>

      <View style ={{ marginTop : 720 ,marginLeft : 130, position : 'absolute'}}>
        <Text>
          Don't Have Account?
        </Text>
      </View>

      <TouchableOpacity
       onPress={()=> navigation.navigate('SignIn')}
       style = {{ marginTop : 720 , position : 'absolute',marginLeft : 262}}
      >
        <Text
         style = {{color : 'blue', fontWeight : 'bold'}}
        >
          SIGN UP
        </Text>
      </TouchableOpacity>

    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:'red'
  },

});

export default Login;
