import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, ImageBackground, Platform, Dimensions, ScrollView, Image } from 'react-native';
import {
    Input, Button, Spinner, Form, Item, Picker, Label, Container,
    Header, Content, ListItem, CheckBox, Text, Body, DatePicker, Textarea
} from "native-base";
const { width, height, scale, fontScale } = Dimensions.get("window");


export default class Price extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: "PRICE LIST",
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
            //     blurRadius={Platform.OS == 'ios' ? 1 : 1}
            //     style={{ width: '100%', height: '100%' }}>
            <ScrollView>
                <View
                    style={{

                        flexDirection: "column",
                        justifyContent: "center", alignContent: "center", alignItems: "center",
                        alignContent: "flex-start"
                    }}>
                    {/* <Image
                            source={require("../../../../assets/maggie/logoc.jpg")}
                            style={{ width: width / 2, height: height / 10 }}
                        /> */}
                    <View style={{ backgroundColor: "#ffffff", width: width }}>


                        <Text style={{
                            color: '#000',
                            // fontFamily: 'Chalkboard SE',
                            textAlign: "left",
                            fontSize: 25,
                            paddingTop: 25,
                            paddingBottom: 10,
                            paddingLeft: 45,
                            // textDecorationLine: "underline",
                            // textDecorationStyle: "dashed",

                            fontFamily: "OpenSans-SemiBold"
                        }}>

                            HAIR
                            </Text>
                        <View style={{
                            width: width / 1,
                            // alignContent: "center", justifyContent: "center", alignItems: "center"
                            alignContent: "flex-start",
                            paddingLeft: 20,
                            width: "95%"
                        }}>

                            <View style={{
                                opacity: 0.9,
                                width: "95%",

                            }}>
                                <ListItem>
                                    <Body>
                                        <Text style={{ color: "#000", fontSize: 20 }}>
                                            <Text style={{
                                                fontSize: 20
                                                , fontFamily: " OpenSans-Regular"

                                            }}>{'\u25AA'} </Text>

                                            Bridal Hair: $200 +</Text>
                                    </Body>
                                </ListItem>

                                <ListItem>
                                    <Body>
                                        <Text style={{ color: "#000", fontSize: 20 }}>
                                            <Text style={{
                                                fontSize: 20
                                                , fontFamily: " OpenSans-Regular"

                                            }}>{'\u25AA'} </Text>

                                            Updo or Partial updo: $100</Text>
                                    </Body>
                                </ListItem>

                                <ListItem>
                                    <Body>
                                        <Text style={{ color: "#000", fontSize: 20 }}>
                                            <Text style={{
                                                fontSize: 20
                                                , fontFamily: " OpenSans-Regular"

                                            }}>{'\u25AA'} </Text>
                                            Down do: $90</Text>
                                    </Body>
                                </ListItem>

                                <ListItem >
                                    {/* <Body> */}
                                    <Text style={{
                                        fontSize: 20,
                                        fontFamily: " OpenSans-Regular",
                                        paddingLeft: 14,
                                        paddingBottom: height / 19
                                    }}>{'\u25AA'} </Text>
                                    {/* </Body> */}
                                    {/* <Body style={{ textAlign:"left" ,paddingLeft:-20 ,paddingBottom:10}}> */}

                                    <Text style={{
                                        color: "#000", fontSize: 20
                                        , fontFamily: " OpenSans-Regular", textAlign: "left", paddingLeft: -20
                                    }}> Blowout: (not included in any hair styling services so come with 100% dry
                                            hair for any & all appointment).
    
                                            </Text>
                                    {/* </Body> */}
                                </ListItem>

                                {/* <ListItem>
                                    <Body> */}
                                <Text style={{
                                    color: "#000", fontSize: 20,
                                    fontFamily: " OpenSans-Regular",
                                    paddingLeft: 35,
                                    textAlign: "left",
                                    paddingBottom: 20,
                                    paddingTop: 20
                                }}>
                                    <Text style={{
                                        fontSize: 20,
                                        paddingLeft: 20,
                                        fontFamily: " OpenSans-Regular"
                                    }}>{'\u25AA'} </Text>
                                    Keratin and Smoothing Treatments:$500</Text>
                                {/* </Body> */}
                                {/* </ListItem> */}
                            </View>
                        </View>
                    </View>
                    <View style={{ backgroundColor: "#f3f3f3", width: width }}>
                        <Text style={{
                            color: '#000',
                            fontFamily: "OpenSans-SemiBold",
                            textAlign: "left",
                            fontSize: 25,
                            paddingTop: 25,
                            paddingBottom: 10,
                            paddingLeft: 50,
                            // textDecorationLine: "underline",
                            // textDecorationStyle: "dashed",

                        }}
                        >

                            MAKE UP </Text>
                        <View style={{
                            width: width / 1,
                            // alignContent: "center", justifyContent: "center", alignItems: "center"
                            alignContent: "flex-start",
                            paddingLeft: 25,
                        }}>

                            <View style={{
                                opacity: 0.9,
                                width: "95%",

                            }}>
                                <ListItem>
                                    <Body>
                                        <Text style={{ color: "#000", fontSize: 20, fontFamily: " OpenSans-Regular" }}>
                                            <Text style={{
                                                fontSize: 20,
                                                fontFamily: " OpenSans-Regular"
                                            }}>{'\u25AA'} </Text>
                                            Bridal Makeup: $150</Text>
                                    </Body>
                                </ListItem>

                                <ListItem >
                                    <Body>
                                        <Text style={{ color: "#000", fontSize: 20, fontFamily: " OpenSans-Regular" }}>
                                            <Text style={{
                                                fontSize: 20,
                                                fontFamily: " OpenSans-Regular"
                                            }}>{'\u25AA'} </Text>
                                            Event Makeup: $85</Text>
                                    </Body>
                                </ListItem>
                            </View>
                        </View>
                    </View>
                    <View style={{ backgroundColor: "#ffffff", width: width }}>
                        <Text style={{
                            color: '#000',
                            fontFamily: "OpenSans-SemiBold",
                            textAlign: "left",
                            fontSize: 25,
                            paddingTop: 25,
                            paddingBottom: 10,
                            paddingLeft: 50,
                            // textDecorationLine: "underline",
                            // textDecorationStyle: "dashed",

                        }} >
                            TRIALS
                        </Text>
                        <View style={{
                            width: width / 1,
                            // alignContent: "center", justifyContent: "center", alignItems: "center"
                            alignContent: "flex-start",
                            paddingLeft: 25,
                        }}>

                            <View style={{
                                opacity: 0.9,
                                width: "95%",

                            }}>
                                <ListItem>
                                    <Body>
                                        <Text style={{
                                            color: "#000", textAlign: "left",
                                            fontFamily: " OpenSans-Regular",
                                            fontSize: 20, fontWeight: "200"
                                        }}>The trial is an express version of the hair design for the day of the event which is failsafe method to ensure customer glee
                                    every time.</Text>
                                    </Body>
                                </ListItem>
                                <ListItem>
                                    <Body>
                                        <Text style={{ color: "#000", fontSize: 20, fontFamily: " OpenSans-Regular" }}>
                                            <Text style={{
                                                fontSize: 20,
                                                fontFamily: " OpenSans-Regular"
                                            }}>{'\u25AA '} </Text>
                                            Bridal hair trial: $100</Text>
                                    </Body>
                                </ListItem>
                                <ListItem>
                                    <Body>
                                        <Text style={{
                                            color: "#000", fontSize: 20,
                                            fontFamily: " OpenSans-Regular"
                                        }}>
                                            <Text style={{
                                                fontSize: 20,
                                                //,
                                                fontFamily: " OpenSans-Regular"
                                            }}>{'\u25AA'} </Text>
                                            Bridal Make up: $100</Text>
                                    </Body>
                                </ListItem>
                            </View>
                        </View>
                    </View>

                    <View style={{ backgroundColor: "#f3f3f3", width: width }}>
                        <Text style={{
                            color: '#000',
                            fontFamily: "OpenSans-SemiBold",
                            textAlign: "left",
                            fontSize: 25,
                            paddingTop: 25,
                            paddingBottom: 10,
                            // textDecorationLine: "underline",
                            // textDecorationStyle: "dashed",

                            paddingLeft: 50,
                        }}
                        > ADDITIONAL</Text>

                        <View style={{
                            width: width / 1,
                            // alignContent: "center", justifyContent: "center", alignItems: "center"
                            alignContent: "flex-start",
                            paddingLeft: 25,
                            width: "95%"
                        }}>

                            <View style={{
                                opacity: 0.9,
                                width: "95%",

                            }}>
                                {/* <ListItem>
                                    <Body>
                                        <Text style={{
                                            color: "#000", fontSize: 20,
                                            fontFamily: " OpenSans-Regular"
                                        }}>
                                            <Text style={{
                                                fontSize: 20,
                                                fontFamily: " OpenSans-Regular"
                                            }}>{'\u25AA'} </Text>
                                            Travel fee (applies to all mobile jobs) is $85 in Town.</Text>
                                    </Body>
                                </ListItem> */}

                                <Text style={{
                                    fontSize: 20,
                                    // paddingLeft: 20,
                                    fontFamily: " OpenSans-Regular",
                                    paddingLeft: 30,
                                    display:"flex"
                                    // paddingBottom:10
                                }}>{'\u25AA'}  Travel fee (applies to all mobile jobs)  </Text>
                                <Text style={ {  
                                    fontSize: 20,
                                    // paddingLeft: 20,
                                    fontFamily: " OpenSans-Regular",
                                    paddingLeft: 53,
                                }}>is $85 in Town.
                                
                                </Text>
                                {/* <Text style={{
                                    color: "#000", fontSize: 20,
                                    fontFamily: " OpenSans-Regular",
                                    // paddingLeft: ,
                                    textAlign: "left",
                                    marginBottom:20
                                    // paddingBottom:10
                                    // paddingBottom: 20,
                                    // paddingTop: 20
                                }}>

                                    
                                </Text> */}

                                <ListItem>
                                    <Body>
                                        <Text style={{ color: "#000", fontSize: 20, fontFamily: " OpenSans-Regular" ,  }}>
                                            <Text style={{
                                                fontSize: 20,
                                                fontFamily: " OpenSans-Regular",
                                                display:"flex"
                                              
                                            }}>{'\u25AA '} </Text>
                                            Minimum booking fee for mobile  </Text>
                                            <Text style={{
                                                 fontSize: 20,
                                                 // paddingLeft: 20,
                                                 fontFamily: " OpenSans-Regular",
                                                 paddingLeft: 20,
                                            }}>
                                            service is $350.
                                            </Text>
                                    </Body>
                                </ListItem>
                                <ListItem>
                                    <Body>
                                        <Text style={{ color: "#000", fontSize: 20, fontFamily: " OpenSans-Regular" , }}>
                                            <Text style={{
                                                fontSize: 20,
                                                fontFamily: " OpenSans-Regular",
                                                display:"flex"
                                            }}>{'\u25AA'} </Text>
                                            Early morning fee of $150 if we</Text>
                                            <Text style={{
                                                 fontSize: 20,
                                                 // paddingLeft: 20,
                                                 fontFamily: " OpenSans-Regular",
                                                 paddingLeft: 22,
                                                 
                                            }}>
                                            start before 5am.
                                            </Text>
                                    </Body>
                                </ListItem>
                            </View>
                        </View>
                    </View>

                </View >

            </ScrollView >

            // </ImageBackground>
        );
    }
}

const styles = StyleSheet.flatten({});