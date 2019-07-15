import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView, Dimensions, TouchableWithoutFeedback, FlatList, Image, Modal } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body, Icon, ListItem } from 'native-base';
import firebase from "react-native-firebase";
import List from './List'
import ImageElement from './ImageElement';
const { width, height, scale, fontScale } = Dimensions.get("window");




export default class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: null,

            modalVisible: false,
            images: [
               
                // require("../../../../assets/maggie/gallery/first.jpg"),
                require("../../../../assets/maggie/gallery/first2.jpg"),
                require("../../../../assets/maggie/gallery/first3.jpg"),
                require("../../../../assets/maggie/gallery/first4.jpg"),
                require("../../../../assets/maggie/gallery/first5.jpg"),
                require("../../../../assets/maggie/gallery/first6.jpg"),
                
                require("../../../../assets/maggie/gallery/first8.jpg"),
                require("../../../../assets/maggie/gallery/first10.jpg"),
                require("../../../../assets/maggie/gallery/first12.jpg"),
                require("../../../../assets/maggie/gallery/first13.jpg"),
                require("../../../../assets/maggie/gallery/first14.jpg"),
                require("../../../../assets/maggie/gallery/first9.jpg"),
                require("../../../../assets/maggie/gallery/first11.jpg"),
                require("../../../../assets/maggie/gallery/g3.jpg"),
                require("../../../../assets/maggie/gallery/g5.jpg"),
                require("../../../../assets/maggie/gallery/first1.png"),
                // require("../../../../assets/maggie/gallery/first15.jpg"),
                // require("../../../../assets/maggie/gallery/second.png"),
            ],
            modalImage: require("../../../../assets/maggie/gallery/first2.jpg"),

            columns: 2
        };
    }

    setModalVisible(visible, imageKey) {
        this, this.setState({
            modalImage: this.state.images[imageKey]
        })
        this, this.setState({
            modalVisible: visible
        })
    }

    getImage() {
        return this.state.modalImage;
    }


    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: "GALLERY",
        
            headerTitleStyle: {
                color: "#000",
                alignSelf: "center",
                textAlign: "center",
                flex: 1,
                marginLeft: -30,
                fontSize: width / 23,
            },
            headerStyle: {
                backgroundColor: "#fff",

                fontFamily: "OpenSans-Semi"
            }
        };
      
    };



        
    render() {
       
        let images = this.state.images.map((val, key) => {
            return <TouchableWithoutFeedback
                key={key}
                onPress={() => { this.setModalVisible(true, key) }}
            >
                <View style={styles.imagewrap}>
                    <ImageElement imgsource={val}  thumbnail={this.state.images[key]}/>
                </View>
            </TouchableWithoutFeedback>


        })
        return (
            <ScrollView>

                <View style={styles.container}>

                    <Modal style={styles.modal} animationType={'fade'}
                        transparent={true} visible={this.state.modalVisible}
                        onRequestClose={() => { }}>

                        <View style={styles.modal}>
                            <Text style={styles.text}
                                onPress={() => { this.setModalVisible(false) }}
                            >
                                Close
                                 </Text>
                            <ImageElement imgsource={this.state.modalImage}  />
                        </View>

                    </Modal>
                    {images}
                </View>
            </ScrollView>

            
        );
    }
}

const styles = StyleSheet.flatten({

    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: "#000",
    },
    imagewrap: {
        // margin: 2,
        padding: 2,
        height: height / 4 - 12,
        width: width / 3 - 4,
        backgroundColor: "#000",
        // resizeMode:"cover"
        
        
    },
    modal: {
        flex: 1,
        padding: 20,
        backgroundColor: '#000', 
        height: height / 4 - 12,
        width: width



    },
    text: {
        color: "#fff",
        fontSize: 25,
        fontWeight: "300",
    }


});