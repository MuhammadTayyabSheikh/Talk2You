import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
 
export default function LoginScreen({navigation}){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  return (
    <View style={styles.container}>
      <ImageBackground source={require("./assets/backgroundpics/greywhite.png")} 
      style={styles.ImageBackground}>
      <Image style={styles.image} source={require("./assets/icons/login-icon.png")} />
 
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
 
      <TouchableOpacity style={styles.loginBtn}
      onPress={()=>navigation.navigate('MainMenuScreen')}
      >
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "blue",
    // alignItems: "center",
    // justifyContent: "center",
  },
 
  image: {
    marginBottom: 30,
    height:75,
    width: 75,
    resizeMode:'contain'

  },
 
  inputView: {
    backgroundColor: "white",
    borderRadius: 30,
    width: "80%",
    height: 45,
    marginBottom: 20,
    alignItems: 'flex-start',
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  loginText:{
    fontWeight:'bold',
    color:'white',
    fontSize:18,
  },
 
  loginBtn: {
    width: "60%",
    borderRadius: 35,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
    backgroundColor: "#e8bc44",
  },
  ImageBackground: {
    flex: 1,
    backgroundColor: "blue",
     alignItems: "center",
     justifyContent: "center",
  },
});