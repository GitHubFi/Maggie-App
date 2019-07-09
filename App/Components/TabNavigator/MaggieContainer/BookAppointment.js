import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, ImageBackground, Platform, Dimensions, ScrollView, Image, Alert, ToastAndroid } from 'react-native';
const { width, height, scale, fontScale } = Dimensions.get("window");
import {
    Input, Button, Spinner, Form, Item, Picker, Label, Container,
    Header, Content, ListItem, CheckBox, Text, Body, DatePicker, Textarea,
} from "native-base";
import Icon from "react-native-vector-icons/Ionicons";
import { connect } from "react-redux";
import Mailer from 'react-native-mail';




class BookAppointment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            check1: false, check2: false, check3: false, check4: false, check5: false, check6: false, check7: false, check8: false, check9: false, check10: false,
            value1: "", value2: "", value3: "", value4: "", value5: "", value6: "", value7: "", value8: "", value9: "", value10: "",
            chosenDate: new Date(), selected2: undefined, name: "", email: "", number: "", time: "", note: "", getDate: false,
        }
        this.setDate = this.setDate.bind(this);

    }



    handleEmail = () => {
        // const { name1, email, number, chosenDate, selected2, note } = this.state

        // const { value1, value2, value3, value4, value5, value6, value7, value8, value9, value10, } = this.state;
        const value1 = this.state.value1
        const value2 = this.state.value2
        const value3 = this.state.value3
        const value4 = this.state.value4
        const value5 = this.state.value5
        const value6 = this.state.value6
        const value7 = this.state.value7
        const value8 = this.state.value8
        const value9 = this.state.value9
        const value10 = this.state.value10
        const name = this.state.name
        const number = this.state.number
        const email = this.state.email
        const date = this.state.chosenDate
        const time = this.state.selected2
        const note = this.state.note
        const getDate = this.state.getDate




        if (name === "") {
            ToastAndroid.show("Please Enter your Name", ToastAndroid.SHORT);
            return;
        } else if (email === "") {
            ToastAndroid.show("Please Enter Email", ToastAndroid.SHORT);
            return;
        } else if (number === "") {
            ToastAndroid.show("Please Enter Mobile Number", ToastAndroid.SHORT);
            return;
        } else if (time === undefined) {
            ToastAndroid.show("Please Select the Time", ToastAndroid.SHORT);
            return;
        } else if (note === "") {
            ToastAndroid.show("Please Write a short Note", ToastAndroid.SHORT);
            return;
        } else if (getDate == false) {
            ToastAndroid.show("Please Select your Date", ToastAndroid.SHORT);
            return;
        }

        Mailer.mail({
            subject: 'Booking Appointment maggie app',
            recipients: ['arcmage321@gmail.com'],
            // ccRecipients: ['arcmage321CC@gmail.com'],
            // bccRecipients: ['arcmage321BCC@gmail.com'],
            body: `<b>Name : ${name}<b/> <br/>
                    <b>Email : ${ email}</b> <br/>
                    <b>Mobile Numner: ${ number}</b> <br/>
                    <p><b>Booking For :</b></p> <br/>
                    <b> ${ value1}  ${value2} ${value3} ${value4} ${value5} ${value6} ${value7} ${value8} ${value9} ${value10}</b> <br/>
                    <p>Date : <b> ${ date}</b></p> <br/> 
                    <p>Time : <b> ${ time}</b></p> <br/> 
                    <p>NOTE : "<i> ${ note}</i> "</p>`,
            isHTML: true,
            // attachment: {
            //     path: '',  // The absolute path of the file from which to read data.
            //     type: '',   // Mime Type: jpg, png, doc, ppt, html, pdf, csv
            //     name: '',   // Optional: Custom filename for attachment
            // }
        }, (error, event) => {
            Alert.alert(
                error,
                event,
                [
                    { text: 'Ok', onPress: () => console.log('OK: Email Error Response') },
                    { text: 'Cancel', onPress: () => console.log('CANCEL: Email Error Response') }
                ],
                { cancelable: true }
            )
        });

        this.props.navigation.navigate('Homege');
        // const alldata ={ value1, value2, value3, value4, value5, value6, value7, value8, value9, value10, name, email } = this.state
        // this.props.sendBooking(alldata, this.props.navigation);

    }



    setDate(newDate) {
        this.setState({
            chosenDate: newDate,
            getDate: true
        })
    }

    chkbox_check1(value) {

        if (this.state.check1 === false) {
            this.setState({
                check1: true,
                value1: value
            });
        }
        else if (this.state.check1 === true) {
            this.setState({
                check1: false,
                value1: ""
            });
        }
    }
    chkbox_check2(value) {

        if (this.state.check2 === false) {
            this.setState({
                check2: true,
                value2: value
            });
        }
        else if (this.state.check2 === true) {
            this.setState({
                check2: false,
                value2: ""
            });
        }
    }
    chkbox_check3(value) {

        if (this.state.check3 === false) {
            this.setState({
                check3: true,
                value3: value
            });
        }
        else if (this.state.check3 === true) {
            this.setState({
                check3: false,
                value3: ""
            });
        }
    }
    chkbox_check4(value) {

        if (this.state.check4 === false) {
            this.setState({
                check4: true,
                value4: value
            });
        }
        else if (this.state.check4 === true) {
            this.setState({
                check4: false,
                value4: ""
            });
        }
    }
    chkbox_check5(value) {

        if (this.state.check5 === false) {
            this.setState({
                check5: true,
                value5: value
            });
        }
        else if (this.state.check5 === true) {
            this.setState({
                check5: false,
                value5: ""
            });
        }
    }
    chkbox_check6(value) {

        if (this.state.check6 === false) {
            this.setState({
                check6: true,
                value6: value
            });
        }
        else if (this.state.check6 === true) {
            this.setState({
                check6: false,
                value6: ""
            });
        }
    }
    chkbox_check7(value) {

        if (this.state.check7 === false) {
            this.setState({
                check7: true,
                value7: value
            });
        }
        else if (this.state.check7 === true) {
            this.setState({
                check7: false,
                value7: ""
            });
        }
    }
    chkbox_check8(value) {

        if (this.state.check8 === false) {
            this.setState({
                check8: true,
                value8: value
            });
        }
        else if (this.state.check8 === true) {
            this.setState({
                check8: false,
                value8: ""
            });
        }
    }
    chkbox_check9(value) {

        if (this.state.check9 === false) {
            this.setState({
                check9: true,
                value9: value
            });
        }
        else if (this.state.check9 === true) {
            this.setState({
                check9: false,
                value9: ""
            });
        }
    }
    chkbox_check10(value) {

        if (this.state.check10 === false) {
            this.setState({
                check10: true,
                value10: value
            });
        }
        else if (this.state.check10 === true) {
            this.setState({
                check10: false,
                value10: ""
            });
        }
    }
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: "BOOK APPOINTMENT",

            headerTitleStyle: {
                color: "#000",
                alignSelf: "center",
                textAlign: "center",
                flex: 1,
                fontSize: width / 23,
                marginLeft: -20,


            },
            headerStyle: {
                backgroundColor: "#fff",
                fontFamily: "OpenSans-Semi",
            }
        };
        headerRight: <View />;
    };
    render() {
        console.log("CHECK 1 ", this.state.value1);
        console.log("CHECK 2", this.state.value2);
        console.log("CHECK 3", this.state.value3);
        console.log("CHECK 4", this.state.value4);
        console.log("CHECK 5", this.state.value5);
        console.log("CHECK 6", this.state.value6);
        console.log("CHECK 7", this.state.value7);
        console.log("CHECK 8", this.state.value8);
        console.log("CHECK 9", this.state.value9);
        console.log("CHECK 10", this.state.value10);
        console.log("Name", this.state.name);
        console.log("Email", this.state.email);
        console.log("Number", this.state.number);
        console.log("Date", this.state.chosenDate);
        console.log("Time ", this.state.selected2);
        console.log("Note ", this.state.note);



        return (


            <ImageBackground source={require("../../../../assets/maggie/Screenshot_8.jpg")}
                blurRadius={Platform.OS == 'ios' ? 1 : 1}
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
                        <Text style={{
                            color: '#fff',
                            fontFamily: "OpenSans-SemiBold",
                            textAlign: "center",
                            fontSize: 25,
                            paddingTop: 25,
                            paddingBottom: 10,
                            textDecorationLine: "underline",
                            textDecorationStyle: "dashed",
                        }}
                        >
                            HAIR</Text>

                        <View style={{
                            width: width / 1,
                            alignContent: "center", justifyContent: "center", alignItems: "center"
                        }}>

                            <View style={{
                                opacity: 0.9,
                                width: "85%", backgroundColor: "#f2f2f2",

                            }}>
                                <ListItem
                                    onPress={this.chkbox_check1.bind(this, "Bridal Hair")}
                                >
                                    <CheckBox
                                        color={"#000"}
                                        onPress={this.chkbox_check1.bind(this, "Bridal Hair")}
                                        value="Bridal Hair" checked={this.state.check1} />
                                    <Body>
                                        <Text style={{ color: "#000" }}>Bridal Hair</Text>
                                    </Body>
                                </ListItem>
                                <ListItem
                                    onPress={this.chkbox_check2.bind(this, "Updo or Partial")}>
                                    <CheckBox
                                        color={"#000"}
                                        onPress={this.chkbox_check2.bind(this, "Updo or Partial")}
                                        value="Updo or Partial" checked={this.state.check2} />
                                    <Body>
                                        <Text style={{ color: "#000" }}>Updo or Partial</Text>
                                    </Body>
                                </ListItem>
                                <ListItem
                                    onPress={this.chkbox_check3.bind(this, "Down do")}>
                                    <CheckBox
                                        color={"#000"}
                                        onPress={this.chkbox_check3.bind(this, "Down do")}
                                        value="Down do" checked={this.state.check3} />
                                    <Body>
                                        <Text style={{ color: "#000" }}>Down do</Text>
                                    </Body>
                                </ListItem>
                                <ListItem
                                    onPress={this.chkbox_check4.bind(this, "Extensions")}>
                                    <CheckBox
                                        color={"#000"}
                                        onPress={this.chkbox_check4.bind(this, "Extensions")}
                                        value="Extensions" checked={this.state.check4} />
                                    <Body>
                                        <Text style={{ color: "#000" }}>Extensions</Text>
                                    </Body>
                                </ListItem>
                                <ListItem
                                    onPress={this.chkbox_check5.bind(this, "Blowout")}>
                                    <CheckBox
                                        color={"#000"}
                                        onPress={this.chkbox_check5.bind(this, "Blowout")}
                                        value="Blowout" checked={this.state.check5} />
                                    <Body>
                                        <Text style={{ color: "#000" }}>Blowout</Text>
                                    </Body>
                                </ListItem>
                                <ListItem onPress={this.chkbox_check6.bind(this, "Keratin and Smoothing Treatments")}>
                                    <CheckBox
                                        color={"#000"}
                                        onPress={this.chkbox_check6.bind(this, "Keratin and Smoothing Treatments")}

                                        value="Keratin and Smoothing Treatments" checked={this.state.check6} />
                                    <Body>
                                        <Text style={{ color: "#000" }}>Keratin and Smoothing Treatments</Text>
                                    </Body>
                                </ListItem>


                            </View>


                        </View>


                        <Text style={{
                            color: '#fff',
                            fontFamily: "OpenSans-SemiBold", textAlign: "center",
                            fontSize: 25,
                            paddingTop: 25,
                            paddingBottom: 10,
                            textDecorationLine: "underline",
                            textDecorationStyle: "dashed",
                        }}
                        >
                            MAKE UP</Text>

                        <View style={{
                            width: width / 1,
                            alignContent: "center", justifyContent: "center", alignItems: "center"
                        }}>

                            <View style={{
                                opacity: 0.9,
                                width: "85%", backgroundColor: "#f2f2f2",

                            }}>
                                <ListItem onPress={this.chkbox_check7.bind(this, "Bridal Makeup")}>
                                    <CheckBox
                                        color={"#000"}
                                        onPress={this.chkbox_check7.bind(this, "Bridal Makeup")}
                                        value="Bridal Makeup" checked={this.state.check7}
                                    />
                                    <Body>
                                        <Text style={{ color: "#000" }}>Bridal Makeup</Text>
                                    </Body>
                                </ListItem>
                                <ListItem onPress={this.chkbox_check8.bind(this, "Event Makeup")}>
                                    <CheckBox
                                        color={"#000"}
                                        onPress={this.chkbox_check8.bind(this, "Event Makeup")}
                                        value="Event Makeup" checked={this.state.check8} />
                                    <Body>
                                        <Text style={{ color: "#000" }}>Event Makeup</Text>
                                    </Body>
                                </ListItem>




                            </View>
                        </View>
                        <Text style={{
                            color: '#fff',
                            fontFamily: "OpenSans-SemiBold", textAlign: "center",
                            fontSize: 25,
                            paddingTop: 25,
                            paddingBottom: 10,
                            textDecorationLine: "underline",
                            textDecorationStyle: "dashed",
                        }}
                        >
                            TRIALS</Text>

                        <View style={{
                            width: width / 1,
                            alignContent: "center", justifyContent: "center", alignItems: "center"
                        }}>

                            <View style={{
                                opacity: 0.9,
                                width: "85%", backgroundColor: "#f2f2f2"

                            }}>
                                <ListItem onPress={this.chkbox_check9.bind(this, "Bridal Hair Trial")}>
                                    <CheckBox
                                        color={"#000"}
                                        onPress={this.chkbox_check9.bind(this, "Bridal Hair Trial")}
                                        value="Bridal Hair Trial" checked={this.state.check9} />
                                    <Body>
                                        <Text style={{ color: "#000" }}>Bridal Hair Trial</Text>
                                    </Body>
                                </ListItem>
                                <ListItem onPress={this.chkbox_check10.bind(this, "Bridal Makeup Trial")}>
                                    <CheckBox
                                        color={"#000"}
                                        onPress={this.chkbox_check10.bind(this, "Bridal Makeup Trial")}
                                        value="Bridal Hair Trial" checked={this.state.check10}
                                        style={{ color: "red" }} />
                                    <Body>
                                        <Text style={{ color: "#000" }}>Bridal Makeup Trial</Text>
                                    </Body>
                                </ListItem>



                            </View>
                        </View>


                        <Text style={{
                            color: '#fff',
                            fontFamily: "OpenSans-SemiBold", textAlign: "center",
                            fontSize: 25,
                            paddingTop: 25,
                            paddingBottom: 10,
                            textDecorationLine: "underline",
                            textDecorationStyle: "dashed",
                        }}
                        >
                            YOUR DETAIL</Text>
                        <View style={{
                            width: width / 1,
                            alignContent: "center", justifyContent: "center", alignItems: "center"
                        }}>

                            <View style={{
                                opacity: 0.9,
                                width: "85%", backgroundColor: "#f2f2f2",

                            }}>
                                <ListItem>

                                    <Text style={{ color: "#000" }}>FULL NAME *</Text>

                                    <Input style={{ color: "#000" }} type="text" onChangeText={name => this.setState({ name })} />
                                </ListItem>
                                <ListItem>

                                    <Text style={{ color: "#000" }}>EMAIL ADDRESS *</Text>

                                    <Input style={{ color: "#000" }} type="text" keyboardType={"email-address"} onChangeText={email => this.setState({ email })} />
                                </ListItem>
                                <ListItem>

                                    <Text style={{ color: "#000" }}>MOBILE NUMBER *</Text>

                                    <Input style={{ color: "#000" }} type="text" keyboardType={"numeric"} onChangeText={number => this.setState({ number })} />
                                </ListItem>
                                <ListItem style={{
                                    paddingRight: 20,
                                    justifyContent: "flex-end",
                                    alignContent: "flex-start",
                                    alignSelf: "flex-start"
                                }}>

                                    {/* <Text style={{ color: "#fff" }}> </Text> */}

                                    <DatePicker
                                        defaultDate={new Date(2019, 6, 1)}
                                        minimumDate={new Date(2018, 1, 1)}
                                        maximumDate={new Date(2050, 12, 31)}
                                        locale={"en"}
                                        timeZoneOffsetInMinutes={undefined}
                                        modalTransparent={false}
                                        animationType={"fade"}
                                        androidMode={"default"}
                                        placeHolderText="SELECT DATE : "
                                        textStyle={{
                                            color: "#000", fontSize: 20, justifyContent: "flex-start",
                                            fontFamily: " OpenSans-Regular",
                                        }}
                                        placeHolderTextStyle={{ color: "#000", fontSize: 16,paddingRight:20 }}
                                        onDateChange={this.setDate}
                                        disabled={false}
                                    />
                                    <Text style={{ color: "#000", fontSize: 17 }}>
                                        Date: {this.state.chosenDate.toString().substr(4, 12)}
                                    </Text>
                                </ListItem>
                                <ListItem>

                                    <Text style={{ color: "#000" }}>PREFERRED TIME : </Text>

                                    <Picker
                                        mode="dropdown"
                                        iosIcon={<Icon name="md-arrow-down" />}
                                        style={{ width: "25%", color: "#000", }}
                                        placeholder="Select Time"
                                        placeholderStyle={{ color: "#000", fontSize: 15, fontWeight: "bold" }}
                                        placeholderIconColor="#000"
                                        selectedValue={this.state.selected2}
                                        onValueChange={event => this.setState({ selected2: event })}
                                    >
                                        <Picker.Item label="5:00" value="5:00" />
                                        <Picker.Item label="6:30" value="6:30" />
                                        <Picker.Item label="7:00" value="7:00" />
                                        <Picker.Item label="7:30" value="7:30" />
                                        <Picker.Item label="8:30" value="8:30" />
                                        <Picker.Item label="9:00" value="9:00" />
                                        <Picker.Item label="9:30" value="9:30" />
                                        <Picker.Item label="10:00" value="10:00" />
                                        <Picker.Item label="10:30" value="10:30" />
                                        <Picker.Item label="11:00" value="11:00" />
                                        <Picker.Item label="11:30" value="11:30" />
                                        <Picker.Item label="12:00" value="12:00" />
                                        <Picker.Item label="12:30" value="12:30" />
                                        <Picker.Item label="13:00" value="13:00" />
                                        <Picker.Item label="13:30" value="13:30" />
                                        <Picker.Item label="14:00" value="14:00" />
                                        <Picker.Item label="14:30" value="14:30" />
                                        <Picker.Item label="15:00" value="15:00" />
                                        <Picker.Item label="15:30" value="15:30" />
                                        <Picker.Item label="16:00" value="16:00" />
                                        <Picker.Item label="16:30" value="16:30" />
                                        <Picker.Item label="17:00" value="17:00" />
                                    </Picker>
                                </ListItem>

                                <Text style={{ color: "#000", paddingLeft: 20, paddingTop: 20 }}>NOTE :</Text>
                                <ListItem>

                                    <Textarea rowSpan={5} bordered placeholder=" Write Note"
                                        style={{ color: "#000", width: "95%" }}
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

                                <Text style={{ color: "#000" }}> Send </Text>
                            </Button></View>











                        {/* <Text style={{
                            color: '#fff',
                            fontFamily: 'Arial, Helvetica, sans-serif', textAlign: "center",
                            fontSize: 25,
                            paddingTop: 25,
                            paddingBottom: 10,
                            textDecorationLine: "underline",
                            textDecorationStyle: "dashed",
                        }}
                        >
                            Your Detail</Text>
                        <View style={{
                            width: width / 1, height: height / 9,
                            alignContent: "center", justifyContent: "center", alignItems: "center"
                        }}>

                            <View style={{
                                opacity: 0.9,
                                width: "85%", backgroundColor: "#3b3838",

                            }}>
                                <ListItem>
                                    <CheckBox
                                        onPress={this.chkbox_check9.bind(this, "Bridal Hair Trial")}
                                        value="Bridal Hair Trial" checked={this.state.check9} />
                                    <Body>
                                        <Text style={{ color: "#fff" }}>Bridal Hair Trial</Text>
                                    </Body>

                                </ListItem>
                                <ListItem>
                                    <CheckBox
                                        onPress={this.chkbox_check10.bind(this, "Bridal Hair Trial")}
                                        value="Bridal Hair Trial" checked={this.state.check10} />
                                    <Body>
                                        <Text style={{ color: "#fff" }}>Bridal Makeup Trial</Text>
                                    </Body>
                                </ListItem>





                            </View>
                        </View> */}


                    </View>



                    {/* </View> */}

                    {/* </View> */}
                </ScrollView>
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
        signuperror: state.authReducer.signuperror

    };
}
function mapDispatchToProps(dispatch) {
    return {

        //     sendBooking: (payload, path) => {
        //     dispatch(SendBookingDataBase(payload, path));
        //   }



    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BookAppointment);