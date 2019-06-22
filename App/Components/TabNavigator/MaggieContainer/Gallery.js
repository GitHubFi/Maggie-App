import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView, Dimensions, Image} from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body, Icon } from 'native-base';
const { width, height, scale, fontScale } = Dimensions.get("window");

export default class Gallery extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: "GALLERY",
            // headerLeft: (
            //     <TouchableOpacity onPress={navigation.getParam("openDrawer")}>
            //         <Ionicons
            //             name="md-menu"
            //             size={width / 10}
            //             color="#000"
            //             style={{ marginLeft: 10 }}
            //         />
            //         {/* <Icon name="ios-arrow-left" /> */}
            //     </TouchableOpacity>
            // ),headerRight: (
            //     <TouchableOpacity onPress={navigation.getParam("openDrawer")}>
            //         <Ionicons
            //             name="md-notifications"
            //             size={width / 10}
            //             color="#000"
            //             style={{ marginRight: 10 }}
            //         />
            //         {/* <Icon name="ios-arrow-left" /> */}
            //     </TouchableOpacity>
            // ),
            headerTitleStyle: {
                color: "#000",
                alignSelf: "center",
                textAlign: "center",
                flex: 1,
                marginLeft: -10
            },
            headerStyle: { backgroundColor: "#fff" }
        };
        // headerRight: <View />;
    };
    render() {
        return (

            <ScrollView >
            
                <View style={{
                    backgroundColor: "black",
                    flexDirection: "column", padding: 20, backgroundColor: "black",
                    justifyContent: "center", alignContent: "center", alignItems: "center"
                }}>
                    {/* <View style={{ flex: 1, justifyContent:"center", }}> */}
                    {/* <View style={{ flex: 1 / 2, flexDirection: "column", padding: 20 ,paddingBottom:10,backgroundColor: "black",justifyContent:"center",alignContent:"center",alignItems:"center" }}> */}
                    
                        <Image
                            source={require("../../../../assets/maggie/gallery/first.jpg")}
                            style={{ width: "85%", height: height / 2, justifyContent: "center", margin: 10, marginLeft: 10, marginRight: 10 }}
                        />


                        <Image
                            source={require("../../../../assets/maggie/gallery/first1.jpg")}
                            style={{ width: "85%", height: height / 2, justifyContent: "center", margin: 10, marginLeft: 10, marginRight: 10 }}
                        />


                        <Image
                            source={require("../../../../assets/maggie/gallery/first2.jpg")}
                            style={{ width: "85%", height: height / 2, justifyContent: "center", margin: 10, marginLeft: 10, marginRight: 10 }}
                        />


                        <Image
                            source={require("../../../../assets/maggie/gallery/first3.jpg")}
                            style={{ width: "85%", height: height / 2, justifyContent: "center", margin: 10, marginLeft: 10, marginRight: 10 }}
                        />


                        <Image
                            source={require("../../../../assets/maggie/gallery/first4.jpg")}
                            style={{ width: "85%", height: height / 2, justifyContent: "center", margin: 10, marginLeft: 10, marginRight: 10 }}
                        />
                        <Image
                            source={require("../../../../assets/maggie/gallery/first5.jpg")}
                            style={{ width: "85%", height: height / 2, justifyContent: "center", margin: 10, marginLeft: 10, marginRight: 10 }}
                        />
                        <Image
                            source={require("../../../../assets/maggie/gallery/first6.jpg")}
                            style={{ width: "85%", height: height / 2, justifyContent: "center", margin: 10, marginLeft: 10, marginRight: 10 }}
                        />
                        <Image
                            source={require("../../../../assets/maggie/gallery/first7.jpg")}
                            style={{ width: "85%", height: height / 2, justifyContent: "center", margin: 10, marginLeft: 10, marginRight: 10 }}
                        />
                        <Image
                            source={require("../../../../assets/maggie/gallery/first8.jpg")}
                            style={{ width: "85%", height: height / 2, justifyContent: "center", margin: 10, marginLeft: 10, marginRight: 10 }}
                        />
                        <Image
                            source={require("../../../../assets/maggie/gallery/first9.jpg")}
                            style={{ width: "85%", height: height / 2, justifyContent: "center", margin: 10, marginLeft: 10, marginRight: 10 }}
                        />
                        <Image
                            source={require("../../../../assets/maggie/gallery/first10.jpg")}
                            style={{ width: "85%", height: height / 2, justifyContent: "center", margin: 10, marginLeft: 10, marginRight: 10 }}
                        />
                        <Image
                            source={require("../../../../assets/maggie/gallery/first11.jpg")}
                            style={{ width: "85%", height: height / 2, justifyContent: "center", margin: 10, marginLeft: 10, marginRight: 10 }}
                        />
                        <Image
                            source={require("../../../../assets/maggie/gallery/first12.jpg")}
                            style={{ width: "85%", height: height / 2, justifyContent: "center", margin: 10, marginLeft: 10, marginRight: 10 }}
                        />
                        <Image
                            source={require("../../../../assets/maggie/gallery/first13.jpg")}
                            style={{ width: "85%", height: height / 2, justifyContent: "center", margin: 10, marginLeft: 10, marginRight: 10 }}
                        />
                        <Image
                            source={require("../../../../assets/maggie/gallery/first14.jpg")}
                            style={{ width: "85%", height: height / 2, justifyContent: "center", margin: 10, marginLeft: 10, marginRight: 10 }}
                        />

                        <Image
                            source={require("../../../../assets/maggie/gallery/first15.jpg")}
                            style={{ width: "85%", height: height / 2, justifyContent: "center", margin: 10, marginLeft: 10, marginRight: 10 }}
                        />
                </View>
                   


                {/* </View> */}

                {/* </View> */}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.flatten({});