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
      loading: false,
      NewYear: ""
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


  componentDidMount() {
    let year = new Date().getFullYear(); //Current Year
    this.setState({
      NewYear: year
    })
  }
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
        '',
        this.props.signInerror,
        [


          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: false },
      )

    }
    this.props.signInAction(this.state, this.props.navigation);
  }


  render() {
    return (
      <View style={{
        height: height
      }}>


        {/* <ScrollView
          contentContainerStyle={{
            height,
            width,
            // backgroundColor: "#272727"
          }}
          keyboardDismissMode="interactive"
          keyboardShouldPersistTaps="handled"
        > */}
        <View
          style={{
            flex: 1,
            width: width,


            // padding: width / 20,
            // justifyContent: "space-around"
          }}
        >

          <View style={{ height: height }}>

            <ImageBackground source={require("../../../assets/maggie/Screenshot_8.jpg")}
              blurRadius={Platform.OS == 'ios' ? 1 : 2}
              style={{ width: '100%', height: height }}>
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

                <View style={{ width: "80%", height: height / 7.4, backgroundColor: "#dcdedf", opacity: 0.9, padding: 10 }}>

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
                  // backgroundColor: "white",
                  // width: width / 4,
                  paddingLeft: "52%",


                }}>
                  <Text style={{
                    color: "white",

                    paddingBottom: 20,
                    // justifyContent: "flex-end",
                    // textAlign: "left",
                    // alignContent:"flex-end",
                    paddingTop: 15,
                    textAlign: "center",
                    // backgroundColor: "red",
                    //  width: width/6 ,
                   
                    paddingRight: 20,
                    fontWeight: "bold",
                    fontSize: 15,
                    fontFamily: " OpenSans-Regular",
                  }}
                    onPress={() => { this.props.navigation.navigate('forgetpassword') }}>
                    Forget Password?
                  </Text>

                </View>
                {
                  (this.props.isProgress === true) ?
                    <View style={[styles.container, styles.horizontal]}>

                      <ActivityIndicator size="large" color="#ffffff" />

                    </View>
                    : null

                }


                <View style={{ padding: 5, paddingTop: 10 }}>


                  <TouchableOpacity
                    activeOpacity={2}
                    onPress={this.signIn}
                  >

                    <Button rounded style={{
                      width: width / 2, backgroundColor: "white", justifyContent: "center",
                      alignItems: "center"
                    }}
                    >

                      <Text style={{
                        color: "#000",
                        fontFamily: " OpenSans-Regular",
                      }}
                        onPress={this.signIn}
                      >
                        Login
                   </Text>
                    </Button>
                  </TouchableOpacity>


                </View>
                <Text style={{
                  color: "#dcdedf", paddingRight: 0, color: "white", fontFamily: " OpenSans-Regular",
                  fontWeight: "200", paddingBottom: 0,
                  paddingTop: 20
                }}>
                  New User?
              <Text
                    style={{
                      color: "#dcdedf",
                      // textDecorationLine: "underline",
                      color: "white",
                      fontWeight: "400",
                      fontFamily: " OpenSans-Regular",
                      fontSize: 18,

                    }}
                    onPress={() => {

                      this.props.navigation.navigate('SignUp')
                    }}

                  >
                    {"  "} Register Now
              </Text>

                </Text>

              </View>
              {/* <View style={{

              
                // marginBottom: 5
              }}> */}

              <View style={{

                height: height / 7,
                paddingTop: 0,
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                textAlign: "center",



              }}>
                <Text
                  onPress={() => { this.props.navigation.navigate('privacy') }}
                  style={{
                    color: "#fff", textDecorationColor: '#fff',
                    textDecorationLine: "underline",
                    justifyContent: "center",
                    textAlign: "center",
                    width: "24%",
                    // backgroundColor: "red",
                    fontFamily: " OpenSans-Regular",
                    fontWeight: "300",
                    paddingBottom: 3,


                  }}>
                  Data Privacy Policy</Text>

                <Text style={{
                  color: "#fff", justifyContent: "center",
                  textAlign: "center", fontFamily: " OpenSans-Regular", fontWeight: "300", marginBottom: 15
                }}>
                  Copyright © {this.state.NewYear} Maggie </Text>
              </View>

            </ImageBackground>
          </View>


        </View>

        {/* </ScrollView> */}




      </View>

    );

  }
}



const styles = StyleSheet.create({
  container: {

    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 2
  }
})
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
