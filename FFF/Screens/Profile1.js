import React from 'react';
import {StyleSheet, Text, View, ImageBackground , Image , TouchableOpacity} from 'react-native';


const Profile1 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground 
      source={require('../Profile1Pics/Blue.png')}
      resizeMode='cover'
      style={{ width: 450, height: 800 }}
      />

    <Image
      source={require('../Profile1Pics/profilestatus.png')}
      resizeMode='cover'
      style={{ width: 340, height: 90 , position : 'absolute', marginTop : 10, marginLeft : 35}}
      />


    <Image
      source={require('../Profile1Pics/Home.png')}
      resizeMode='cover'
      style={{ width: 230, height: 520 , position : 'absolute', marginTop : 120, marginLeft : 340}}
    />

    <Image 
      source={require('../Profile1Pics/SideBar.png')}
      resizeMode='cover'
      style={{ width: 290, height: 520 , position : 'absolute', marginTop : 120 , marginLeft : 3}}
    />

    <TouchableOpacity
      onPress={()=> navigation.navigate('Login')}
      style = {{position : 'absolute'}}
    >
    <Image 
      source={require('../Profile1Pics/Logout.png')}
      style={{ width: 100, height: 35 ,  marginTop : 655 , marginLeft : 15}}
    />
   </TouchableOpacity>

   <Image 
      source={require('../Profile1Pics/BotomNav.png')}
      style={{ width: 480, height: 150 ,  marginTop : 675 , marginLeft : -30, position : 'absolute'}}
    />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Profile1;
