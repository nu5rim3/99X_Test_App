/* eslint-disable prettier/prettier */
import React from 'react';
import { TouchableOpacity, View, Text, Image, } from 'react-native';
import styles from "../../styles";
import NavigationService from "../../navigation/";
import { responsiveHeight as HP, responsiveWidth as WP, responsiveFontSize as RF } from "react-native-responsive-dimensions";

export default class Item extends React.PureComponent {

    render() {
        return (
            <TouchableOpacity
                testID={"preview_click_" + this.props.index}
                onPress={() => {
                    console.log("preview_click_" + this.props.index);
                    NavigationService.navigate('PreviewScreen', { imageUrl: this.props.url });
                }}
            >
                <View style={{ width: WP(42), height: HP(19), margin: WP(2), backgroundColor: 'powderblue' }} testID="detail_thumbnail_list_item">
                    <Image
                        style={[styles.imageFull]}
                        source={{ uri: this.props.thumbnailUrl }}
                    />
                </View>
            </TouchableOpacity>
        );
    }
}
