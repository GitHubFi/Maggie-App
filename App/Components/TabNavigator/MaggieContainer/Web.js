import React, { Component } from 'react';
import { Text, StyleSheet, View, WebView, ScrollView, Image, Dimensions } from 'react-native';
const { width, height, scale, fontScale } = Dimensions.get("window");

export default class Web extends Component {
    render() {
        return (

            <View style={{}}>



                <WebView
                    style={{ flex: 1, backgroundColor: "#000", width:width/1.1, height: height }}
                    source={{ html: "  <p style='text-align: justify; color:white; ' > Maggie Torbeih, an elegant and chic hairstylist who has an all-embracing experience in all aspects of hairstyling. I exhibits a modern renaissance to the world of hairstyling with the trendiest and most classy vibes. Me and my team render the most professionally pleasing to the eye service and transform the personality of clients entirely. Expert in delivering the most stylish service customized absolutely to your taste and requirement. Illustrious for delivering an electric mix of classic and contemporary styling, patient listener and values the opinions of my clients, extremely creative and a visionary artist, incorporates visual inventiveness in my work. I am honest in my opinion and never misguides the clients and works in their best interest. My technical skills and manual dexterity is quintessential of a hardcore professional, quite adaptable and always ready to absorb up to the minute trends and techniques.Join me and my team to get into the whimsical world of hairstyling and get the most unique and chic hairdo. I am is a pro at doing bridal, formal, semi-formal and casual hairstyling and transforms the texture and outlook of hair, I do special occasion’s hair styles, Wedding, graduations party, and casual hairdos with perfection.</p>" }}

                >

                </WebView>

            </View>

        );
    }
}

const styles = StyleSheet.flatten({});