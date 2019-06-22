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
import { Input, Button, Spinner, Form, Item, Picker, Label, Container, Content } from "native-base";
const { width, height, scale, fontScale } = Dimensions.get("window");
import Entypo from "react-native-vector-icons/Entypo";
import Icon from 'react-native-vector-icons/FontAwesome';

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import firebase from "react-native-firebase";
import { connect } from "react-redux";
import { signinFunc } from '../../Store/Actions/AuthAction'
import validator from "validator";
import TextInput from 'react-native-textinput-with-icons'
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
            // padding: width / 20,
            // justifyContent: "space-around"
          }}
        >

          <View>

            <ImageBackground source={require("../../../assets/maggie/Screenshot_8.jpg")}
              blurRadius={Platform.OS == 'ios' ? 1 : 1}
              style={{ width: '100%', height: '100%' }}>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center"
                }}>
                <View style={{ width: width / 2, height: height / 10 }}>
                  <Image
                    source={require("../../../assets/maggie/logoc.jpg")}
                    style={{ width: width / 2, height: height / 10, }}
                  />
                </View>

                <Text style={{
                  color: '#dcdedf',
                  fontFamily: 'Arial, Helvetica, sans-serif', textAlign: "center",
                  fontWeight: 'bold', fontSize: 15,
                  paddingTop: 25,
                  paddingBottom: 10
                }}
                >
                  Login Your Account</Text>
                <View style={{ width: "80%", height: height / 9, backgroundColor: "#dcdedf", opacity: 0.9, borderRadius: 3, }}>
                  {/* <MaterialCommunityIcons name="email" size={25} color="#24516e" /> */}
                  <Input type="text" keyboardType={"email-address"} placeholder={"Email Address"} placeholder="Email Address"
                    style={{
                      color: "black", fontWeight: "bold",
                      borderBottomColor: 'white',
                      borderBottomWidth: 1,
                      fontSize: 15
                    }}


                    onChangeText={email => this.setState({ email })}></Input>
                  {/* <Entypo name={"lock"} size={25} color="#24516e" /> */}
                  <Input type="password" placeholder="Password" secureTextEntry style={{ color: "black", fontSize: 15, fontWeight: "bold" }}
                    onChangeText={password => this.setState({ password })}
                  ></Input>

                </View>



                <View style={{ height: height / 6, padding: 5 }}>


                  {/* <TouchableOpacity onPress={this.signIn}> */}
                  <Button rounded style={{
                    width: width / 2, backgroundColor: "white", justifyContent: "center",
                    alignItems: "center"
                  }}
                    onPress={this.signIn}
                  >

                    <Text style={{ color: "#000" }}> Login </Text>
                  </Button>


                </View>
                <View >
                  <Text style={{
                    color: "white", paddingBottom: 50, justifyContent: "flex-end", alignItems: "flex-end", alignContent: "flex-end", fontWeight: "bold", textDecorationLine: "underline", fontSize: 15
                  }}>
                    Forget Password?
                  </Text>

                </View>




                <Text style={{ color: "#dcdedf", paddingRight: 5, color: "white" }}>
                  New User?
              <Text
                    style={{
                      color: "#dcdedf",
                      // textDecorationLine: "underline",
                      color: "white",
                      fontWeight: "bold",
                      fontFamily: 'Arial, Helvetica, sans-serif',
                      fontSize: 15,
                      // textDecorationColor: "#dcdedf"
                    }}
                    onPress={() => {
                      // this.replaceScreen("SignUp");
                      this.props.navigation.navigate('SignUp')
                    }}

                  >
                    {"  "} Register Now
              </Text>
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
