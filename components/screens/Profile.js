import React, { Component } from "react";
import {
    View,
    Text,
    SafeAreaView,
    Platform,
    StyleSheet,   
 StatusBar,
 Alert,
  Button, 
  TextInput,
  Image,
  TouchableHighlight,


} from "react-native";

import AntIcon from "react-native-vector-icons/AntDesign";
class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email   : '',
            password: '',
               
        }}    

    componentWillMount() {
        this.startHeaderHeight = 60
        if (Platform.OS == 'android') {
            this.startHeaderHeight = 80 + StatusBar.currentHeight
        }
    }
  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }
    


    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <View style={{ height: this.startHeaderHeight, backgroundColor: '#0B3364', borderBottomWidth: 1, borderBottomColor: '#dddddd' }}>
                        <View style={{
                             marginHorizontal: 20,
                            shadowOffset: { width: 0, height: 0 },
                            shadowColor: 'black',
                            shadowOpacity: 0.2,
                            elevation: 1,
                            marginTop: Platform.OS == 'android' ? 30 : null
                        }}>
                            <Text style={{color:'white',fontSize:22,fontWeight:'600',paddingLeft:10,textAlign:'justify',paddingTop:10}}>My Profile</Text>
                            </View>
                    </View>
                    <View style={{marginTop: 30, paddingHorizontal: 30,paddingBottom: 20}}>

<Text style={{fontSize:22 ,textAlign:'center',fontWeight:'600',padding:10}}>LOG IN HERE</Text>
</View>

<View style={{marginTop: 30, paddingHorizontal: 30,paddingBottom: 20,      backgroundColor: '#FFFFFF',}}>
<View style={styles.container}>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://previews.123rf.com/images/mamanamsai/mamanamsai1501/mamanamsai150100386/35929070-email-icon-on-blue-background-clean-vector.jpg'}}/>
          <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email})}/>
        </View>
        
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              />
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener('login')}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('restore_password')}>
            <Text>Forgot your password?</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('register')}>
            <Text>Register</Text>
        </TouchableHighlight>
      </View>
      </View>

</View>
</SafeAreaView>
)}}

export default Profile;

    

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',

    alignItems: 'center',
    marginTop: 120, 
    paddingHorizontal: 30,
    paddingBottom: 20

  },
  inputContainer: {
      borderColor: '#DCDCDC',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#0B3364",
  },
  loginText: {
    color: 'white',
  }
});

