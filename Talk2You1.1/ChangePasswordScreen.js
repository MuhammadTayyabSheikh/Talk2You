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
  TouchableOpacity,
} from "react-native";
 
  export default function ChangePasswordScreen(){
    
  const [CurrentPassword, setCurrentPassword] = useState("");
  const [NewPassword, setNewPassword] = useState("");
  const [ConfirmNewPassword, setConfirmNewPassword] = useState("");
 
  return (
    <View style={styles.container}>
      <Text style={{marginBottom:10}}>
    <View style={{flexDirection:'row', alignItems:'center'}}>
    <Image style={styles.image} source={require("./assets/icons/settings-icon.png")} />
        <Text style={styles.TitleText}>Change Password</Text>
        
    </View>
</Text>
 
      <StatusBar style="auto" />
      <Text style={styles.HeadingText}>Current Password</Text>
      <View style={styles.inputView}>
        
        <TextInput
          style={styles.TextInput}
          placeholder="*******"
          onChangeText={(CurrentPassword) => setCurrentPassword(CurrentPassword)}
        />
      </View>
      <Text style={styles.HeadingText}>New Password</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="*******"
          
          secureTextEntry={true}
          onChangeText={(NewPassword) => setNewPassword(NewPassword)}
        />
      </View>
      <Text style={styles.HeadingText}>Confirm New Password</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="*******"
          
          secureTextEntry={true}
          onChangeText={(ConfirmNewPassword) => setConfirmNewPassword(ConfirmNewPassword)}
        />
      </View>
      
 
      <TouchableOpacity style={styles.SaveBtn}>
        <Text style={styles.SaveText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
 
  image: {
    marginBottom: 20,
    height:70,
    width: 70,
    resizeMode:'contain',
    marginLeft:15,
  },
  TitleText:{
    paddingLeft:20,
    color:'white',
    fontSize:20,
    fontWeight:'bold',
    paddingBottom:20,
  },
 
  inputView: {
    backgroundColor: "white",
    borderRadius: 30,
    width: "80%",
    height: 35,
    marginBottom: 20,
    alignItems: 'flex-start',
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  SaveText:{
    fontWeight:'bold',
    color:'white'
  },
 
  SaveBtn: {
    width: "40%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 150,
    backgroundColor: "#e8bc44",
  },
  
  HeadingText:{
    color:"white",
    fontWeight:"300",
    padding:1,

  },

});
