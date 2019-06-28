// import React, { Component } from 'react';
// import { Text, StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
// import Video from 'react-native-video';

// export default class Videos extends Component {
//     constructor(props) {
//         super(props);
//         // init state variables
//         this.state = {
//             repeat: false,
//             rate: 1,
//             volume: 1,
//             muted: false,
//             resizeMode: 'contain',
//             duration: 0.0,
//             currentTime: 0.0,
//             paused: true,
//             pickerValueHolder: '1.0',
//             pausedText: 'Play',
//             hideControls: false,
//         };
//     }
//     // load video event
//     onLoad = (data) => {
//         this.setState({ duration: data.duration });
//     };

//     // video is playing
//     onProgress = (data) => {
//         this.setState({ currentTime: data.currentTime });
//     };

//       // video ends
//   onEnd = () => {
//     this.setState({ paused: true, pausedText: 'Play'})
//     this.video.seek(0);
//   };

//   // on press video event
//   onPressVideo() {
//     // showing controls if they don't show
//     if(this.state.hideControls){
//       this.setState({hideControls: false});
//       this.timeoutHandle = setTimeout(()=>{
//         this.setState({hideControls: true});
//       }, 1000);
//     }
//   }



//     static navigationOptions = ({ navigation }) => {
//         return {
//             headerTitle: "Videos",

//             headerTitleStyle: {
//                 color: "#000",
//                 alignSelf: "center",
//                 textAlign: "center",
//                 flex: 1,
//                 marginLeft: -10
//             },
//             headerStyle: { backgroundColor: "#fff" }
//         };
//         headerRight: <View />;
//     };
//     render() {
//         return (
//             <View style={styles.container}>
//                 <TouchableWithoutFeedback style={styles.fullScreen}
//                   style={styles.fullScreen}
//                   onPress={() => this.onPressVideo()}>
//                     <Video
//                         ref={(ref: Video) => { this.video = ref }}
//                         source={{ uri: 'https://rawgit.com/uit2712/Mp3Container/master/tom_and_jerry_31.mp4' }}

//                         style={styles.fullScreen}
//                         rate={this.state.rate}
//                         repeat={this.state.repeat}
//                         volume={this.state.volume}
//                         muted={this.state.muted}
//                         resizeMode={this.state.resizeMode}
//                         paused={this.state.paused}
//                         onLoad={this.onLoad}
//                         onProgress={this.onProgress}
//                         onEnd={this.onEnd}

//                     />




//                 </TouchableWithoutFeedback>


//             </View>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: 'white',
//     },
//     fullScreen: {
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         bottom: 0,
//         right: 0,
//     },
//     playButton: {
//         position: 'absolute',
//         bottom: 20,
//         left: 20,
//         right: 20,
//     },
//     controls: {
//         backgroundColor: 'white',
//         opacity: 0.7,
//         borderRadius: 5,
//         position: 'absolute',
//         bottom: 20,
//         left: 20,
//         right: 20,
//     },
//     progress: {
//         flex: 1,
//         flexDirection: 'row',
//         borderRadius: 3,
//         overflow: 'hidden',
//     },
//     rateControl: {
//         flex: 1,
//         flexDirection: 'row',
//         justifyContent: 'center',
//     },
//     playControl: {
//         flex: 1,
//         flexDirection: 'row',
//         justifyContent: 'center',
//     },
//     resizeModeControl: {
//         flex: 1,
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// });

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback,
    Picker,
    ToastAndroid,
    ProgressBarAndroid,
    ScrollView,
    WebView,
    Dimensions
} from 'react-native';
import Video from 'react-native-video';
const { width, height, scale, fontScale } = Dimensions.get("window");


export default class Videos extends Component<Props> {
    constructor(props) {
        super(props);

        // init state variables
        this.state = {
            //   rate: 1,
            //   volume: 1,
            //   muted: false,
            //   resizeMode: 'contain',
            //   duration: 0.0,
            //   currentTime: 0.0,
            //   paused: true,
            //   pickerValueHolder: '1.0',
            //   pausedText: 'Play',
            //   hideControls: false,
        };

        // this.video = Video;
    }

    // load video event
    //   onLoad = (data) => {
    //     this.setState({ duration: data.duration });
    //   };

    // video is playing
    //   onProgress = (data) => {
    //     this.setState({ currentTime: data.currentTime });
    //   };

    // video ends
    //   onEnd = () => {
    //     this.setState({ paused: true, pausedText: 'Play'})
    //     this.video.seek(0);
    //   };

    //   getCurrentTimePercentage() {
    //     if (this.state.currentTime > 0) {
    //       return parseFloat(this.state.currentTime) / parseFloat(this.state.duration);
    //     }
    //     return 0;
    //   };

    //   onChangeRate(itemValue, itemIndex) {
    //     var rate = parseFloat(itemValue);
    //     this.setState({pickerValueHolder: itemValue, rate: rate});
    //   }

    // pressing on 'play' button
    //   onPressBtnPlay() {
    //     var pausedText = '';
    //     if(!this.state.paused){
    //       pausedText = 'Play';

    //       // always show controls
    //       if(this.timeoutHandle)
    //         clearTimeout(this.timeoutHandle);
    //     }
    //     else {
    //       pausedText = 'Pause';

    //       // hide controls after 5s
    //       this.timeoutHandle = setTimeout(()=>{
    //         this.setState({hideControls: true});
    //       }, 5000);
    //     }
    //     this.setState({ paused: !this.state.paused, pausedText: pausedText });
    //   }

