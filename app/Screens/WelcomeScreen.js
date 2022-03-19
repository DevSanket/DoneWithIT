import React from "react";
import { ImageBackground, StyleSheet,View, Image,Text } from "react-native";
import Button from "../Components/Button";

function WelcomeScreen({navigation}) {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
        <View style={styles.logoContainer}>
        <Image
        style={styles.logo}
            source={require("../assets/logo-red.png")}
        />
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
        </View>
        <View style={styles.buttonContainer}>
        <Button title="login" onPress={() => navigation.navigate("Login")}  />
        <Button title="register" color="secondary" onPress={() => navigation.navigate("Register")}/>
        </View>
        </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent:"flex-end"
  },
  buttonContainer:{
    padding:20,
    width:"100%"
  },
  RegisterButton:{
      width:"100%",
      height:70,
      backgroundColor:"#4ecdc4"
  },
  logo: {
      width:100,
      height:100,
      alignSelf:"center"
  },
  logoContainer:{
      position:"absolute",
      top:70,
      alignItems:"center",
      width:"100%"
  },
  tagline:{
    fontSize:25,
    fontWeight:"600",
    paddingVertical:20,
  }
});
export default WelcomeScreen;
