import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
  ToastAndroid,
  AsyncStorage,
  Alert,
  ImageBackground,
  KeyboardAvoidingView,
  ActivityIndicator



} from "react-native";
import { Input, Button, Spinner, Form, Item, Picker, Label, Container, Content, Icon, } from "native-base";
const { width, height, scale, fontScale } = Dimensions.get("window");
import Entypo from "react-native-vector-icons/Entypo";
// import Icon from 'react-native-vector-icons/FontAwesome';

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import firebase from "react-native-firebase";
import { connect } from "react-redux";
import { signinFunc } from '../../Store/Actions/AuthAction'
import validator from "validator";
// import TextInput from 'react-native-textinput-with-icons'
import User from "./User";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      loading: false
    };
  }
  static navigationOptions = {
    header: null
  };

  replaceScreen = route => {
    this.props.navigation.dispatch({
      type: "ReplaceCurrentScreen",
      key: `${route}`,
      routeName: `${route}`
    });
  };
  signIn = () => {

    // let { country, phonesNumber, code } = this.state;
    const { email, password, confirmPassword, name } = this.state;

    if (!validator.isEmail(email)) {
      ToastAndroid.show("Please fill the email correctly", ToastAndroid.SHORT);
      return;
    } else if (password.toString().length < 8 || password === '') {
      ToastAndroid.show("Password must be of 8 characters", ToastAndroid.SHORT);
      return;
    } else if (this.props.isError === true) {
      Alert.alert(
        'Worng Password',
        this.props.signInerror,
        [


          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: false },
      )

    } else if (this.props.isError === false) {
      Alert.alert('you are Successfully Login')

    }
    this.props.signInAction(this.state, this.props.navigation);





  }


  render() {
    return (
      <ScrollView
        contentContainerStyle={{
          height,
          width,
          // backgroundColor: "#272727"
        }}
        keyboardDismissMode="interactive"
        keyboardShouldPersistTaps="handled"
      >
        <View
          style={{
            flex: 1,
            width: width
            // padding: width / 20,
            // justifyContent: "space-around"
          }}
        >

          <View>

            <ImageBackground source={require("../../../assets/maggie/Screenshot_8.jpg")}
              blurRadius={Platform.OS == 'ios' ? 1 : 2}
              style={{ width: '100%', height: '100%' }}>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  width: width
                }}>
                <View style={{ width: width / 2, height: height / 10 }}>
                  <Image
                    source={require("../../../assets/maggie/maggie-white-logo.png")}
                    style={{ width: width / 2, height: height / 10, }}
                  />
                </View>

                <Text style={{
                  color: '#dcdedf',
                  fontFamily: " OpenSans-Regular",
                  textAlign: "center",
                  fontWeight: 'bold',
                  fontSize: 15,
                  paddingTop: 25,
                  paddingBottom: 10
                }}
                >
                  Login Your Account</Text>

                <View style={{ width: "80%", height: height / 8.3, backgroundColor: "#dcdedf", opacity: 0.9 }}>

                  <Input type="text" keyboardType={"email-address"} placeholder={"Email Address"} placeholder="Email Address"
                    style={{
                      color: "#000",
                      fontWeight: "200",
                      padding: 8,
                      borderBottomColor: 'white',
                      borderBottomWidth: 1,
                      fontSize: 15,
                    }}
                    onChangeText={email => this.setState({ email })}></Input>
                  {/* </Item>

                     <Item >
                  <Icon active name="lock" style={{paddingLeft:13}} /> */}
                  <Input type="password" placeholder="Password"
                    secureTextEntry
                    style={{
                      color: "#000",
                      fontSize: 15,
                      fontWeight: "200",
                      padding: 8
                    }}
                    onChangeText={password => this.setState({ password })}
                  ></Input>


                </View>


                <View style={{
               
                }}>
                  <Text style={{
                    color: "white",
                    paddingBottom: 20,
                    
                    paddingTop: 18,
                

                    paddingLeft: "40%",
                    fontWeight: "bold",
                    fontSize: 15,
                    fontFamily: " OpenSans-Regular",
                  }}>
                    Forget Password?
                  </Text>

                </View>

                <View style={{ height: height / 8, padding: 5, paddingTop: 10 }}>


                  {/* <TouchableOpacity onPress={this.signIn}> */}
                  <Button rounded style={{
                    width: width / 2, backgroundColor: "white", justifyContent: "center",
                    alignItems: "center"
                  }}
                    onPress={this.signIn}
                  >

                    <Text style={{
                      color: "#000",
                      fontFamily: " OpenSans-Regular",
                    }}>
                      Login
                   </Text>
                  </Button>


                </View>





                <Text style={{ color: "#dcdedf", paddingRight: 5, color: "white", fontFamily: " OpenSans-Regular", fontWeight: "200" , paddingBottom:80,
              paddingTop:20}}>
                  New User?
              <Text
                    style={{
                      color: "#dcdedf",
                      // textDecorationLine: "underline",
                      color: "white",
                      fontWeight: "300",
                      fontFamily: " OpenSans-Regular",
                      fontSize: 15,

                    }}
                    onPress={() => {

                      this.props.navigation.navigate('SignUp')
                    }}

                  >
                    {"  "} Register Now
              </Text>

                </Text>
                <Text style={{ color: "#dcdedf", color: "white", fontFamily: " OpenSans-Regular", fontWeight: "200", textAlign: "center",}}>
                  Copyright © 2018, Maggie
              </Text>
                

                 

                
              </View>

                
              
              


            </ImageBackground>
          </View>

        </View>
      </ScrollView>

    );

  }
}
function mapStateToProps(state) {
  console.log("SIGNING ERRORR", state.authReducer.signInerror)
  return {
    isProgress: state.authReducer.isProgress,
    signInerror: state.authReducer.signInerror,
    isError: state.authReducer.isError,
    isProgress: state.authReducer.isProgress



  };
}
function mapDispatchToProps(dispatch) {
  return {

    signInAction: (payload, path) => {
      dispatch(signinFunc(payload, path));
    }
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
