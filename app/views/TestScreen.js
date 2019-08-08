// image perview screen
/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import { View, Text } from "react-native";
import styles from "../styles";
import { responsiveHeight as HP, responsiveWidth as WP, responsiveFontSize as RF } from "react-native-responsive-dimensions";

export default class TestScreen extends Component {
    static navigationOptions = {
        title: 'Test',
        headerStyle: [styles.BGP],
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={[styles.containerWithMargin]} testID="preview_view">
                <View style={{ width: '100%', height: HP(45)}}
                >
                    <Text>Hello</Text>
                </View>
            </View>
        )
    }
}