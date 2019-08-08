// image perview screen
/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import { View, Image } from "react-native";
import styles from "../styles";
import { responsiveHeight as HP, responsiveWidth as WP, responsiveFontSize as RF } from "react-native-responsive-dimensions";

export default class PreviewScreen extends Component {
    static navigationOptions = {
        title: 'Preview',
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
        const { navigation } = this.props;
        const imageUrl = navigation.getParam('imageUrl');
        return (
            <View style={[styles.containerWithMargin]} testID="preview_view">
                <View style={{ width: '100%', height: HP(45)}}
                >
                    <Image
                        testID="preview_image"
                        style={[styles.imageFull]}
                        source={{ uri: imageUrl }}
                    />
                </View>
            </View>
        )
    }
}