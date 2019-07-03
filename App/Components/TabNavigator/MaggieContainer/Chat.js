import React, { Component } from 'react';
import {
    Text, StyleSheet, View, TouchableOpacity, ScrollView, Dimensions,
    Platform, Image, ImageBackground, KeyboardAvoidingView, TextInput,
    AsyncStorage, FlatList, Keyboard
} from 'react-native';
import firebase from "react-native-firebase";
const { width, height, scale, fontScale } = Dimensions.get("window");
import Ionicons from "react-native-vector-icons/Ionicons";
import { connect } from "react-redux";
import moment from 'moment';


export default class Chat extends Component {
    constructor(props) {
        super(props);
        console.log(props, 'user data for chat')
        this.state = {
            //   person: {
            //     name: props.navigation.state.params.userDetail.name,
            //     phone: props.navigation.state.params.userDetail.phoneNumber,
            //   },
            textMessage: "",
            messageList: [],
           
        };
    }
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle:

                "CHAT WITH MAGGIE",
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
            // ),
            headerRight: (

                <Ionicons
                    name="md-chatbubbles"
                    size={width / 14}
                    color="#000"
                    style={{ marginRight: 15 }}
                />


            ),
            headerTitleStyle: {
                color: "#000",
                alignSelf: "center",
                textAlign: "center",
                flex: 1,
                marginLeft: -10,
                fontSize: width / 23,
            },
            headerStyle: {
                backgroundColor: "#fff",
                fontFamily: "OpenSans-Semi"
            }
        };
        headerRight: <View />;
    };



    convertDate = time => {
        var timestamp = time.toString().substring(0, 10)
        const date = new Date(timestamp * 1000)
        datevalues = [
            currentDate = date.getDate(),
            currentMonth = date.getMonth() + 1,
            currentyear = date.getFullYear(),
        ]


        console.log("CURRENT DATE", date)
        return datevalues[0] + "/" + datevalues[1] + "/" + datevalues[2];
    }

    convertTime = time => {
        let d = new Date(time);

        let c = new Date();
        let result = (d.getHours() < 10 ? "0" : "") + d.getHours() + ":";
        result += (d.getMinutes() < 10 ? "0" : "") + d.getMinutes();


     
        // if (c.getDay() !== d.getDay()) {
        //     result = d.getDay() + "" + d.getMonth() + "" + result;
        // }
        return result;
    };



    async componentWillMount() {
        let user = await AsyncStorage.getItem('User');
        firebase
            .database()
            .ref("Maggie/messages")
            .child(user)
            .on("child_added", value => {
                this.setState(prevState => {
                    return {
                        messageList: [...prevState.messageList, value.val()]
                    };
                });
            });
    }
    sendMessage = async () => {
        let user = await AsyncStorage.getItem('User');
        if (this.state.textMessage.length > 0) {
            let msgId = firebase
                .database()
                .ref("Maggie/messages")
                .child(user)
                .push().key;
            console.log(msgId)
            let updates = {};
            let message = {
                message: this.state.textMessage,
                time: firebase.database.ServerValue.TIMESTAMP,
                from: user
            };
            updates[
                `Maggie/messages/${user}/${msgId}`
            ] = message;
            updates[
                `Maggie/messages/${user}/${msgId}`
            ] = message;

            firebase
                .database()
                .ref()
                .update(updates);
            this.setState({ textMessage: "" });
        }
        Keyboard.dismiss();
    };
    renderRow = ({ item }) => {
        console.log(item, 'user list message')

        return (
            <View style={{
                width: "90%",
                alignSelf: item.from === this.props.currentUser ? "flex-start" : "flex-end",
                backgroundColor: item.from === this.props.currentUser ? "#fff" : "#fff",

                borderBottomLeftRadius: 30,
                borderBottomRightRadius: 10,

                marginBottom: 10,
                borderTopRightRadius: -20,
                borderTopLeftRadius: 30,



            }}
            >
                <Text
                    style={{
                        color: "#000",
                        padding: 12,
                        fontSize: 16,
                        // alignItems: "flex-start"
                    }}
                >
                    {item.message}

                </Text>
                <Text
                    style={{
                        color: "#000",
                        padding: 5,
                        fontSize: 12,
                        alignItems: "center",
                        justifyContent: 'center',
                        alignSelf: 'flex-end',
                        textAlign: "center"
                    }}
                >
                    {this.convertTime(item.time)}{"  "}
                   
                    <Text
                        style={{
                            color: "#000",
                            padding: 5,
                            fontSize: 12,
                            alignItems: "center",
                            justifyContent: 'center',
                            alignSelf: 'flex-end',
                            textAlign: "center"
                        }}
                    >
                        {this.convertDate(
                            item.time
                        )}
                    </Text>
                </Text>


            </View>
        )

    }
    render() {
        return (
            <ImageBackground source={require("../../../../assets/maggie/Screenshot_8.jpg")}
                blurRadius={Platform.OS == 'ios' ? 1 : 6}
                style={{ width: '100%', height: '100%' }}>

                <View
                    style={{
                        flex: 1
                    }}>
                    <FlatList
                        style={{ padding: 10, height: height * 0.6 }}
                        data={this.state.messageList}
                        renderItem={this.renderRow}
                        keyExtractor={(item, index) => index.toString()}
                    // inverted
                    />
                    <View style={{

                        padding: 5,
                        margin: 0

                    }}>


                        <KeyboardAvoidingView behavior="padding">
                            <View style={{
                                flexDirection: 'row',
                                backgroundColor: '#fff'
                            }}>
                                <TextInput
                                    value={this.state.textMessage}
                                    onChangeText={textMessage => this.setState({ textMessage })}
                                    style={{
                                        color: "black",
                                        paddingHorizontal: 20,
                                        paddingVertical: 10,
                                        fontSize: 18,
                                        flex: 1,

                                        // textAlignVertical: "top"


                                    }}
                                    inlineImageLeft='search_icon'
                                    underlineColorAndroid="transparent"
                                    placeholder="Type message..."
                                    multiline={true}
                                    numberOfLines={0}
                                    autoFocus={true}
                                />
                                <TouchableOpacity onPress={this.sendMessage}>
                                    <Text
                                        style={{
                                            alignSelf: 'center',
                                            // alignItems: 'flex-end',
                                            // justifyContent: 'flex-end',
                                            color: 'lightseagreen',
                                            fontSize: 16,
                                            fontWeight: 'bold',
                                            padding: 20,

                                        }}
                                    > Send</Text>
                                </TouchableOpacity>
                            </View>
                        </KeyboardAvoidingView>
                    </View>


                </View>



            </ImageBackground>
        );
    }
}

const styles = StyleSheet.flatten({});
function mapStateToProps(state) {
    console.log(state.authReducer.MaggieUser, '""""""""""MaggieUser"""""""""""""""')
    console.log(state.authReducer.signuperror, "----------------signuperror-----------------------")
    return {
        MaggieUser: state.authReducer.MaggieUser,
        signuperror: state.authReducer.signuperror,
        currentUser: state.authReducer.currentUser

    };
}
function mapDispatchToProps(dispatch) {
    return {

        //     sendBooking: (payload, path) => {
        //     dispatch(SendBookingDataBase(payload, path));
        //   }



    };
}
connect(
    mapStateToProps,
    mapDispatchToProps
)(Chat);