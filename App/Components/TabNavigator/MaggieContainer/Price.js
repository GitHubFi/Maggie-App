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
                marginLeft: -10
            },
            headerStyle: { backgroundColor: "#fff" }
        };
        headerRight: <View />;
    };
    render() {
        return (


            <ImageBackground source={require("../../../../assets/maggie/Screenshot_8.jpg")}
                blurRadius={Platform.OS == 'ios' ? 1 : 1}
                style={{ width: '100%', height: '100%' }}>
                <ScrollView>
                    <View
                        style={{

                            flexDirection: "column", padding: 20,
                            justifyContent: "center", alignContent: "center", alignItems: "center"
                        }}>
                        <Image
                            source={require("../../../../assets/maggie/logoc.jpg")}
                            style={{ width: width / 2, height: height / 10 }}
                        />

                        <Text style={{
                            color: '#fff',
                            // fontFamily: 'Chalkboard SE',
                            textAlign: "center",
                            fontSize: 25,
                            paddingTop: 25,
                            paddingBottom: 10,
                            textDecorationLine: "underline",
                            textDecorationStyle: "dashed",
                            fontWeight: "bold"
                        }}>

                            HAIR PRICE
                            </Text>
                        <View style={{
                            width: width / 1,
                            alignContent: "center", justifyContent: "center", alignItems: "center"
                        }}>

                            <View style={{
                                opacity: 0.9,
                                width: "85%", backgroundColor: "#3b3838",

                            }}>
                                <ListItem>
                                    <Body>
                                        <Text style={{ color: "#fff" ,fontSize:20 }}>* Bridal Hair: $200 +</Text>
                                    </Body>
                                </ListItem>

                                <ListItem>
                                    <Body>
                                        <Text style={{ color: "#fff",fontSize:20 }}>* Updo or Partial updo: $100</Text>
                                    </Body>
                                </ListItem>

                                <ListItem>
                                    <Body>
                                        <Text style={{ color: "#fff",fontSize:20 }}>* Down do: $90</Text>
                                    </Body>
                                </ListItem>

                                <ListItem >
                                    <Body>
                                        <Text style={{ color: "#fff",fontSize:20 }}>* Blowout: (not included in any hair styling services so come with 100% dry hair for any & all appointment).</Text>
                                    </Body>
                                </ListItem>

                                <ListItem>
                                    <Body>
                                        <Text style={{ color: "#fff",fontSize:20 }}>* Keratin and Smoothing Treatments: $500</Text>
                                    </Body>
                                </ListItem>
                            </View>
                        </View>

                        <Text style={{
                            color: '#fff',
                            fontFamily: 'Arial, Helvetica, sans-serif', textAlign: "center",
                            fontSize: 25,
                            paddingTop: 25,
                            paddingBottom: 10,
                            textDecorationLine: "underline",
                            textDecorationStyle: "dashed",
                            fontWeight: "bold"
                        }}
                        >
                            MAKE UP PRICE</Text>
                        <View style={{
                            width: width / 1,
                            alignContent: "center", justifyContent: "center", alignItems: "center"
                        }}>

                            <View style={{
                                opacity: 0.9,
                                width: "85%", backgroundColor: "#3b3838",

                            }}>
                                <ListItem>
                                    <Body>
                                        <Text style={{ color: "#fff" ,fontSize:20}}>* Bridal Makeup: $150</Text>
                                    </Body>
                                </ListItem>

                                <ListItem >
                                    <Body>
                                        <Text style={{ color: "#fff" ,fontSize:20}}>* Event Makeup: $85</Text>
                                    </Body>
                                </ListItem>
                            </View>
                        </View>

                        <Text style={{
                            color: '#fff',
                            fontFamily: 'Arial, Helvetica, sans-serif', textAlign: "center",
                            fontSize: 25,
                            paddingTop: 25,
                            paddingBottom: 10,
                            textDecorationLine: "underline",
                            textDecorationStyle: "dashed",
                            fontWeight: "bold"
                        }} >
                            TRIALS PRICE
                        </Text>
                        <View style={{
                            width: width / 1,
                            alignContent: "center", justifyContent: "center", alignItems: "center"
                        }}>

                            <View style={{
                                opacity: 0.9,
                                width: "85%", backgroundColor: "#3b3838",

                            }}>
                                <ListItem>
                                    <Body>
                                        <Text style={{ color: "#fff", textAlign: 'center',fontSize:20 }}>The trial is an express version of the hair design for the day of the event which is failsafe method to ensure customer glee every time.</Text>
                                    </Body>
                                </ListItem>
                                <ListItem>
                                    <Body>
                                        <Text style={{ color: "#fff",fontSize:20 }}>* Bridal hair trial: $100</Text>
                                    </Body>
                                </ListItem>
                                <ListItem>
                                    <Body>
                                        <Text style={{ color: "#fff" ,fontSize:20}}>* Bridal Make up: $100</Text>
                                    </Body>
                                </ListItem>
                            </View>
                        </View>


                        <Text style={{
                            color: '#fff',
                            fontFamily: 'Arial, Helvetica, sans-serif', textAlign: "center",
                            fontSize: 25,
                            paddingTop: 25,
                            paddingBottom: 10,
                            textDecorationLine: "underline",
                            textDecorationStyle: "dashed",
                            fontWeight: "bold"
                        }}
                        > ADDITIONAL</Text>

                        <View style={{
                            width: width / 1,
                            alignContent: "center", justifyContent: "center", alignItems: "center"
                        }}>

                            <View style={{
                                opacity: 0.9,
                                width: "85%", backgroundColor: "#3b3838",

                            }}>
                                <ListItem>
                                    <Body>
                                        <Text style={{ color: "#fff" ,fontSize:20}}>* Travel fee (applies to all mobile jobs) is $85 in Town.</Text>
                                    </Body>
                                </ListItem>
                                <ListItem>
                                    <Body>
                                        <Text style={{ color: "#fff",fontSize:20 }}>* Minimum booking fee for mobile service is $350.</Text>
                                    </Body>
                                </ListItem>
                                <ListItem>
                                    <Body>
                                        <Text style={{ color: "#fff",fontSize:20 }}>* Early morning fee of $150 if we start before 5am.</Text>
                                    </Body>
                                </ListItem>
                            </View>
                        </View>

                    </View>

                </ScrollView>

            </ImageBackground>
        );
    }
}

const styles = StyleSheet.flatten({});