import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


const Profile = ({navigation}) => {
  return (
    <View style={styles.container}>

    <ScrollView>
     <Image 
      source={require('../Picters/Upper.png')}
      resizeMode='cover'
      style={{ width: 420, height: 159}}
    />

    <Image 
      source={require('../Picters/follow.png')}
      resizeMode='cover'
      style={{ width: 420, height: 45 , marginTop : -110}}
    />

    <Image 
      source={require('../Picters/profilepic.png')}
      resizeMode='cover'
      style={{ width: 120, height: 120 , marginTop : 10, marginLeft : 135}}
    />


    <Image 
      source={require('../Picters/profilename.png')}
      resizeMode='cover'
      style={{ width: 155, height: 22 , marginTop : 10, marginLeft : 125}}
    />

    <Image 
      source={require('../Picters/ProfileSec.png')}
      resizeMode='cover'
      style={{ width: 115, height: 12 , marginTop : 14, marginLeft : 143}}
    />

    <Image 
      source={require('../Picters/followbar.png')}
      resizeMode='cover'
      style={{ width: 395, height: 52 , marginTop : 24, marginLeft : 13}}
    />

    <Image 
      source={require('../Picters/instafacelogo.png')}
      resizeMode='cover'
      style={{ width: 163, height: 19 , marginTop : 24, marginLeft : 123}}
    />

    <Image 
      source={require('../Picters/Shotsbar.png')}
      resizeMode='cover'
      style={{ width: 355, height: 35 , marginTop : 24, marginLeft : 13}}
    />

    <Image 
      source={require('../Picters/Menn.png')}
      resizeMode='cover'
      style={{ width: 150, height: 180 , marginTop : 24, marginLeft : 27}}
    />

    <Image 
      source={require('../Picters/Leaf.png')}
      resizeMode='cover'
      style={{ width: 220, height: 150 , marginLeft : 190, marginTop : -179}}
    />

    <Image 
      source={require('../Picters/Women.png')}
      resizeMode='cover'
      style={{ width: 220, height: 190 , marginLeft : 190, marginTop : 13}}
    />

    <Image 
      source={require('../Picters/Glass.png')}
      resizeMode='cover'
      style={{ width: 150, height: 190 , marginTop : -164, marginLeft : 27}}
    />
    </ScrollView>


     <View style = {{width : '100%', height : 80, backgroundColor : 'white'}}>
        <View style = {{marginTop : 20 , marginLeft : 45}}>
           <TouchableOpacity 
           onPress={()=> navigation.navigate('Profile1')}
            style = {{backgroundColor : 'blue' , width : 130, height : 46, justifyContent : 'center', alignItems : 'center', borderRadius : 20}}
           >
                <Text style = {{fontSize : 20, fontWeight : 'bold', color : 'white'}}>
                Donate
                </Text>
               
           </TouchableOpacity>
        </View>

        <View style = {{marginTop : -45 , marginLeft : 230}}>
           <TouchableOpacity 
            onPress={()=> navigation.navigate('Message')}
            style = {{backgroundColor : 'white' , width : 125, height : 43, justifyContent : 'center', alignItems : 'center', borderRadius : 20 , borderWidth : 1, borderColor : 'blue'}}
           >
                <Text style = {{fontSize : 20, fontWeight : 'bold', color : 'blue'}}>
                Message
                </Text>
               
           </TouchableOpacity>
        </View>

     </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Profile;
