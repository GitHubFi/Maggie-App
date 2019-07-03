import React, { Component } from 'react';
import {
  Text, StyleSheet, View, Dimensions, ScrollView, ToastAndroid,
  AsyncStorage,
  Alert,
  ImageBackground,
  Platform,
  Image,

}
  from 'react-native';
import { Input, Button, Spinner, Form, Item, Picker, Label, Container, Content, Icon, } from "native-base";
import firebase from "react-native-firebase";

const { width, height, scale, fontScale } = Dimensions.get("window");
import validator from "validator";
import Ionicons from "react-native-vector-icons/Ionicons";

export default class ForgetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      loading: false
    };
  }
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "FORGET PASSWORD",

      headerTitleStyle: {
        color: "#000",
        alignSelf: "center",
        textAlign: "center",
        flex: 1,
        marginLeft: -30,
        fontSize: width / 23,
        fontFamily: "OpenSans-Semi",
      },
      headerStyle: {
        backgroundColor: "#fff",
        headerTintColor: 'red'

        // fontFamily: "OpenSans-Semi"
      }
    };
    // headerRight: <View />;
  };

  ForgetPassword = () => {

    // let { country, phonesNumber, code } = this.state;
    const { email } = this.state;

    if (!validator.isEmail(email)) {
      ToastAndroid.show("Check Your Email", ToastAndroid.SHORT);
      return;
    }


    var auth = firebase.auth();
    var emailAddress = email;

    auth.sendPasswordResetEmail(emailAddress).then((success) => {
      console.log("send email ");
      ToastAndroid.show("Check Your Email.", ToastAndroid.LONG);
      this.props.navigation.navigate('signIn');

    
    }).catch((error) => {
      console.log("Error for sending email", error);
      ToastAndroid.show("There is no user record corresponding to this identifier.", ToastAndroid.LONG);

     
    

    });
    // this.props.signInAction(this.state, this.props.navigation);
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
            width: width,

            // padding: width / 20,
            // justifyContent: "space-around"
          }}
        >

          <View>

            <ImageBackground source={require("../../../../assets/maggie/Screenshot_8.jpg")}
              blurRadius={Platform.OS == 'ios' ? 1 : 2}
              style={{ width: '100%', height: '100%' }}>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  width: width,
                  //   height:height/9
                }}>
                <View style={{ width: width / 2, height: height / 10 }}>
                  <Image
                    source={require("../../../../assets/maggie/maggie-white-logo.png")}
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
                  Enter Your Email Address</Text>

                <View style={{ width: "80%", height: 60, backgroundColor: "#dcdedf", opacity: 0.7, padding: 10 }}>

                  <Input type="text" keyboardType={"email-address"} placeholder={"Email Address"} placeholder="Email Address"
                    style={{
                      color: "#000",
                      fontWeight: "200",
                      padding: 8,
                      //   borderBottomColor: 'white',
                      //   borderBottomWidth: 1,
                      fontSize: 15,
                    }}
                    onChangeText={email => this.setState({ email })}></Input>
                  {/* </Item>
    
                         <Item >
                      <Icon active name="lock" style={{paddingLeft:13}} /> */}
                </View>
                <View style={{ height: height / 8, padding: 5, paddingTop: 10 }}>


                  {/* <TouchableOpacity onPress={this.signIn}> */}
                  <Button rounded style={{
                    width: width / 2, backgroundColor: "white", justifyContent: "center",
                    alignItems: "center"
                  }}
                    onPress={this.ForgetPassword}
                  >

                    <Text style={{
                      color: "#000",
                      fontSize: 15,
                      fontFamily: " OpenSans-Regular",
                    }}>
                      Forget
                       </Text>
                  </Button>


                </View>


              </View>
            </ImageBackground>
          </View>

        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.flatten({});