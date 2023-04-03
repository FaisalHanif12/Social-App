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
import  Toast  from 'react-native-toast-message';
const SignIn = ({navigation}) => {
  const showMessage=()=>{
    Toast.show({
      type : "success",
      text1 : "Account Created",
      text2 : "You can Login",
      visibilityTime : 2000,
      position : 'top'
   })
}
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
     
     <View style = {{ position : 'absolute',backgroundColor : '#00000025', marginTop : 310 , borderRadius : 30 , borderColor : 'black', width : '85%', marginLeft : 25}}>
      <TextInput 
       placeholder='UserName'
       style = {{marginLeft : 20, fontSize : 18, fontWeight : 'bold'}}
      // onChangeText  = {(val)=> fun(val)}
      />
       </View>


      <View style = {{position : 'absolute',backgroundColor : '#00000025', marginTop : 410 , borderRadius : 30 , borderColor : 'black', width : '85%', marginLeft : 25}}>
      <TextInput 
       placeholder='Email'
       style = {{marginLeft : 20, fontSize : 18, fontWeight : 'bold'}}
      // onChangeText  = {(val)=> fun(val)}
      />
       </View>


       <View style = {{position : 'absolute',backgroundColor : '#00000025', marginTop : 510 , borderRadius : 30 , borderColor : 'black', width : '85%', marginLeft : 25}}>
      <TextInput 
       placeholder='Password'
       secureTextEntry = {true}
       style = {{marginLeft : 20, fontSize : 18, fontWeight : 'bold'}}
      // onChangeText  = {(val)=> fun(val)}
      />
       </View>

      <TouchableOpacity 
       style = {{position : 'absolute' ,  marginTop : 620, marginLeft : 30,}}
        onPress= {showMessage}
       >
       <Image 
      source={require('../Picters/SButton.png')}
      style={{ width: 340, height: 55 }}
       />
      </TouchableOpacity>

      <Toast/>

      <View style ={{ marginTop : 720 ,marginLeft : 130, position : 'absolute'}}>
        <Text>
          Already Have Account?
        </Text>
      </View>

      <TouchableOpacity
       onPress={()=> navigation.navigate('Login')}
       style = {{ marginTop : 720 , position : 'absolute',marginLeft : 277}}
      >
        <Text
         style = {{color : 'blue', fontWeight : 'bold'}}
        >
          LOGIN 
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

export default SignIn;
