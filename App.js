import React, { useState } from "react";
import { SafeAreaView,StyleSheet,Text } from "react-native";
import SignInScreen from './src/screens/SignInScreen';


const App = () => {
  return(
    <SafeAreaView style={styles.root}>
      <SignInScreen/>
    </SafeAreaView>
  )
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
