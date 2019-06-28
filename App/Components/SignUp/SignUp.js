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
    };
  }
  static navigationOptions = {
    header: null
  };

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
              blurRadius={Platform.OS == 'ios' ? 1 : 2}
              style={{ width: '100%', height: '100%' }}>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center"
                }}>
                <View style={{ width: width / 2, height: height / 5 }}>
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
                  width: "80%", height: height / 2.5,
                  backgroundColor: "#dcdedf",
                  opacity: 0.9, padding: 10
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
                    onChangeText={confirmPassword => this.setState({ confirmPassword })}
                  ></Input>

                </View>


                {/* <View style={{ justifyContent: "flex-end", alignItems: "flex-end", alignContent: "flex-end", }}>
      <Text style={{
        color: "white", paddingBottom: 10, justifyContent: "flex-end", alignItems: "flex-end", alignContent: "flex-end"
      }}>
        Forget Password?
    </Text>
    </View> */}
                <View style={{ height: height / 6, padding: 5 }}>


                  {/* <TouchableOpacity onPress={this.signup} > */}
                  <Button rounded style={{
                    width: width / 2, backgroundColor: "#fff", justifyContent: "center",
                    alignItems: "center"
                  }}
                    onPress={this.signup}

                  >

                    <Text style={{
                      color: "#000",
                      fontFamily: " OpenSans-Regular",

                    }}>
                      Register
                        </Text>
                  </Button>
                  {/* </TouchableOpacity> */}

                  <Text>
                    {this.props.signuperror}
                  </Text>
                </View>

                {/* <View
    >
      <Text
        style={{
          color: "white", padding: 15,
          textDecorationLine: "underline",
          textDecorationColor: "#05527c"
        }}
        onPress={() => {
          this.replaceScreen("signIn");
        }}
   
        
      >Already have account? Login Now</Text>
    </View> */}

                <Text style={{ color: "#dcdedf", paddingRight: 5, color: "white", paddingBottom: 15 }}>
                  Already have account ?
              <Text
                    style={{
                      color: "#dcdedf",
                      color: "white",
                      fontWeight: "bold",
                      fontFamily: 'Arial, Helvetica, sans-serif',
                      fontSize: 15
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


                {/* <View style={{
      
      justifyContent: 'flex-end',
      marginBottom: 10
    }}>

      <Text style={{ color: "white" }}>Data Privacy Policy</Text>
      <Text style={{ color: "white" }}>copyright © 2019 Maggie </Text>
    </View> */}







              </View>


            </ImageBackground>
          </View>

          {/* <View
            style={{
              flex: 0.2,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Image
              source={require("../../../assets/download.jpg")}
              style={{ width: width / 4, height: width / 4, borderRadius: 50 }}
            />
          </View> */}
          {/* <View style={{ flex: 0.5, justifyContent: "space-around" }}>
            <View
              style={{
                flex: 0.3,
                flexDirection: "row",
                alignItems: "center",
                borderBottomColor: "#fff",
                borderBottomWidth: 1
              }}
            >
              <MaterialCommunityIcons name="email" size={25} color="#fff" />
              <Input
                placeholderTextColor={"#fff"}
                placeholder={"Email"}
                placeholder="email"
                style={{ color: "#fff" }}
                keyboardType={"email-address"}
                onChangeText={email => this.setState({ email })}
              />
            </View>
            <View
              style={{
                flex: 0.3,
                flexDirection: "row",
                alignItems: "center",
                borderBottomColor: "#fff",
                borderBottomWidth: 1
              }}
            >
              <Entypo name={"lock"} size={25} color="#fff" />
              <Input
                placeholderTextColor={"#fff"}
                placeholder={"Password"}
                placeholder="password"
                style={{ color: "#fff" }}
                secureTextEntry
                onChangeText={password => this.setState({ password })}
              />
            </View>
            <View
              style={{
                flex: 0.2,
                flexDirection: "row",
                borderBottomColor: "#fff",
                alignItems: "center",
                borderBottomWidth: 1
              }}
            >
              <Entypo name={"lock"} size={25} color="#fff" />

              <Input
                style={{ color: "#fff" }}
                placeholder="confirm password"
                placeholderTextColor={"#fff"}
                secureTextEntry
                onChangeText={confirmPassword =>
                  this.setState({ confirmPassword })
                }
              />
            </View>
            <View
              style={{
                flex: 0.3,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Button
                style={{
                  marginTop: height / 25,
                  width: width * 0.6,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#fafafa",
                  alignSelf: "center",
                  borderRadius: width / 12
                }}
                onPress={this.signIn}
              >
                <Text style={{ color: "#272727" }}>SignUp</Text>
              </Button>
            </View>
          </View>
          <View
            style={{
              flex: 0.1,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text style={{ color: "#0fb9b1" }}>
              Already an account ?
              <Text
                style={{
                  color: "#2bcbba",
                  textDecorationLine: "underline",
                  textDecorationColor: "#fff"
                }}
                onPress={() => {
                  this.replaceScreen("signUp");
                }}
              >
                signin
              </Text>
            </Text>
          </View> */}
        </View>
      </ScrollView>
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