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
  ImageBackground,
  AsyncStorage
} from "react-native";
import { Input, Button, Spinner, Icon } from "native-base";
const { width, height, scale, fontScale } = Dimensions.get("window");
import { signinFunc, signUpFunc } from '../../Store/Actions/AuthAction'
import validator from "validator";
// import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import { connect } from "react-redux";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      loading: false,
      confirmPassword: "",
      firstname: "",
      lastname: "",
      mobilenumber: "",
      NewYear: ""
    };
  }
  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    let year = new Date().getFullYear(); //Current Year
    this.setState({
      NewYear: year
    })
  }
  signup = () => {

    // let { country, phonesNumber, code } = this.state;
    const { email, password, confirmPassword, firstname, lastname, mobilenumber } = this.state;

    if (firstname === "") {
      ToastAndroid.show("Please fill the First Name", ToastAndroid.SHORT);
      return;
    } else
      if (lastname === "") {
        ToastAndroid.show("Please fill the last Name", ToastAndroid.SHORT);
        return;
      } else
        if (!validator.isEmail(email)) {
          ToastAndroid.show("Please fill the email correctly", ToastAndroid.SHORT);
          return;
        } else
          if (mobilenumber === "") {
            ToastAndroid.show("Please fill the Mobile Number", ToastAndroid.SHORT);
            return;
          } else
            if (mobilenumber === "") {
              ToastAndroid.show("Please fill the Mobile Number", ToastAndroid.SHORT);
              return;
            } else
              if (password.toString().length < 8 || password === '') {
                ToastAndroid.show("Password must be of 8 characters", ToastAndroid.SHORT);
                return;
              } else
                if (confirmPassword === '') {
                  ToastAndroid.show("confirmPassword must be of 8 characters", ToastAndroid.SHORT);
                  return;
                } else
                  if (confirmPassword !== password) {
                    ToastAndroid.show("confirmPassword must same as password", ToastAndroid.SHORT);
                    return;
                  }


    this.props.signUpAction(this.state, this.props.navigation);
    console.log("Signup", this.state)
  }

  replaceScreen = route => {
    this.props.navigation.dispatch({
      type: "ReplaceCurrentScreen",
      key: `${route}`,
      routeName: `${route}`
    });
  };
  render() {
    return (
      // <ScrollView
      //   contentContainerStyle={{
      //     // height,
      //     width,
      //     // backgroundColor: "#272727"
      //   }}
      //   keyboardDismissMode="interactive"
      //   keyboardShouldPersistTaps="handled"
      // >
      <View
        style={{
          flex: 1,
          height: height
          // padding: width / 20,
          // justifyContent: "space-around"
        }}
      >

        <View
          style={{
            // flex: 1,
            height: height
            // padding: width / 20,
            // justifyContent: "space-around"
          }}>

          <ImageBackground source={require("../../../assets/maggie/Screenshot_8.jpg")}
            // blurRadius={Platform.OS == 'ios' ? 1 : 2}
            style={{ width: '100%', height: '100%' }}>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                height: '100%'
              }}>
              <View style={{ width: width / 2 }}>
                <Image
                  source={require("../../../assets/maggie/maggie-white-logo.png")}
                  style={{ width: width / 2, height: height / 10, }}
                />
              </View>

              <Text style={{
                color: '#dcdedf',
                fontFamily: " OpenSans-Regular",
                textAlign: "center",
                fontWeight: 'bold', fontSize: 15,
                paddingTop: 25,
                paddingBottom: 10
              }}
              >
                Create New Account</Text>
              <View style={{
                width: "80%",
                height: height / 2.5,
                backgroundColor: "#dcdedf",
                opacity: 0.9,
                padding: 10

              }}>
                {/* <MaterialCommunityIcons name="email" size={25} color="#24516e" /> */}

                <Input type="text" placeholder="First Name"

                  style={{
                    color: "#000",
                    fontWeight: "200",
                    padding: 8,
                    borderBottomColor: 'white',
                    borderBottomWidth: 1,
                    fontSize: 15,
                  }}
                  autoCapitalize='none'
                  onChangeText={firstname => this.setState({ firstname })}>
                  {/* <Icon active name="person" /> */}
                </Input>
                <Input type="text" placeholder="Last Name"
                  style={{
                    color: "#000",
                    fontWeight: "200",
                    padding: 8,
                    borderBottomColor: 'white',
                    borderBottomWidth: 1,
                    fontSize: 15,
                  }}
                  autoCapitalize='none'
                  onChangeText={lastname => this.setState({ lastname })}>
                </Input>
                <Input type="text" keyboardType={"email-address"} placeholder={"Email Address"} placeholder="Email Address"

                  style={{
                    color: "#000",
                    fontWeight: "200",
                    padding: 8,
                    borderBottomColor: 'white',
                    borderBottomWidth: 1,
                    fontSize: 15,
                  }}
                  autoCapitalize='none'
                  onChangeText={email => this.setState({ email })}>
                </Input>
                <Input type="number" placeholder="Mobile Number" keyboardType="numeric"
                  style={{
                    color: "#000",
                    fontWeight: "200",
                    padding: 8,
                    borderBottomColor: 'white',
                    borderBottomWidth: 1,
                    fontSize: 15,
                  }}
                  onChangeText={mobilenumber => this.setState({ mobilenumber })}>
                </Input>

                <Input type="text" placeholder="Password" secureTextEntryss
                  style={{
                    color: "#000",
                    fontWeight: "200",
                    padding: 8,
                    borderBottomColor: 'white',
                    borderBottomWidth: 1,
                    fontSize: 15,
                  }}
                  autoCapitalize='none'
                  onChangeText={password => this.setState({ password })}>
                </Input>
                {/* <Entypo name={"lock"} size={25} color="#24516e" /> */}
                <Input type="password" placeholder="Confirm Password" secureTextEntry
                  style={{
                    color: "#000",
                    fontWeight: "200",
                    padding: 8,
                    fontSize: 15,
                    borderBottomColor: '#dcdedf',
                  }}
                  autoCapitalize = 'none'
                  onChangeText={confirmPassword => this.setState({ confirmPassword })}
                ></Input>

              </View>



              <View style={{ paddingTop: 15, paddingBottom: 10 }}>


                <TouchableOpacity activeOpacity={2} onPress={this.signup} >
                  <Button rounded style={{
                    width: width / 2, backgroundColor: "#fff", justifyContent: "center",
                    alignItems: "center"
                  }}
                  // onPress={this.signup}

                  >

                    <Text style={{
                      color: "#000",
                      fontFamily: " OpenSans-Regular",

                    }}
                      onPress={this.signup}>
                      Register
                        </Text>
                  </Button>
                </TouchableOpacity>

                <Text>
                  {this.props.signuperror}
                </Text>
              </View>


              <Text style={{ color: "#dcdedf", paddingRight: 5, color: "white", paddingBottom: 15 }}>
                Already have account ?
              <Text
                  style={{
                    color: "#dcdedf",
                    color: "white",
                    fontWeight: "400",
                    fontFamily: 'Arial, Helvetica, sans-serif',
                    fontSize: 18
                    // textDecorationLine: "underline",
                    // textDecorationColor: "#dcdedf"
                  }}
                  onPress={() => {
                    this.props.navigation.navigate('signIn')
                  }}

                >
                  {"  "} Login Now
              </Text>
              </Text>


              <View style={{

                height: height / 10,
                paddingTop: 20


              }}>

                <Text
                  onPress={() => { this.props.navigation.navigate('privacy') }}
                  style={{
                    color: "#fff", textDecorationColor: '#fff',
                    textDecorationLine: "underline",
                    justifyContent: "center",
                    textAlign: "center",
                    paddingBottom: 10,
                    fontFamily: " OpenSans-Regular",
                    fontWeight: "300",
                  }}>
                  Data Privacy Policy</Text>

                <Text style={{
                  color: "#fff", justifyContent: "center",
                  textAlign: "center", fontFamily: " OpenSans-Regular", fontWeight: "300",
                }}>
                  Copyright © {this.state.NewYear} Maggie </Text>
              </View>
            </View>
            {/* <View style={{


            }}>

              <Text
                onPress={() => { this.props.navigation.navigate('privacy') }}
                style={{
                  color: "#fff", textDecorationColor: '#fff',
                  textDecorationLine: "underline",
                  justifyContent: "center",
                  textAlign: "center",
                  paddingBottom: 10,
                  fontFamily: " OpenSans-Regular",
                  fontWeight: "300",
                }}>
                Data Privacy Policy</Text>

              <Text style={{
                color: "#fff", justifyContent: "center",
                textAlign: "center", fontFamily: " OpenSans-Regular", fontWeight: "300",
              }}>
                Copyright © {this.state.NewYear} Maggie </Text>
            </View> */}


          </ImageBackground>
        </View>


      </View>
      // </ScrollView>
    );
  }
}
function mapStateToProps(state) {
  console.log(state.authReducer.MaggieUser, '""""""""""MaggieUser"""""""""""""""')
  console.log(state.authReducer.signuperror, "----------------signuperror-----------------------")
  return {
    MaggieUser: state.authReducer.MaggieUser,
    signuperror: state.authReducer.signuperror

  };
}
function mapDispatchToProps(dispatch) {
  return {

    signUpAction: (payload, path) => {
      dispatch(signUpFunc(payload, path));
    }



  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);