import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, ImageBackground, Platform, Dimensions, ScrollView, Image } from 'react-native';
import {
    Input, Button, Spinner, Form, Item, Picker, Label, Container,
    Header, Content, ListItem, CheckBox, Body, DatePicker, Textarea
} from "native-base";
const { width, height, scale, fontScale } = Dimensions.get("window");


export default class Classes extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: "CLASSES",
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
            headerStyle: { backgroundColor: "#fff",
            
            fontFamily: "OpenSans-Semi" }
        };
        headerRight: <View />;
    };

    handleEmail=()=>{
        this.props.navigation.navigate('Homege');
    }
    render() {
        return (

            <ImageBackground source={require("../../../../assets/maggie/Screenshot_8.jpg")}
                blurRadius={Platform.OS == 'ios' ? 1 : 3}
                style={{ width: '100%', height: '100%' }}>
                <ScrollView >

                    <View style={{

                        flexDirection: "column", padding: 20,
                        justifyContent: "center", alignContent: "center", alignItems: "center"
                    }}>
                        <Image
                            source={require("../../../../assets/maggie/maggie-white-logo.png")}
                            style={{ width: width / 2, height: height / 10 }}
                        />
                        {/* <Image
                        source={require("../../../../assets/maggie/gallery/first.jpg")}
                style={{ width: "85%", height: height / 2, justifyContent: "center", margin: 10, marginLeft: 10, marginRight: 10 }}
                /> */}
                 {/* <Text style={{
                            color: '#fff',
                            fontFamily: 'Arial, Helvetica, sans-serif', textAlign: "center",
                            fontSize: 20,
                            paddingTop: 25,
                            paddingBottom: 10,
                            textDecorationLine: "underline",
                            textDecorationStyle: "dashed",

                            fontWeight: "bold"
                        }}
                        >
                            HAIR STYLING COURSE</Text> */}
                        <View style={{
                            width: width / 1,
                            // justifyContent:"flex-start",
                       
                       
                        }}>

                            <View style={{
                                opacity: 0.9,
                                width: "85%", 
                                // justifyContent:"flex-start",
                                textAlign:"center",
                                paddingLeft:53

                            }}>
                                 <Text style={{
                                    color: '#fff',
                                    fontFamily: "OpenSans-SemiBold",
                                    fontSize: 25,
                                    textAlign: "left",
                                
                                    paddingTop: 25,
                                    paddingBottom: 0,
                             
                                  

                                }}
                                > 
                     
                            
                                ONE ON ONE
                           </Text>
                         
                                <Text style={{
                                    color: '#fff',
                                    fontFamily: "OpenSans-SemiBold",
                                    textAlign: "left",
                                    fontSize: 20,
                                    paddingTop: 10,
                                    paddingBottom: 5,
                                 

                                

                                }}
                                >One on one training and instructions:
    
                           </Text>
                                <Text style={{
                                    color: '#fff',
                                    fontFamily: " OpenSans-Regular",
                                    fontSize: 20,
                                    paddingTop: 5,
                                    paddingBottom: 5,
                                    textAlign:"left",
                                   
                                

                                  

                                }}>   <Text style={{fontSize:15, }}>
                                {'\u25a0 '} 
                                </Text> I demonstrate curling hair for soft, </Text>

                                <Text 
                                    style={{
                                        color: '#fff',
                                        fontFamily: " OpenSans-Regular",
                                        textAlign: "left",
                                        fontSize: 20,
                                        paddingLeft:20,
                                      
                                     }}>
                                     bold and dramatic down style.</Text>
                                

                            <Text style={{
                                    color: '#fff',
                                    fontFamily: " OpenSans-Regular",
                                    textAlign: "left",
                                    fontSize: 20,
                                    paddingTop: 15,
                                    paddingBottom: 5,
                                    paddingLeft:10
                               
                                 }}
                                >
                                     <Text style={{fontSize:15, }}>
                                {'\u25a0  '} 
                                </Text>
                                    I teach updos and partial updos and </Text>
                                    <Text 
                                    style={{
                                        color: '#fff',
                                        fontFamily: " OpenSans-Regular",
                                        textAlign: "left",
                                        fontSize: 20,
                                        paddingLeft:25,
                                        textAlign:"left",

                                     }}>styling with hair extensions.</Text>
                                    

                                <Text style={{
                                    color: '#fff',
                                    fontFamily: " OpenSans-Regular",
                                    fontSize: 20,
                                    paddingTop: 5,
                                    paddingBottom: 5,
                                   
                                  

                            

                                }}
                                >If you interested for more details, please fill the form below and I will get back at the soonest:</Text>

                               



                                <ListItem>

                                    <Text style={{ color: "#fff",  fontFamily: " OpenSans-Regular",
                                    fontSize: 20, }}>NAME </Text>

                                    <Input style={{ color: "#fff" }} type="text" onChangeText={name => this.setState({ name })} />
                                </ListItem>
                                <ListItem>

                                    <Text style={{ color: "#fff" ,  fontFamily: " OpenSans-Regular",
                                    fontSize: 20,}}>EMAIL</Text>

                                    <Input style={{ color: "#fff",  fontFamily: " OpenSans-Regular",
                                    fontSize: 20, }} type="text" keyboardType={"email-address"} onChangeText={email => this.setState({ email })} />
                                </ListItem>
                                <ListItem>

                                    <Text style={{ color: "#fff",  fontFamily: " OpenSans-Regular",
                                    fontSize: 20, }}>MOBILE No.</Text>

                                    <Input style={{ color: "#fff",  fontFamily: " OpenSans-Regular",
                                    fontSize: 20, }} type="text" keyboardType={"numeric"} onChangeText={number => this.setState({ number })} />
                                </ListItem>



                                <Text style={{ color: "#fff", paddingLeft: 20,paddingTop:20,  fontFamily: " OpenSans-Regular",
                                    fontSize: 20,}}>NOTE :</Text>
                                <ListItem>

                                    <Textarea rowSpan={5} bordered placeholder="WRITE HERE"
                                        style={{ color: "#fff", width: "100%" ,  fontFamily: " OpenSans-Regular",
                                        fontSize: 15,}}
                                        onChangeText={note => this.setState({ note })}
                                    />

                                </ListItem>
                            </View>
                        </View>

                        <View style={{
                            color: '#fff',
                            fontFamily: 'Arial, Helvetica, sans-serif', textAlign: "center",
                            fontSize: 25,
                            paddingTop: 25,
                            paddingBottom: 25,

                        }}
                        >
                            <Button rounded style={{
                                width: width / 2, backgroundColor: "white",
                                justifyContent: "center",
                                alignItems: "center",
                                textAlign: "center",
                                alignContent: "center",
                            }}
                                onPress={this.handleEmail}>

                                <Text style={{ color: "#000" }}> Sign Up </Text>
                            </Button>
                            </View>


                            <View style={{
                            width: width / 1,
                        }}>

                            <View style={{
                              

                                opacity: 0.9,
                                width: "85%", 
                                // justifyContent:"flex-start",
                                textAlign:"center",
                                paddingLeft:53

                            }}>


                               
                                <Text style={{
                                   color: '#fff',
                                   fontFamily: "OpenSans-SemiBold",
                                   fontSize: 25,
                                   textAlign: "left",
                               
                                   paddingTop: 25,
                                   paddingBottom: 0,

                                }}
                                >Group Courses available as well
    
                           </Text>
                               
                           <ListItem>

<Text style={{ color: "#fff",  fontFamily: " OpenSans-Regular",
fontSize: 20, }}>NAME </Text>

<Input style={{ color: "#fff" }} type="text" onChangeText={name => this.setState({ name })} />
</ListItem>
<ListItem>

<Text style={{ color: "#fff" ,  fontFamily: " OpenSans-Regular",
fontSize: 20,}}>EMAIL</Text>

<Input style={{ color: "#fff",  fontFamily: " OpenSans-Regular",
fontSize: 20, }} type="text" keyboardType={"email-address"} onChangeText={email => this.setState({ email })} />
</ListItem>
<ListItem>

<Text style={{ color: "#fff",  fontFamily: " OpenSans-Regular",
fontSize: 20, }}>MOBILE No.</Text>

<Input style={{ color: "#fff",  fontFamily: " OpenSans-Regular",
fontSize: 20, }} type="text" keyboardType={"numeric"} onChangeText={number => this.setState({ number })} />
</ListItem>



<Text style={{ color: "#fff", paddingLeft: 20,paddingTop:20,  fontFamily: " OpenSans-Regular",
fontSize: 20,}}>NOTE :</Text>
<ListItem>

<Textarea rowSpan={5} bordered placeholder="WRITE HERE"
    style={{ color: "#fff", width: "100%" ,  fontFamily: " OpenSans-Regular",
    fontSize: 15,}}
    onChangeText={note => this.setState({ note })}
/>

</ListItem>
                            </View>
                        </View>

                        <View style={{
                            color: '#fff',
                            fontFamily: 'Arial, Helvetica, sans-serif', textAlign: "center",
                            fontSize: 25,
                            paddingTop: 25,
                            paddingBottom: 10,

                        }}
                        >
                            <Button rounded style={{
                                width: width / 2, backgroundColor: "white",
                                justifyContent: "center",
                                alignItems: "center",
                                textAlign: "center",
                                alignContent: "center",
                            }}
                                onPress={this.handleEmail}>

                                <Text style={{ color: "#000" }}> Sign Up  </Text>
                            </Button>
                            </View>
                             </View>
                     </ScrollView>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.flatten({});