import React, { Component } from 'react';
import { Text, StyleSheet, View, Dimensions } from 'react-native';
const { width, height, scale, fontScale } = Dimensions.get("window");

export default class Notification extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: "NOTIFICATION",

            headerTitleStyle: {
                color: "#000",
                alignSelf: "center",
                textAlign: "center",
                flex: 1,
                marginLeft: -30,
                fontSize: width / 23,
            },
            headerStyle: {
                backgroundColor: "#fff",

                fontFamily: "OpenSans-Semi"
            }
        };
        headerRight: <View />;
    };
    render() {
        return (
            <View style={{
                flex: 1, justifyContent: "center",
                textAlign: "center",
                alignContent: "center",
                backgroundColor: "white",
            }}>
                <Text style={{
                    textAlign: "center",

                }}>
                    Notification</Text>
            </View>
        );
    }
}

const styles = StyleSheet.flatten({


});