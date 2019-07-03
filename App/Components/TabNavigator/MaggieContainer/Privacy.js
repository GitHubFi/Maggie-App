import React, { Component } from 'react';
import { Text, StyleSheet, View, WebView, Dimensions } from 'react-native';

const { width, height, scale, fontScale } = Dimensions.get("window");

export default class Privacy extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: "PRIVACY POLICY",

            headerTitleStyle: {
                color: "#000",
                alignSelf: "center",
                textAlign: "center",
                flex: 1,
                marginLeft: -30,
                fontSize: width / 23,
            },
            headerStyle: {
                backgroundColor: "#ffffff",

                fontFamily: "OpenSans-Semi"
            }
        };
        // headerRight: <View />;
    };
    render() {
        return (
            <WebView
                source={{ uri: 'http://hairdesignsbymaggie.com/privacy-policy/' }}
                style={{}}
            />
        );
    }
}

const styles = StyleSheet.flatten({});