import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';


const Message = () => {
  return (
    <View style={styles.container}>
     <ImageBackground 
      source={require('../Profile1Pics/MESSAGE.png')}
      resizeMode='cover'
      style={{ width: 410, height: 780, marginTop : -15}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Message;
