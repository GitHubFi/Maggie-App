import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, ImageBackground, Platform, Dimensions, ScrollView, Image } from 'react-native';
import {
    Input, Button, Spinner, Form, Item, Picker, Label, Container,
    Header, Content, ListItem, CheckBox, Body, DatePicker, Textarea
} from "native-base";
const { width, height, scale, fontScale } = Dimensions.get("window");


export default class About extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: "ABOUT",
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

            // <ScrollView style={{ backgroundColor:"black" }}> 
            // <View style={{ backgroundColor:"black" }}>
            //     {/* <View style={{ height:height}}> */}
            //         {/* <ImageBackground source={require("../../../../assets/maggie/Screenshot_8.jpg")}
            //             blurRadius={Platform.OS == 'ios' ? 1 : 8}
            //             style={{ width: '100%', height: '100%' }}> */}
            //             <View style={{ color: 'white', justifyContent: "center", alignContent: "center", alignItems: "center" }}>
            //                 <Text style={{
            //                     color: 'white', fontWeight: "bold", fontSize: 30,
            //                     fontFamily: 'lucida grande tahoma verdana arial sans-serif'

            //                 }}>
            //                     About
            //                 </Text>
            //                 <Image
            //             source={require("../../../../assets/maggie/Screenshot_7.jpg")}
            //             style={{ width: "50%", height: height / 4, justifyContent: "center", margin: 10, marginLeft:10,marginRight:10 }}
            //         />
            //                 <View style={{padding:10}}>
            //                     <Text style={{
            //                         color:"white",
            //                         justifyContent: "center", alignContent: "center", alignItems: "center" ,
            //                         padding:5 }}
            //                         selectable={true}
            //                    > Why do we use it?It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            //                      The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', 
            //                      making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and 
            //                      a search for 'lorem ipsum' will uncover many web sites still in their infancy.

            //                     </Text>
            //                     <Text style={{
            //                          color:"white",
            //                          justifyContent: "center", alignContent: "center", alignItems: "center",
            //                          padding:5

            //                     }}> Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like) true generator
            //                          on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures,0 to generate Lorem 
            //                          Ipsum whichclooks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic
            //                           words etc.
            //                           </Text>
            //                 </View>
            //                 <Text style={{
            //                     color: 'white', fontWeight: "bold", fontSize: 30,
            //                     fontFamily: 'lucida grande tahoma verdana arial sans-serif' }}>
            //                     Service
            //                 </Text>
            //                 <View style={{padding:10}}>
            //                     <Text style={{
            //                         color:"white",
            //                         justifyContent: "center", alignContent: "center", alignItems: "center" ,
            //                         padding:5

            //                     }}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
            //                     The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content
            //                     here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their
            //                      default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. ords etc.

            //                     </Text>
            //                     <Text style={{
            //                          color:"white",
            //                          justifyContent: "center", alignContent: "center", alignItems: "center",
            //                          padding:5

            //                     }}> Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like) true generator
            //                          on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures,0 to generate Lorem 
            //                          Ipsum whichclooks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic
            //                           words etc.
            //                           </Text>
            //                 </View>

            //             </View>
            //         {/* </ImageBackground> */}
            //     {/* </View> */}
            // </View>
            // </ScrollView>
            <ImageBackground source={require("../../../../assets/maggie/Screenshot_8.jpg")}
                blurRadius={Platform.OS == 'ios' ? 1 : 7}
                style={{ width: '100%', height: '100%' }}>
                <ScrollView>
                    <View
                        style={{

                            flexDirection: "column", padding: 20,
                            justifyContent: "center", alignContent: "center", alignItems: "center"
                        }}>
                        <Image
                            source={require("../../../../assets/maggie/Screenshot_7.jpg")}
                            // style={{ width: width / 2, height: height / 10 }}
                            style={{ width: "50%", height: height / 4, justifyContent: "center", margin: 10, marginLeft: 10, marginRight: 10 }}
                        />

                        <Text style={{
                            color: '#fff',
                            // fontFamily: 'Chalkboard SE',
                            textAlign: "center",
                            fontSize: 35,
                            paddingTop: 5,
                            paddingBottom: 10,
                            textDecorationLine: "underline",
                            textDecorationStyle: "dashed",
                            fontWeight: "bold"
                        }}>

                            About Us
                            </Text>
                        <View style={{
                            width: width / 1,
                            alignContent: "center", justifyContent: "center", alignItems: "center", borderRadius: 5

                        }}>

                            <View style={{
                                opacity: 0.9,
                                width: "85%", 
                                backgroundColor: "#484646", 
                                borderRadius: 10

                            }}>
                                <ListItem>
                                    <Body>
                                        <Text style={{
                                            color: "#fff", textAlign: 'center', fontSize: 20, fontStyle:"normal",
                                            fontFamily: " Courier"
                                        }}>YOUR HAIR IS YOUR MOST EMINENT CROWN, INVEST IN IT TO STAY VIVACIOUS</Text>

                                    </Body>
                                </ListItem>
                                <ListItem>
                                    <Body>
                                        <Text style={{ color: "#fff", textAlign: "center", fontSize: 20 ,fontStyle:"normal",
                                            fontFamily: " Courier"}}>
                                            Maggie Torbeih, an elegant and chic hairstylist who has an all-embracing experience in all aspects of hairstyling. I exhibits a
                                            modern renaissance to the world of hairstyling with the trendiest and most classy vibes. Me and my team render the most
                                            professionally pleasing to the eye service and transform the personality of clients entirely. Expert in delivering the most stylish
                                            service customized absolutely to your taste and requirement. Illustrious for delivering an electric mix of classic and contemporary
                                            styling, patient listener and values the opinions of my clients, extremely creative and a visionary artist, incorporates visual
                                            inventiveness in my work. I am honest in my opinion and never misguides the clients and works in their best interest. my technical
                                             skills and manual dexterity is quintessential of a hardcore professional, quite adaptable and always ready to absorb up to the
                                             minute trends and techniques.
                                        </Text>
                                        <Text style={{ color: "#fff", textAlign: "center", fontSize: 20 ,fontStyle:"normal",
                                            fontFamily: " Courier"}}>
                                            Join me and my team to get into the whimsical world of hairstyling and get the most unique and chic hairdo. I am is a pro at
                                            doing bridal, formal, semi-formal and casual hairstyling and transforms the texture and outlook of hair, I do special occasion’s
                                            hair styles, Wedding, graduations party, and casual hairdos with perfection.
                                        </Text>
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