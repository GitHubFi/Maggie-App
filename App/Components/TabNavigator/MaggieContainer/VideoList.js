import React, { Component } from 'react';
import {
    Text, StyleSheet, View, Image,
    Dimensions, ScrollView, TouchableWithoutFeedback
} from 'react-native';
const { width, height, scale, fontScale } = Dimensions.get("window");
import VideoPlayer from 'react-native-video-player';
// import Video from 'react-native-af-video-player'
// import Video from 'react-native-video'
import { database } from 'react-native-firebase';

// import Video from 'react-native-af-video-player'
export default class VideoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            repeat: false,
            rate: 1,
            volume: 1,
            muted: false,
            resizeMode: 'conatin',
            duration: 0.0,
            currentTime: 0.0,
            paused: true,
            rateText: '1.0',
            pausedText: 'Play',
            hidenControls: false,
            show: false



        }
    }

    onLoad = (data) => {
        //set duration
        this.setState({
            duration: data.duration,
        })
    }

    onPress = (data) => {
        this.setState({ currentTime: data.currentTime });
    }


    // onEnd = () => {
    //     this.setState({ pausedText: 'Play', paused: true })
    //     this.video.seeek(0);
    // }



    render() {


        return (

            // <View style={styles.container}>



            //     <VideoPlayer
            //         source={this.props.imgsource}
            //         style={styles.imgSize}
            //     />

            // </View>

            <View style={styles.container}>





                <VideoPlayer

                    video={this.props.source}
                    // repeat={this.state.repeat}
                    // rate={this.state.rate}
                    // volume={this.state.volume}
                    // muted={this.state.muted}
                    // resizeMode={this.state.resizeMode}
                    // paused={this.state.paused}
                    // onLoad={this.onLoad}
                    // onProgress={this.onPress}

                    autoplay={false}
                    // videoWidth={30}
                    // toggleResizeModeOnFullscreen={fales}
                    // onEnd={this.onEnd}
                    style={styles.imgSize}
                    // videoWidth={100}
                    // videoHeight={100}
                    defaultMuted
                    autoplay
                    disableFullscreen
                    // fullScreenOnLongPress


                />


            </View>


        );
    }
}

const styles = StyleSheet.flatten({
    imgSize: {
        flex: 1,
        // width: null,
        // // // // alignSelf: "stretch",
        // alignSelf: "stretch"
        // height: height / 4 - 12,
        // width: width / 3 - 4,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#000"
    },
    fullScreen: {
        postion: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0

    }




});