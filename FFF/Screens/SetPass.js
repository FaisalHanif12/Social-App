import React, {useEffect} from 'react';
import
 {StyleSheet,
 Text,
 View,
 ImageBackground,
 Image,
 TouchableOpacity,
 TextInput,

} from 'react-native';

import  Toast  from 'react-native-toast-message';

const SetPass = ({navigation}) => {

    const fun=()=>navigation.navigate('Login');
  
   const showMessage=()=>{
     Toast.show({

       type : "success",
       text1 : "Password Changed",
       text2 : "Now Please Login",
       visibilityTime : 3000,
       position : 'top'
    
    })

    setTimeout(()=>{
        fun();
      }, 4000)

  }
  
  return(

    <View style={styles.container}>
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

    <Image 
      source={require('../Picters/Pas.png')}
      style={{ width: 180, height: 13 , position : 'absolute', marginTop : 290 , marginLeft : 110 }}
    />

    <Image 
      source={require('../Picters/NewPas.png')}
      style={{ width: 230, height: 60 , position : 'absolute', marginTop : 330 , marginLeft : 90 }}
    />

    <View style = {{position : 'absolute', marginTop : 420 , borderRadius : 30 ,width: 310, height: 48, borderWidth : 2 , borderColor : 'blue', marginLeft : 50}}>
      <TextInput 
       placeholder='Password'
       secureTextEntry = {true}
       style = {{marginLeft : 20, fontSize : 18, fontWeight : 'bold'}}
      // onChangeText  = {(val)=> fun(val)}
      />
    </View>


    <View style = {{position : 'absolute', marginTop : 500 , borderRadius : 30 ,width: 310, height: 48, borderWidth : 2 , borderColor : 'blue', marginLeft : 50}}>
      <TextInput 
       placeholder='Confirm Password'
       secureTextEntry = {true}
       style = {{marginLeft : 20, fontSize : 18, fontWeight : 'bold'}}
      // onChangeText  = {(val)=> fun(val)}
      />
    </View>


     <TouchableOpacity 
      style = {{position : 'absolute' ,  marginTop : 590, marginLeft : 50,}}
      onPress={showMessage}
      >
     <Image 
      source={require('../Picters/Button.png')}
      style={{ width: 310, height: 51 }}
       />
    </TouchableOpacity>

    <Toast/>

    <Image 
      source={require('../Picters/Gdesign.png')}
      style={{ width: 200, height: 81 , position : 'absolute', marginTop : 670, marginLeft : 105}}
    />

    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SetPass;
