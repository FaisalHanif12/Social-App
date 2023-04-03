
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

const Forgot = ({navigation}) => {

  const fun=()=>navigation.navigate('SetPass');
  
   const showMessage=()=>{
     Toast.show({

       type : "success",
       text1 : "Email Verified",
       text2 : "You can Reset Your Password",
       visibilityTime : 2000,
       position : 'top'
    
    })

    setTimeout(()=>{
      fun();
    }, 3000)

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
      source={require('../Picters/Em.png')}
      style={{ width: 150, height: 13 , position : 'absolute', marginTop : 305 , marginLeft : 120 }}
    />

    <Image 
      source={require('../Picters/instruct.png')}
      style={{ width: 220, height: 60 , position : 'absolute', marginTop : 350 , marginLeft : 90 }}
    />

    <View style = {{position : 'absolute', marginTop : 450 , borderRadius : 30 ,width: 310, height: 48, borderWidth : 2 , borderColor : 'blue', marginLeft : 50}}>
      <TextInput 
       placeholder='Enter Your Email'
       style = {{marginLeft : 20, fontSize : 18, fontWeight : 'bold'}}
      // onChangeText  = {(val)=> fun(val)}
      />
    </View>


     <TouchableOpacity 
      style = {{position : 'absolute' ,  marginTop : 570, marginLeft : 50,}}
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

export default Forgot;
