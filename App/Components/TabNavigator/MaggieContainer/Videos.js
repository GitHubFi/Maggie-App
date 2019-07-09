
// import React, { Component } from 'react';
// import {
//     Platform,
//     StyleSheet,
//     Text,
//     View,
//     TouchableWithoutFeedback,
//     Picker,
//     ToastAndroid,
//     ProgressBarAndroid,
//     ScrollView,
//     WebView,
//     Dimensions,
//     Modal,

// } from 'react-native';

// // import VideoPlayer from 'react-native-video-controls'
// const { width, height, scale, fontScale } = Dimensions.get("window");
// // import VideoPlayer from 'react-native-video-controls';
// import Video from 'react-native-video';
// import VideoList from './VideoList'


// export default class Videos extends Component<Props> {
//     constructor(props) {
//         super(props);

//         // init state variables
//         this.state = {
//             images: [
//                 require("../../../../assets/video/video.mp4"),
//                 require("../../../../assets/video/video3.mp4"),
//                 require("../../../../assets/video/video2.mp4"),

//             ],
//             modalVisible: false,
//             modalImage: require("../../../../assets/video/video.mp4"),
//         };

//     }


//     setModalVisible(visible, imageKey) {
//         this, this.setState({
//             modalImage: this.state.images[imageKey]
//         })
//         this, this.setState({
//             modalVisible: visible
//         })
//     }

//     getImage() {
//         return this.state.modalImage;
//     }

//     static navigationOptions = ({ navigation }) => {
//         return {
//             headerTitle: "Videos",

//             headerTitleStyle: {
//                 color: "#000",
//                 alignSelf: "center",
//                 textAlign: "center",
//                 flex: 1,
//                 marginLeft: -30,
//                 fontSize: width / 23,

//             },
//             headerStyle: {
//                 backgroundColor: "#fff"
//                 ,
//                 fontFamily: "OpenSans-Semi"
//             }
//         };
//         headerRight: <View />;
//     };


//     render() {
//         let images = this.state.images.map((val, key) => {
//             return
//             //  <TouchableWithoutFeedback
//             //     key={key}
//             //     onPress={() => { this.setModalVisible(true, key) }}
//             // >
//             //     <View style={styles.imagewrap}>
//             //         <VideoList source={val} />
//             //     </View>
//             // </TouchableWithoutFeedback>


//         })
//         return (

//             <ScrollView>

//                 {/* <View style={styles.container}> */}

//                     {/* <Modal style={styles.modal} animationType={'fade'}
//                         transparent={true} visible={this.state.modalVisible}
//                         onRequestClose={() => { }}>

//                         <View style={styles.modal}>
//                             <Text style={styles.text}
//                                 onPress={() => { this.setModalVisible(false) }}
//                             >
//                                 Close
//                                  </Text>
//                             <VideoList source={this.state.modalImage} 
//                              />
//                         </View>

//                     </Modal> */}
//                     {this.state.images.map((val, key) => {
//                         return <View
//                             style={{ flex: 1 }}
//                             key={key}
//                         >
//                             {/* <TouchableWithoutFeedback> */}


//                             <Video 

//                                 source={val }
//                                 style={styles.imgSize}
//                                 ref={(ref) => {
//                                     this.player = ref
//                                   }}
//                             // onEnterFullscreen={true}
//                             // showOnStart={false}
//                             // disableBack={true}
//                             />
//                              {/* </TouchableWithoutFeedback> */}
//                         </View>
//                     })}
//                     {/* {images} */}
//                 {/* </View> */}
//             </ScrollView>
//         );
//     }
// }


// const styles = StyleSheet.flatten({

//     container: {
//         flex: 1,
//         flexDirection: 'row',
//         flexWrap: 'wrap',
//         backgroundColor: "#000",
//     },
//     imagewrap: {
//         margin: 2,
//         padding: 2,
//         height: height / 4 - 12,
//         width: width / 3 - 4,
//         backgroundColor: "#000"
//     },
//     modal: {
//         flex: 1,
//         padding: 20,
//         backgroundColor: '#000',
//         height: height / 4 - 12,
//         width: width



//     },
//     text: {
//         color: "#fff",
//         fontSize: 25,
//         fontWeight: "300",
//     },
//     imgSize: {
//         flex: 1,
//         width: null,
//         // // // alignSelf: "stretch",
//         // alignSelf: "stretch"
//     },


// });
import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView, Dimensions, TouchableWithoutFeedback, FlatList, Image, Modal } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body, Icon, ListItem } from 'native-base';
import firebase from "react-native-firebase";
import List from './List'
// import ImageElement from './ImageElement';

import VideoList from './VideoList'
const { width, height, scale, fontScale } = Dimensions.get("window");




export default class Videos extends Component {
    constructor(props) {
        super(props);

        // init state variables
        this.state = {
            images: [
                require("../../../../assets/video/video.mp4"),
                require("../../../../assets/video/video2.mp4"),
                require("../../../../assets/video/video3.mp4"),
                require("../../../../assets/video/video4.mp4"),
                require("../../../../assets/video/video5.mp4"),
                require("../../../../assets/video/video6.mp4"),
                require("../../../../assets/video/video7.mp4"),
                require("../../../../assets/video/video8.mp4"),
                require("../../../../assets/video/video9.mp4"),
                require("../../../../assets/video/video10.mp4"),
                require("../../../../assets/video/video11.mp4"),
                require("../../../../assets/video/video12.mp4"),
                require("../../../../assets/video/video13.mp4"),
                require("../../../../assets/video/video14.mp4"),
                require("../../../../assets/video/video15.mp4"),


            ],
            modalVisible: false,
            modalImage: require("../../../../assets/video/video.mp4"),
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
                    <VideoList source={val} />
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
                            <VideoList source={this.state.modalImage} />
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
        // padding: 2,
        height: height / 4 - 12,
        width: width /  2- 4,
        backgroundColor: "#000"
    },
    modal: {
        flex: 1,
        padding: 20,
        backgroundColor: '#000',
        // height: height / 4 - 12,
        // width: width



    },
    text: {
        color: "#fff",
        fontSize: 25,
        fontWeight: "300",
    }


});
