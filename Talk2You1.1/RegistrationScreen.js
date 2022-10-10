import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Alert, SafeAreaView } from "react-native";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ImageBackground,
  ScrollView
} from "react-native";
 
  export default function RegistrationScreen({navigation}){
  const [Username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [Confirmpassword, setConfirmPassword] = useState("");
  const [Email, setEmail] = useState("");
  const [Fullname, setFullName] = useState("");
  const [Phonenumber, setpPhoneNumber] = useState("");

  const getLanguages = async () => {
    // console.log('BTN Clicked')
    try {
     const response = await fetch('http://talk2you-live.lingmo-api.com/api/user', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        password: "123456", 
        languageId: "en-US", 
        couponCode: "", 
        username: "ahmed7", 
        deviceToken: "", 
        fullName: "Ahmed Ahmed", 
        email: "ahmed", 
        notificationApp: "lingmoimtab", 
        phone: "03219434204"
      })
    });
     const json = await response.json();
     console.log('Sign Up API Data is =',json)
     global.token=json.data
     console.log('Token is =',global.token)
    //  Alert.alert(json.message)
     navigation.navigate('LoginScreen')
   } catch (error) {
     console.error(error);
   } finally {
    //  setLoading(false);
   }
}

  return (
    <ScrollView style={styles.container}>
      <ImageBackground source={require("./assets/backgroundpics/grey.png")} 
      style={styles.ImageBackground}>
      <Text>
    <View style={{flexDirection:'row', alignItems:'center'}}>
    <Image style={styles.image} source={require("./assets/icons/register-icon.png")} />
        <Text style={styles.TitleText}>Registration</Text>
        
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
      <Text style={styles.HeadingText}>Password</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="*******"
          
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <Text style={styles.HeadingText}>Confirm Password</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="*******"
          
          secureTextEntry={true}
          onChangeText={(Confirmpassword) => setConfirmPassword(Confirmpassword)}
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
      
 
      <TouchableOpacity style={styles.SaveBtn}
      onPress={()=>
        getLanguages()
        // Alert.alert('Hello')
      }
      >
        <Text style={styles.SaveText}>Save</Text>
      </TouchableOpacity>
      </ImageBackground>
    </ScrollView>

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
    marginBottom: 20,
    height:60,
    width: 60,
    resizeMode:'contain',
    marginTop:30,
    
  },
  TitleText:{
    paddingLeft:20,
    color:'white',
    fontSize:25,
    fontWeight:'bold',
    marginTop:10,
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
  SaveText:{
    fontWeight:'bold',
    color:'white',
    fontSize:18,
  },
 
  SaveBtn: {
    width: "50%",
    borderRadius: 35,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#e8bc44",
  },
  
  HeadingText:{
    color:"white",
    fontWeight:"300",
    padding:1,
    fontSize:18,

  },
  ImageBackground: {
    flex: 1,
    backgroundColor: "blue",
     alignItems: "center",
     justifyContent: "center",
  },

});
