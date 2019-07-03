import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Dimensions, Image, AsyncStorage, Alert } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import EvilIcons from "react-native-vector-icons/EvilIcons";

const { width, height, scale, fontScale } = Dimensions.get("window");
import { Container, Header, Content, Card, CardItem, Text, Body, Icon } from 'native-base';
import firebase from 'react-native-firebase'

export default class Home extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: (
                <Image
                    resizeMode="contain"
                    source={require("../../../assets/maggie/headerLogo.png")}
                    style={{
                        flex: 1, width: 150, height: 60, resizeMode: "contain",
                    }}
                />

            ),
            headerStyle: { height: 60 }

            ,
            headerLeft: (
                <TouchableOpacity
                    onPress={navigation.getParam("LogOut")}
                >
                    <EvilIcons
                        name="arrow-left"
                        size={width / 10}
                        color="#000"
                        style={{ marginLeft: 8 }}

                    />
                    {/* <Icon name="ios-arrow-left" /> */}
                </TouchableOpacity>

            ), headerRight: (
                <TouchableOpacity onPress={navigation.getParam('Noti')}>
                    <Ionicons
                        name="md-notifications-outline"
                        size={width / 14}
                        color="#000"
                        style={{ marginRight: 10 }}
                    />
                    {/* <Icon name="ios-arrow-left" /> */}
                </TouchableOpacity>
            ),

            headerTitleStyle: {
                // color: "#000",
                alignSelf: "center",
                textAlign: "center",
                flex: 1,
                justifyContent: 'center',
                height: 100,

                // marginLeft: -10,


            },
            headerStyle: { height: 75 }
        };
        headerRight: <View />;
    };

    componentWillMount() {
        firebase.auth().onAuthStateChanged(async function (user) {
            console.log(user, " firebase.auth().onAuthStateChanged")
            // console.log(error)

            if (user) {
                await AsyncStorage.setItem('User', user._auth._user._user.uid)

                // ...
            } else {
                // ...
                console.log('error')
            }
        });
    }

    componentDidMount() {
        this.props.navigation.setParams({

            LogOut: this.signOutUser,
            Noti: this.GoToNotification
        });
    }

    GoToNotification = () => {
        this.props.navigation.navigate('Notification')

    }


    signOutUser = () => {
        Alert.alert(
            'Logout',
            'you are going to logout',
            [
                ,
                {
                    text: 'Cancel',
                    onPress: () => {
                        this.props.navigation.navigate('Homege')
                        console.log('Cancel Pressed')
                    },
                    style: 'cancel',
                },
                {
                    text: 'Confirm', onPress: () => {
                        firebase.auth().signOut().then(async () => {
                            console.log('SIgn out successfull');


                            await AsyncStorage.removeItem('User', (err => {
                                console.log(err)
                            }))
                            this.props.navigation.navigate('signIn');
                        }).catch((err) => {
                            console.log(err)
                        })
                    },
                }
            ],
            { cancelable: false },
        );


    }


    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "black" }}>
                <View style={{
                    flex: 1,
                    justifyContent: "space-around",
                    // backgroundColor: "#eeeeee"
                    paddingBottom: 30

                    // height: height

                }}>
                    <View style={{
                        flex: 1 / 2, flexDirection: "row",
                        padding: 20,

                        backgroundColor: "black"
                    }}>
                        <Container style={{
                            backgroundColor: "black", borderRadius: 10, padding: 10


                        }}>

                            {/* <Content style={{ paddingRight: 20, backgroundColor: "pink" }}> */}
                            {/* <Card style={{backgroundColor: "black" }} >  */}
                            <CardItem style={{ borderRadius: 15, paddingRight: 20, width: "90%" }}>
                                <Body>
                                    <TouchableOpacity
                                        style={{
                                            width: width / 2,
                                            // justifyContent: "center",
                                            alignItems: "center",
                                            // backgroundColor: "red",
                                            justifyContent: "center",
                                            alignContent: "center",
                                            alignSelf: "center"

                                        }}
                                        onPress={() => {
                                            this.props.navigation.navigate("about");
                                        }}
                                    >
                                        <Image
                                            source={require("../../../assets/maggie/female-person-icon1-6.png")}
                                            style={{ width: 70, height: 70, justifyContent: "center" }}
                                        />

                                        <Text style={{ color: "black", fontWeight: "bold", fontSize: width / 30, }}>
                                            ABOUT
                  </Text>
                                    </TouchableOpacity>
                                </Body>

                            </CardItem>
                            {/* </Card> */}
                            {/* </Content> */}
                        </Container >

                        <Container style={{ backgroundColor: "black", padding: 10 }}>

                            {/* <Content style={{ paddingLeft: 20 }}> */}
                            {/* <Card> */}
                            <CardItem style={{ borderRadius: 15, paddingLeft: 20, width: "90%" }}>
                                <Body>
                                    <TouchableOpacity
                                        style={{
                                            width: width / 2,
                                            // justifyContent: "center",
                                            alignItems: "center",
                                            // backgroundColor: "red",
                                            justifyContent: "center",
                                            alignContent: "center",
                                            alignSelf: "center"

                                        }}
                                        onPress={() => {
                                            this.props.navigation.navigate("services");
                                        }}
                                    >
                                        <Image
                                            source={require("../../../assets/maggie/Service.png")}
                                            style={{ width: 70, height: 70, justifyContent: "center", paddingTop: 5 }}
                                        />

                                        <Text style={{ color: "black", fontWeight: "bold", fontSize: width / 30, }}>
                                            SERVICES
                  </Text>
                                    </TouchableOpacity>
                                </Body>

                            </CardItem>
                            {/* </Card> */}
                            {/* </Content> */}
                        </Container>

                    </View>
                    <View style={{ flex: 1 / 2, flexDirection: "row", padding: 20, }}>
                        <Container style={{ backgroundColor: "black", padding: 10 }}>

                            {/* <Content style={{ paddingRight: 20 }}> */}
                            {/* <Card> */}
                            <CardItem style={{ borderRadius: 15, paddingRight: 20, width: "90%" }}>
                                <Body>
                                    <TouchableOpacity
                                        style={{
                                            width: width / 2,
                                            // justifyContent: "center",
                                            alignItems: "center",
                                            // backgroundColor: "red",
                                            justifyContent: "center",
                                            alignContent: "center",
                                            alignSelf: "center"

                                        }}
                                        onPress={() => {
                                            this.props.navigation.navigate("gallery");
                                        }}
                                    >
                                        <Image
                                            source={require("../../../assets/maggie/Gallery.png")}
                                            style={{ width: 70, height: 70, justifyContent: "center" }}
                                        />

                                        <Text style={{ color: "black", fontWeight: "bold", fontSize: width / 30, }}>
                                            GALLERY
</Text>
                                    </TouchableOpacity>
                                </Body>

                            </CardItem>
                            {/* </Card> */}
                            {/* </Content> */}
                        </Container>
                        <Container style={{ backgroundColor: "black", padding: 10 }}>

                            {/* <Content style={{ paddingLeft: 20 }}> */}
                            {/* <Card> */}
                            <CardItem style={{ borderRadius: 15, paddingLeft: 20, width: "90%" }}>
                                <Body>
                                    <TouchableOpacity
                                        style={{
                                            width: width / 2,
                                            // justifyContent: "center",
                                            alignItems: "center",
                                            // backgroundColor: "red",
                                            justifyContent: "center",
                                            alignContent: "center",
                                            alignSelf: "center"

                                        }}
                                        onPress={() => {
                                            this.props.navigation.navigate("video");
                                        }}
                                    >
                                        <Image
                                            source={require("../../../assets/maggie/Video.png")}
                                            style={{ width: 70, height: 70 }}
                                        />

                                        <Text style={{ color: "black", fontWeight: "bold", fontSize: width / 30, }}>
                                            VIDEOS
</Text>
                                    </TouchableOpacity>
                                </Body>

                            </CardItem>
                            {/* </Card> */}
                            {/* </Content> */}
                        </Container>

                    </View>
                    <View style={{ flex: 1 / 2, flexDirection: "row", padding: 20 }}>
                        <Container style={{ backgroundColor: "black", padding: 10 }}>

                            {/* <Content style={{ paddingRight: 20 }}> */}
                            {/* <Card> */}
                            <CardItem style={{ borderRadius: 15, paddingRight: 20, width: "90%" }}>
                                <Body>
                                    <TouchableOpacity
                                        style={{
                                            width: width / 2,

                                            // justifyContent: "center",
                                            alignItems: "center",
                                            // backgroundColor: "red",
                                            // backgroundColor: "red",
                                            justifyContent: "center",
                                            alignContent: "center",
                                            alignSelf: "center"

                                        }}
                                        onPress={() => {
                                            this.props.navigation.navigate("price");
                                        }}
                                    >
                                        <Image
                                            source={require("../../../assets/maggie/Price.png")}
                                            style={{ width: 70, height: 70, justifyContent: "center" }}
                                        />

                                        <Text style={{ color: "black", fontWeight: "bold", fontSize: width / 30, }}>
                                            PRICE LIST
</Text>
                                    </TouchableOpacity>
                                </Body>

                            </CardItem>
                            {/* </Card> */}
                            {/* </Content> */}
                        </Container>
                        <Container style={{ backgroundColor: "black", padding: 10 }}>

                            {/* <Content style={{ paddingLeft: 20 }} > */}
                            {/* <Card> */}
                            <CardItem style={{ borderRadius: 15, paddingLeft: 20, width: "90%" }}>
                                <Body>
                                    <TouchableOpacity
                                        style={{
                                            width: width / 2,
                                            // justifyContent: "center",
                                            alignItems: "center",
                                            // backgroundColor: "red",
                                            // backgroundColor: "red",
                                            justifyContent: "center",
                                            alignContent: "center",
                                            alignSelf: "center"

                                        }}
                                        onPress={() => {
                                            this.props.navigation.navigate("classes");
                                        }}
                                    >
                                        <Image
                                            source={require("../../../assets/maggie/teacher.png")}
                                            style={{ width: 70, height: 70, justifyContent: "center" }}
                                        />

                                        <Text style={{ color: "black", fontWeight: "bold", fontSize: width / 30, }}>
                                            CLASSES
</Text>
                                    </TouchableOpacity>
                                </Body>

                            </CardItem>
                            {/* </Card> */}
                            {/* </Content> */}
                        </Container>

                    </View>
                    <View style={{ flex: 1 / 2, flexDirection: "row", padding: 20 }}>
                        <Container style={{ backgroundColor: "black", padding: 10 }}>

                            {/* <Content style={{ paddingRight: 20 }}> */}
                            {/* <Card> */}
                            <CardItem style={{ borderRadius: 15, paddingRight: 20, width: "90%" }}>
                                <Body>
                                    <TouchableOpacity
                                        style={{
                                            width: width / 2,
                                            // justifyContent: "center",
                                            alignItems: "center",
                                            // backgroundColor: "red",
                                            justifyContent: "center",
                                            alignContent: "center",
                                            alignSelf: "center"

                                        }}
                                        onPress={() => {
                                            this.props.navigation.navigate("bookappointment");
                                        }}
                                    >
                                        <Image
                                            source={require("../../../assets/maggie/Appointment.png")}
                                            style={{ width: 70, height: 70 }}
                                        />

                                        <Text style={{ color: "black", fontWeight: "bold", fontSize: width / 30, }}>
                                            BOOK APPOINTMENT
</Text>
                                    </TouchableOpacity>
                                </Body>

                            </CardItem>
                            {/* </Card> */}
                            {/* </Content> */}
                        </Container>
                        <Container style={{ backgroundColor: "black", padding: 10 }}>

                            {/* <Content style={{ paddingLeft: 20 }}> */}
                            {/* <Card> */}
                            <CardItem style={{ borderRadius: 15, paddingLeft: 20, width: "90%" }}>
                                <Body>
                                    <TouchableOpacity
                                        style={{
                                            width: width / 2,
                                            // justifyContent: "center",
                                            alignItems: "center",
                                            // backgroundColor: "red",
                                            justifyContent: "center",
                                            alignContent: "center",
                                            alignSelf: "center"

                                        }}
                                        onPress={() => {
                                            this.props.navigation.navigate("chat");
                                        }}
                                    >
                                        <Image
                                            source={require("../../../assets/maggie/Chat.png")}
                                            style={{ width: 70, height: 70, justifyContent: "center" }}
                                        />

                                        <Text style={{ color: "black", fontWeight: "bold", fontSize: width / 30, }}>
                                            CHAT
                  </Text>
                                    </TouchableOpacity>
                                </Body>

                            </CardItem>
                            {/* </Card> */}
                            {/* </Content> */}
                        </Container>

                    </View>


                </View>
            </View>
        );
    }
}

const styles = StyleSheet.flatten({});