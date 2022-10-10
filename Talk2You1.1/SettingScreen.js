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
  ImageBackground
} from "react-native";
 
  export default function SettingScreen({navigation}){
  const [Username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [Confirmpassword, setConfirmPassword] = useState("");
  const [Email, setEmail] = useState("");
  const [Fullname, setFullName] = useState("");
  const [Phonenumber, setpPhoneNumber] = useState("");
 
  return (
    <View style={styles.container}>
      <ImageBackground source={require("./assets/backgroundpics/grey.png")}
     style={styles.ImageBackground}>
      <Text>
    <View style={{flexDirection:'row', alignItems:'center'}}>
    <Image style={styles.image} source={require("./assets/icons/settings-icon.png")} />
        <Text style={styles.TitleText}>Settings</Text>
        
    </View>
</Text>
<Text style={{color:'white', fontSize:15,}}>Selected Language</Text>
<Text>
    <View style={{flexDirection:'row', alignItems:'center'}}>
    <Image style={styles.Languageimage} source={require("./assets/icons/Pakistan.png")} />
        <Text style={styles.LanguageText}>Ur</Text>
        
    </View>
</Text>
 
      <StatusBar style="auto" />
      <Text style={styles.HeadingText}>User Name</Text>
      <View style={styles.inputView}>
        
        <TextInput
          style={styles.TextInput}
          placeholder="JohnSmith"
          onChangeText={(Username) => setUsername(Username)}
        />
      </View>
      <Text style={styles.HeadingText}>Email Address</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="John@Smith.com"
          secureTextEntry={false}
          onChangeText={(Email) => setEmail(Email)}
        />
      </View>
      <Text style={styles.HeadingText}>Full Name</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="John Smith"
          secureTextEntry={false}
          onChangeText={(Username) => setUsername(Username)}
        />
      </View>
      <Text style={styles.HeadingText}>Phone Number</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="+1 042 0987654"
          secureTextEntry={false}
                    onChangeText={(Phonenumber) => setpPhoneNumber(Phonenumber)}
        />
      </View>
      <Text style={styles.HeadingText}>Password</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="*******"
          
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
        
      </View>
      
      
 
      <TouchableOpacity style={styles.SaveBtn}
      onPress={()=>navigation.navigate('ChangePasswordScreen')}
      >
        <Text style={styles.SaveText}
        >Save</Text>
      </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "skyblue",
    // alignItems: "center",
    // justifyContent: "center",
  },
 
  image: {
    
    height:50,
    width: 50,
    resizeMode:'contain'
  },
  Languageimage: {

    height:70,
    width: 70,
    resizeMode:'contain',
    borderColor:'white',
    borderWidth:4,
    borderRadius:50,
  },
  TitleText:{
    paddingLeft:20,
    color:'white',
    fontSize:25,
    fontWeight:'bold',
    
  },
  LanguageText:{
    paddingLeft:20,
    color:'white',
    fontSize:45,
    fontWeight:'bold',
    
  },
 
  inputView: {
    backgroundColor: "white",
    borderRadius: 30,
    width: "80%",
    height: 40,
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
    color:'white',
    fontSize:18,
  },
 
  SaveBtn: {
    width: "50%",
    borderRadius: 35,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#e8bc44",
  },
  
  HeadingText:{
    color:"white",
    fontWeight:"300",
    paddingBottom:5,
    fontSize:15,

  },
  ImageBackground: {
    flex: 1,
    backgroundColor: "blue",
     alignItems: "center",
     justifyContent: "center",
  },
 

});