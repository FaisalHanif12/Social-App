import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Splash from '../Screens/Splash';
import Boarding from '../Screens/Boarding';

const Home = () => {
  return (
    <View style={styles.container}>
      <Splash />
      <Boarding />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