    // on press video event
    //   onPressVideo() {
    //     // showing controls if they don't show
    //     if(this.state.hideControls){
    //       this.setState({hideControls: false});
    //       this.timeoutHandle = setTimeout(()=>{
    //         this.setState({hideControls: true});
    //       }, 8000);
    //     }
    //   }

    // parse seconds to time (hour:minute:second)
    //   parseSecToTime(sec) {
    //     var sec_num = parseInt(sec, 10); // don't forget the second param
    //     var hours   = Math.floor(sec_num / 3600);
    //     var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    //     var seconds = sec_num - (hours * 3600) - (minutes * 60);

    //     if (hours   < 10) {hours   = "0" + hours;}
    //     if (minutes < 10) {minutes = "0" + minutes;}
    //     if (seconds < 10) {seconds = "0" + seconds;}

    //     return hours + ':' + minutes + ':' + seconds;
    //   }

    static navigationOptions = ({ navigation }) => {
                return {
                    headerTitle: "Videos",
        
                    headerTitleStyle: {
                        color: "#000",
                        alignSelf: "center",
                        textAlign: "center",
                        flex: 1,
                        marginLeft: -30,
                        fontSize:width/23,
                        
                    },
                    headerStyle: { backgroundColor: "#fff" 
                    ,
                    fontFamily: "OpenSans-Semi"}
                };
                headerRight: <View />;
            };
    render() {
        // const flexCompleted = this.getCurrentTimePercentage() * 100;

        return (
               
           

                <WebView
                    // style={styles.WebViewContainer}
                    // style={{marginTop: 20}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    source={{ uri: 'https://www.facebook.com/hairdesignsbymaggie/videos/' }}
                />
                
               
               
          
          
            // <ScrollView>


            //   <View style={styles.container}>
            //     <TouchableWithoutFeedback
            //       style={styles.fullScreen}
            //       onPress={() => this.onPressVideo()}>
            //       <Video
            //         ref={(ref) => { this.video = ref }}
            //         /* For ExoPlayer */
            //         source={{ uri: 'https://youtu.be/v2Hz4f9JA6k?t=5.mp3' }} 
            //         // source={require('./videos/tom_and_jerry_31.mp4')}
            //         style={styles.fullScreen}
            //         rate={this.state.rate}
            //         paused={this.state.paused}
            //         volume={this.state.volume}
            //         muted={this.state.muted}
            //         resizeMode={this.state.resizeMode}
            //         onLoad={this.onLoad}
            //         onProgress={this.onProgress}
            //         onEnd={this.onEnd}
            //         onAudioBecomingNoisy={this.onAudioBecomingNoisy}
            //         onAudioFocusChanged={this.onAudioFocusChanged}
            //         repeat={false}
            //       />
            //     </TouchableWithoutFeedback>
            //     {
            //       !this.state.hideControls ?
            //       (
            //         <View style={styles.controls}>
            //           <View style={styles.generalControls}>
            //             <View style={styles.rateControl}>
            //               <Picker
            //                 style={{width: 110}}
            //                 selectedValue={this.state.pickerValueHolder}
            //                 onValueChange={(itemValue, itemIndex) => this.onChangeRate(itemValue, itemIndex)} >
            //                 <Picker.Item label="x1.5" value="1.5"/>
            //                 <Picker.Item label="x1.25" value="1.25"/>
            //                 <Picker.Item label="x1.0" value="1.0"/>
            //                 <Picker.Item label="x0.75" value="0.75"/>
            //                 <Picker.Item label="x0.5" value="0.5"/>
            //               </Picker>
            //             </View>
            //             <View style={styles.playControl}>
            //               <Text onPress={() => this.onPressBtnPlay()}>{this.state.pausedText}</Text>
            //             </View>
            //             <View style={styles.resizeModeControl}>
            //               <Picker
            //                 style={{width: 150}}
            //                 selectedValue={this.state.resizeMode}
            //                 onValueChange={(itemValue, itemIndex) => this.setState({resizeMode: itemValue})} >
            //                 <Picker.Item label="none" value="none"/>
            //                 <Picker.Item label="cover" value="cover"/>
            //                 <Picker.Item label="stretch" value="stretch"/>
            //                 <Picker.Item label="contain" value="contain"/>
            //               </Picker>
            //             </View>
            //           </View>

            //           <View style={styles.trackingControls}>
            //             <ProgressBarAndroid
            //               style={styles.progress}
            //               styleAttr="Horizontal"
            //               indeterminate={false}
            //               progress={this.getCurrentTimePercentage()}
            //             />
            //             <Text>{this.parseSecToTime(parseInt(this.state.currentTime))}/{this.parseSecToTime(parseInt(this.state.duration))}</Text>
            //           </View>
            //         </View>
            //       ) : (null)
            //     }


            //   </View>


        );
    }
}


const styles = StyleSheet.create({
 
WebViewContainer: {
 
    marginTop: (Platform.OS == 'ios') ? 20 : 0,
    height:"100%"
    
 
  }
  
});
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'black',
//   },
//   fullScreen: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     bottom: 0,
//     right: 0,
//   },
//   playButton: {
//     position: 'absolute',
//     bottom: 20,
//     left: 20,
//     right: 20,
//   },
//   controls: {
//     backgroundColor: 'white',
//     opacity: 0.7,
//     borderRadius: 5,
//     position: 'absolute',
//     bottom: 20,
//     left: 20,
//     right: 20,
//   },
//   progress: {
//     flex: 1,
//     flexDirection: 'row',
//     borderRadius: 3,
//     overflow: 'hidden',
//   },
//   rateControl: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'center',
//   },
//   playControl: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'center',
//   },
//   resizeModeControl: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });