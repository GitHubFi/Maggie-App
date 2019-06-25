import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Dimensions, Image , AsyncStorage ,Alert} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
const { width, height, scale, fontScale } = Dimensions.get("window");
import { Container, Header, Content, Card, CardItem, Text, Body, Icon } from 'native-base';
import firebase from 'react-native-firebase'

export default class Home extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: "Maggie App"

            ,
            headerLeft: (
                <TouchableOpacity 
                onPress={navigation.getParam("LogOut")}
                 >
                    <Ionicons
                        name="md-log-out"
                        size={width / 14}
                        color="#000"
                        style={{ marginLeft: 10 }}
                      
                    />
                    {/* <Icon name="ios-arrow-left" /> */}
                </TouchableOpacity>
                
            ), headerRight: (
                <TouchableOpacity onPress={navigation.getParam("openDrawer")}>
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
                color: "#000",
                alignSelf: "center",
                textAlign: "center",
                flex: 1,
                marginLeft: -10,


            },
            headerStyle: {
                backgroundColor: "#fff",
            }
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
          
            LogOut: this.signOutUser
        });
      }


    signOutUser = () => {
        Alert.alert(
            'Logout',
            'you are going to logout',
            [
             ,
              {
                text: 'Cancel',
                onPress: () => { this.props.navigation.navigate('Homege')
                console.log('Cancel Pressed')},
                style: 'cancel',
              },
              {text: 'Confirm', onPress: () =>{ firebase.auth().signOut().then(async () => {
                console.log('SIgn out successfull');
                
          
                await AsyncStorage.removeItem('User', (err => {
                  console.log(err)
                }))
                this.props.navigation.navigate('signIn');
              }).catch((err) => {
                console.log(err)
              })},
            }
            ],
            {cancelable: false},
          );

       
      }
    

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "black" }}>
                <View style={{
                    flex: 0.9,
                    justifyContent: "space-around",
                    // backgroundColor: "#eeeeee"
                }}>
                    <View style={{ flex: 1 / 2, flexDirection: "row", padding: 20, backgroundColor: "black" }}>
                        <Container style={{
                            backgroundColor: "black", borderRadius: 10,


                        }}>

                            <Content style={{ paddingRight: 20 }}>
                                <Card>
                                    <CardItem>
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
                                                    source={require("../../../assets/maggie/female-person-icon-6.jpg")}
                                                    style={{ width: 70, height: 70 }}
                                                />

                                                <Text style={{ color: "black", fontWeight: "bold", }}>
                                                    About
                  </Text>
                                            </TouchableOpacity>
                                        </Body>

                                    </CardItem>
                                </Card>
                            </Content>
                        </Container >

                        <Container style={{ backgroundColor: "black" }}>

                            <Content style={{ paddingLeft: 20 }}>
                                <Card>
                                    <CardItem>
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
                                                    source={require("../../../assets/maggie/service.jpg")}
                                                    style={{ width: 70, height: 70 }}
                                                />

                                                <Text style={{ color: "black", fontWeight: "bold" }}>
                                                    Services
                  </Text>
                                            </TouchableOpacity>
                                        </Body>

                                    </CardItem>
                                </Card>
                            </Content>
                        </Container>

                    </View>
                    <View style={{ flex: 1 / 2, flexDirection: "row", padding: 20 }}>
                        <Container style={{ backgroundColor: "black" }}>

                            <Content style={{ paddingRight: 20 }}>
                                <Card>
                                    <CardItem>
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
                                                    source={require("../../../assets/maggie/image.jpg")}
                                                    style={{ width: 70, height: 70 }}
                                                />

                                                <Text style={{ color: "black", fontWeight: "bold" }}>
                                                    Gallery
</Text>
                                            </TouchableOpacity>
                                        </Body>

                                    </CardItem>
                                </Card>
                            </Content>
                        </Container>
                        <Container style={{ backgroundColor: "black" }}>

                            <Content style={{ paddingLeft: 20 }}>
                                <Card>
                                    <CardItem>
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
                                                    source={require("../../../assets/maggie/video.png")}
                                                    style={{ width: 70, height: 70 }}
                                                />

                                                <Text style={{ color: "black", fontWeight: "bold" }}>
                                                    Videos
</Text>
                                            </TouchableOpacity>
                                        </Body>

                                    </CardItem>
                                </Card>
                            </Content>
                        </Container>

                    </View>
                    <View style={{ flex: 1 / 2, flexDirection: "row", padding: 20 }}>
                        <Container style={{ backgroundColor: "black" }}>

                            <Content style={{ paddingRight: 20 }}>
                                <Card>
                                    <CardItem>
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
                                                    source={require("../../../assets/maggie/pricelist.png")}
                                                    style={{ width: 70, height: 70 }}
                                                />

                                                <Text style={{ color: "black", fontWeight: "bold" }}>
                                                    Price List
</Text>
                                            </TouchableOpacity>
                                        </Body>

                                    </CardItem>
                                </Card>
                            </Content>
                        </Container>
                        <Container style={{ backgroundColor: "black" }}>

                            <Content style={{ paddingLeft: 20 }} >
                                <Card>
                                    <CardItem>
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
                                                    style={{ width: 70, height: 70 }}
                                                />

                                                <Text style={{ color: "black", fontWeight: "bold" }}>
                                                    Classes
</Text>
                                            </TouchableOpacity>
                                        </Body>

                                    </CardItem>
                                </Card>
                            </Content>
                        </Container>

                    </View>
                    <View style={{ flex: 1 / 2, flexDirection: "row", padding: 20 }}>
                        <Container style={{ backgroundColor: "black" }}>

                            <Content style={{ paddingRight: 20 }}>
                                <Card>
                                    <CardItem>
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
                                                    source={require("../../../assets/maggie/Screenshot_14.jpg")}
                                                    style={{ width: 70, height: 70 }}
                                                />

                                                <Text style={{ color: "black", fontWeight: "bold", fontSize: 12 }}>
                                                    Book Appointment
</Text>
                                            </TouchableOpacity>
                                        </Body>

                                    </CardItem>
                                </Card>
                            </Content>
                        </Container>
                        <Container style={{ backgroundColor: "black" }}>

                            <Content style={{ paddingLeft: 20 }}>
                                <Card>
                                    <CardItem>
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
                                                    source={require("../../../assets/maggie/Screenshot_15.jpg")}
                                                    style={{ width: 70, height: 70 }}
                                                />

                                                <Text style={{ color: "black", fontWeight: "bold" }}>
                                                    Chat
                  </Text>
                                            </TouchableOpacity>
                                        </Body>

                                    </CardItem>
                                </Card>
                            </Content>
                        </Container>

                    </View>


                </View>
            </View>
        );
    }
}

const styles = StyleSheet.flatten({});