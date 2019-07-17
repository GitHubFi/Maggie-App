import React, { Component } from 'react';
const { width, height, scale, fontScale } = Dimensions.get("window");
import { StyleSheet, View, WebView, Platform, ScrollView, Dimensions } from 'react-native';

export default class YoutubeVideos extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: "VIDEOS",

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
        headerRight: <View />;
    };

    constructor(props) {
        super(props);
        this.state = {

            List: [
                "https://www.youtube.com/embed/6tbaX1aZ8c4",
                "https://www.youtube.com/embed/PPPFJsmZemQ",
                "https://www.youtube.com/embed/3S_crWUPofY",
            ]

        }
    }

    render() {
        return (
            <ScrollView>


                <View style={{ flex: 1 }}>
                    {
                        this.state.List.map((value, key) => {
                            return <View key={key} style={{ height: 300 }}>
                                <WebView
                                    key={key}
                                    style={styles.WebViewContainer}
                                    javaScriptEnabled={true}
                                    domStorageEnabled={true}
                                    source={{ uri: value }}

                                />
                            </View>
                        })
                    }


                </View>
            </ScrollView>

        );
    }
}

const styles = StyleSheet.create({

    WebViewContainer: {
        
        marginTop: (Platform.OS == 'ios') ? 20 : 0,

    }

});