import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Animation, Image, Dimensions ,Transformation} from 'react-native';
const { width, height, scale, fontScale } = Dimensions.get("window");
import RNCloudinary from 'react-native-cloudinary';
import Cloudinary from 'react-native-cloudinary';
import Video from 'react-native-video'
export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = {


        };
    }
    
    render() {

        const { itemWidth } = this.props
        return (
            // <TouchableOpacity>

            //     <Image style={{ flex: 1, width: itemWidth, height:200, margin: 5, marginRight: 5, paddingRight: 5 }} source={this.props.image} />


            // </TouchableOpacity>
            <View style={{flex:1, justifiyContent:'center'}}>
           

            </View>
        );
    }
}

const styles = StyleSheet.flatten({});