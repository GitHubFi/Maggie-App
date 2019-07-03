import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  View,
  TextInput,
  Button,
  StatusBar,
  Image,
  PixelRatio,
  YellowBox,
  AsyncStorage,
  Dimensions
} from "react-native";

import { NavigationActions, StackActions } from "react-navigation";
import SignIn from "../SignIn/SignIn";
const { width, height } = Dimensions.get("window");
export default class SplashScreen extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    setTimeout(() => {
      //this.reset('signIn')
      this.switchUser();

    },1400)
  }

  // componentWillMount() {
  //     YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated'])
  // }
  
  // loadApp = async () => {
  //   // await AsyncStorage.clear();
  //   const userToken = await AsyncStorage.getItem("User");
  //   await AsyncStorage.getAllKeys().then(keys => AsyncStorage.multiGet(keys)
  //     .then((result) => {
  //       console.log(result, 'keys all')
  //     }));
  //   console.log(userToken, 'nullll ')
  //   if (userToken !== null) {
  //     this.props.navigation.navigate("Homege");
  //   } else {
  //     this.props.navigation.navigate("signIn");

  //   }
  // };


  switchUser = async () => {
    let user = await AsyncStorage.getItem('User');
    console.log(user)
    console.log(user)
    if (user !== null) {
        this.reset('Homege')
    } else {
        this.reset('signIn')
    }

}

reset = route => {
  return this.props.navigation.dispatch(
      StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: `${route}` })]
      })
  )
}



  loadApp = async () => {
    let user = await AsyncStorage.getItem('user');
    console.log(user)
 
    if (user !== null) {
      this.props.navigation.navigate("Homege");
    } else {
      this.props.navigation.navigate("signIn");

    }

}





  reset = route => {
      return this.props.navigation.dispatch(
          StackActions.reset({
              index: 0,
              actions: [NavigationActions.navigate({routeName: `${route}`})]
          })
      )
  }

  render() {
    return (
      <View style={[styles.container]}>
        <StatusBar hidden />

        <Image
          style={{ width: width, height: height, resizeMode: "cover" }}
          source={require("../../../assets/maggie/splash2.png")}
          
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  img: {
    width: "100%",
    height: "100%"
  }
});
