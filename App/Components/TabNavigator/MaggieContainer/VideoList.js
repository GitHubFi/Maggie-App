// import React, { Component } from 'react';
// import {
//     Text, StyleSheet, View, Image,
//     Dimensions, ScrollView, TouchableWithoutFeedback, TouchableOpacity
// } from 'react-native';
// const { width, height, scale, fontScale } = Dimensions.get("window");
// import VideoPlayer from 'react-native-video-player';
// // import Video from 'react-native-af-video-player'
// // import Video from 'react-native-video'
// import { database } from 'react-native-firebase';


// export default class VideoList extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             repeat: false,
//             rate: 1,
//             volume: 1,
//             muted: false,
//             resizeMode: 'conatin',
//             duration: 0.1,
//             currentTime: 0.0,
//             paused: true,
//             rateText: '1.0',
//             pausedText: 'Play',
//             hidenControls: false,
//             show: false,
//             data: [
//                 require("../../../../assets/maggie/gallery/first1.png"),
//                 require("../../../../assets/maggie/gallery/first2.jpg"),
//                 require("../../../../assets/maggie/gallery/first3.jpg"),
//                 require("../../../../assets/maggie/gallery/first4.jpg"),
//                 require("../../../../assets/maggie/gallery/first5.jpg"),
//                 require("../../../../assets/maggie/gallery/first6.jpg"),
//                 require("../../../../assets/maggie/gallery/first8.jpg"),
//                 require("../../../../assets/maggie/gallery/first10.jpg"),
//                 require("../../../../assets/maggie/gallery/first12.jpg"),
//                 require("../../../../assets/maggie/gallery/first13.jpg"),
//                 require("../../../../assets/maggie/gallery/first14.jpg"),
//                 require("../../../../assets/maggie/gallery/first9.jpg"),
//                 require("../../../../assets/maggie/gallery/first11.jpg"),
//                 require("../../../../assets/maggie/gallery/g3.jpg"),
//                 require("../../../../assets/maggie/gallery/g5.jpg"),


//             ],
//             thumbnail: require("../../../../assets/maggie/gallery/first1.png"),



//         }
//     }

//     thumbnail(val, key) {
//         this, this.setState({
//             // modalImage: this.state.images[imageKey],
//             thumbnail: this.state.data[val]

//         })

//     }

//     onLoad = (data) => {

//         this.setState({
//             duration: data.duration,
//         })
//     }

//     onPress = (data) => {
//         this.setState({ currentTime: data.currentTime });
//     }
//     render() {
//         let data = this.state.data.map((val, key) => {
//             return <TouchableWithoutFeedback
//                 key={key}
//                 onPress={() => { this.thumbnail(val, key) }}
//             >


//             </TouchableWithoutFeedback>


//         })
//         return (
//             <View style={styles.container}>
//                 <VideoPlayer
//                     video={this.props.source}
//                     thumbnail={this.props.source[this.state.thumbnail]}

                 
//                     defaultMuted
                  
//                     // disableControlsAutoHide
                    
                  
//                     autoplay={true}
                  
//                     style={styles.imgSize}
                 
//                     resizeMode={"contain"}

//                 // fullScreenOnLongPress


//                 />



//             </View>


//         );
//     }
// }

// const styles = StyleSheet.flatten({
//     imgSize: {
//         flex: 1,
        
//         //  width: null,
//         //  height:null,
//         // // // // alignSelf: "stretch",
//         // alignSelf: "stretch"
//         // height: height / 4 - 12,

//     },
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: "#000"
//     },
//     fullScreen: {
//         postion: 'absolute',
//         top: 0,
//         left: 0,
//         bottom: 0,
//         right: 0

//     }




// });