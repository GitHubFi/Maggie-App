import React, { Component } from 'react';
import { Text, StyleSheet, View ,TouchableOpacity , ScrollView, Dimensions, Image} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
const { width, height, scale, fontScale } = Dimensions.get("window");

export default class Chat extends Component {
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
                        style={{ marginRight: 15}}
                    />
                   
             
            ),
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
            <ScrollView style={{ backgroundColor:"black" }}> 
            <View style={{ backgroundColor:"black" }}>
                {/* <View style={{ height:height}}> */}
                    {/* <ImageBackground source={require("../../../../assets/maggie/Screenshot_8.jpg")}
                        blurRadius={Platform.OS == 'ios' ? 1 : 8}
                        style={{ width: '100%', height: '100%' }}> */}
                        <View style={{ color: 'white', justifyContent: "center", alignContent: "center", alignItems: "center" }}>
                            
                        <View style={{backgroundColor:"white", width:width}}>
                            <Text>Hi </Text>
                        </View>
                           
                           

                        </View>
                    {/* </ImageBackground> */}
                {/* </View> */}
            </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.flatten({});