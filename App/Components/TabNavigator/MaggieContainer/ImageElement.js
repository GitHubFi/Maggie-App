import React, { Component } from 'react';
import { Text, StyleSheet, View, Image, Dimensions, ScrollView } from 'react-native';
const { width, height, scale, fontScale } = Dimensions.get("window");
import RNCloudinary from 'react-native-cloudinary';
export default class ImageElement extends Component {



    render() {


        return (


            <Image  resizeMode="contain" source={this.props.imgsource} style={styles.imgSize}></Image>

        );
    }
}

const styles = StyleSheet.flatten({
    imgSize: {
        flex: 1,
        width: null,
        
    //  alignSelf: "stretch",
        // alignSelf: "stretch"
    }




});