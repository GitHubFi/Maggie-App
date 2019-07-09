import React, { Component } from 'react';
import { Text, StyleSheet, View, Dimensions, ImageBackground, ScrollView, Platform, Image } from 'react-native';
const { width, height, scale, fontScale } = Dimensions.get("window");
import {
    Input, Button, Spinner, Form, Item, Picker, Label, Container,
    Header, Content, ListItem, CheckBox, Body, DatePicker, Textarea
} from "native-base";

export default class Services extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: "SERVICES",
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
                marginLeft: -30,
                fontSize:width/23,
            },
            headerStyle: { backgroundColor: "#fff"
            ,
            fontFamily: "OpenSans-Semi" }
        };
        headerRight: <View />;
    };
    render() {
        return (
            // <ImageBackground source={require("../../../../assets/maggie/Screenshot_8.jpg")}
            //     blurRadius={Platform.OS == 'ios' ? 1 : 5}
            //     style={{ width: '100%', height: '100%' }}>
            <ScrollView>
                <View style={{

                    backgroundColor: "#000",
                    flexDirection: "column", padding: 20,
                    justifyContent: "center",
                    alignContent: "center",
                    alignItems: "center",


                }}>
                    {/* <View style={{ flex: 1, justifyContent:"center", }}> */}
                    {/* <View style={{ flex: 1 / 2, flexDirection: "column", padding: 20 ,paddingBottom:10,backgroundColor: "black",justifyContent:"center",alignContent:"center",alignItems:"center" }}> */}

                    <Image
                        source={require("../../../../assets/maggie/service/Screenshot_16.jpg")}
                        style={{ width: "85%", height: height / 2, justifyContent: "center", margin: 0, marginLeft: 0, marginRight: 0 }}
                    />
                    <Text style={{
                        color: '#fff',
                        fontFamily: "OpenSans-SemiBold",
                        textAlign: "center",
                        fontSize: 20,
                        paddingTop: 10,
                        paddingBottom: 5,
                      
                    }}>BRIDAL HAIR
                            </Text>
                    <Text style={{
                        color: '#fff',
                        // justifyContent:"flex-start",
                        textAlign:"left",
                        lineHeight:30,
                        fontSize: 20,
                        paddingTop: 5,
                        paddingBottom: 40,
                        fontFamily: " OpenSans-Regular",
                        width: "85%"

                    }}>From wonderful falling curls to a chic and elegant up-do for your wedding, Maggie’s vast experience and artistry can be seen in every custom hair style that she does.
                            </Text>


                    <Image
                        source={require("../../../../assets/maggie/service/service2.jpg")}
                        style={{ width: "85%", height: height / 2, justifyContent: "center", margin: 0, marginLeft: 10, marginRight: 10 }}
                    />
                    <Text style={{
                        color: '#fff',
                        fontFamily: "OpenSans-SemiBold",
                        textAlign: "center",
                        fontSize: 20,
                        paddingTop: 10,
                        paddingBottom: 5,

                      
                    }}>UPDO OR PARTIAL UPDO
                            </Text>
                    <Text style={{
                        color: '#fff',
                        fontFamily: " OpenSans-Regular",
                        // justifyContent:"flex-start",
                        lineHeight:30,
                        textAlign:"left",
                        fontSize: 20,
                        paddingTop: 5,
                        paddingBottom: 40,
                        width: "85%"
                      
                    }}>Maggie is specializing in all styles of updo’s whether it’s simple airwave with flawless finish, beautiful bun, pinup pompadour, chic-chignon, retro pin curls or elegant twist.
                            </Text>

                    <Image
                        source={require("../../../../assets/maggie/service/service3.jpg")}
                        style={{ width: "85%", height: height / 2, justifyContent: "center", margin: 0, marginLeft: 10, marginRight: 10 }}
                    />
                    <Text style={{
                        color: '#fff',
                        fontFamily: "OpenSans-SemiBold",
                        fontFamily: "open",
                        textAlign: "center",
                        fontSize: 20,
                        paddingTop: 10,
                        paddingBottom: 5,

                      
                    }}>DOWN DO
                            </Text>
                    <Text style={{
                        color: '#fff',
                        fontFamily: " OpenSans-Regular",
                        // justifyContent:"flex-start",
                        lineHeight:30,
                        textAlign:"left",
                        fontSize: 20,
                        paddingTop: 5,
                        paddingBottom: 40,
                        width: "85%"
                      
                    }}>Prefer to keep your hair down? she got you! Wavy, Curly, tousled, half up half down or messy braid look to suit your style.
                            </Text>

                    <Image
                        source={require("../../../../assets/maggie/service/service4.jpg")}
                        style={{ width: "85%", height: height / 2, justifyContent: "center", margin: 0, marginLeft: 10, marginRight: 10 }}
                    />
                    <Text style={{
                        color: '#fff',
                        fontFamily: "OpenSans-SemiBold",
                        textAlign: "center",
                        fontSize: 20,
                        paddingTop: 10,
                        paddingBottom: 5,

                      
                    }}>BLOWOUTS
                            </Text>
                    <Text style={{
                        color: '#fff',
                        fontFamily: " OpenSans-Regular",
                        lineHeight:30,
                        // justifyContent:"flex-start",
                        textAlign:"left",
                        fontSize: 20,
                        paddingTop: 5,
                        paddingBottom: 40,
                        width: "90%"
                        
                    }}>Starting from a smooth sleek curls or beach waves to tight precise blowouts, the range is exquisite. Sleek and classy, curly hair and curly hair gone straight, Maggie customizes the look according to your cut and hair length.
                            </Text>

                    <Image
                        source={require("../../../../assets/maggie/service/service5.jpg")}
                        style={{ width: "85%", height: height / 2, justifyContent: "center", margin: 0, marginLeft: 10, marginRight: 10 }}
                    />
                    <Text style={{
                        color: '#fff',
                        fontFamily: "OpenSans-SemiBold",
                        textAlign: "center",
                        fontSize: 20,
                        paddingTop: 10,
                        paddingBottom: 5,

                      
                    }}>MAKEUP
                            </Text>
                    <Text style={{
                        color: '#fff',
                        fontFamily: " OpenSans-Regular",
                        // justifyContent:"flex-start",
                        lineHeight:30,
                        textAlign:"center",
                        fontSize: 20,
                        paddingTop: 5,
                        paddingBottom: 40,
                        width: "90%"
                      
                    }}>While being an expert at hair designs, she also provides complete professional makeup services from sophisticated no makeup to full on glam look to create your perfect look and bringing out your best for your special occasion or event.
                            </Text>

                    <Image
                        source={require("../../../../assets/maggie/service/service6.png")}
                        style={{ width: "100%", height: height / 2, justifyContent: "center", margin: 0, marginLeft: 10, marginRight: 10 }}
                    />
                    <Text style={{
                        color: '#fff',
                        fontFamily: "OpenSans-SemiBold",
                        textAlign: "center",
                        fontSize: 20,
                        paddingTop: 10,
                        paddingBottom: 5,

                      
                    }}>KERATIN AND SMOOTHING
                            </Text>
                    <Text style={{
                        color: '#fff',
                        fontFamily: " OpenSans-Regular",
                        // justifyContent:"flex-start",
                        textAlign:"left",
                        fontSize: 20,
                        paddingTop: 5,
                        paddingBottom: 40,
                        lineHeight:30,
                        width: "90%"
                       
                    }}>Treatments (Get some food for your hair with her state of the art keratin and smoothing hair treatment. The range of keratin treatment is dynamic including Keratin Complex Smoothing Therapy, Global Keratin Complex, the La-Brazilian treatment, and Brazilian Keratin Treatment. Frizzy and rough textured hair is no more your problem
                            </Text>

                    <Image
                        source={require("../../../../assets/maggie/service/service7.png")}
                        style={{ width: "100%", height: height / 2, justifyContent: "center", margin: 0, marginLeft: 10, marginRight: 10 }}
                    />
                    <Text style={{
                        color: '#fff',
                        fontFamily: "OpenSans-SemiBold",
                        textAlign: "center",
                        fontSize: 20,
                        paddingTop: 10,
                        paddingBottom: 5,

                      
                    }}>CONSULATION
                            </Text>
                    <Text style={{
                        color: '#fff',
                        fontFamily: " OpenSans-Regular",
                        // justifyContent:"flex-start",
                        // justifyContent:"center",
                        textAlign:"left",
                        fontSize: 20,
                        paddingTop: 5,
                        paddingBottom: 40,
                        lineHeight:30,
                        width: "95%"
                       
                    }}>She also provide an expert consultation which is a complimentary visit with a hair stylist to discuss the customized and desired style. A quote will be given at that time.
                            </Text>



                </View>

            </ScrollView>

            // </ImageBackground>
        );
    }
}

const styles = StyleSheet.flatten({});