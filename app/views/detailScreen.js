/* eslint-disable prettier/prettier */
// detail screen
import React, { Component } from "react";
import { View, Text, TouchableOpacity, FlatList, Image, ActivityIndicator, Button } from "react-native";
import styles from "../styles";
import NavigationService from "../navigation";
import { responsiveHeight as HP, responsiveWidth as WP, responsiveFontSize as RF } from "react-native-responsive-dimensions";
import Item from './components/ListItem';

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as Actions from "../actions"; //Import your actions

class DetailScreen extends Component {
    static navigationOptions = {
        title: 'Details',
        headerStyle: [styles.BGP],
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    constructor(props) {
        super(props);
    }

    getThumImage(id) {
        this.props.getImageDetail(id);
    }

    render() {
        const { navigation } = this.props;
        const postData = navigation.getParam('postData');

        const { loading, data } = this.props;

        return (
            <View style={[styles.containerWithMargin]} testID="detail_view">
                <Text style={[styles.centerText, styles.H1, { marginTop: WP(1) }]} testID='detail_title'>{postData.title}</Text>

                <View style={[styles.card]}>
                    <Text style={[styles.centerText, styles.H2]} testID="detail_body">{postData.body}</Text>
                    <Text style={[styles.centerText, styles.H3, { marginTop: WP(1) }]} testID="detail_user">by {postData.name}</Text>
                </View>

                <Button
                    style={{marginHorizontal: 10,}}
                    testID="get-image-click"
                    onPress={() => {
                        this.getThumImage(postData.userId);
                    }}
                    color="#f47e47"
                    title="Load Images"
                />

                <View style={{ flex: 1, flexDirection: 'row', marginTop: WP(3) }} testID="preview-image-view">
                    <FlatList
                        data={data}
                        horizontal={false}
                        numColumns={2}
                        initialNumToRender={5}
                        maxToRenderPerBatch={10}
                        windowSize={10}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item, index }) => (
                            <Item id={item.id} url={item.url} thumbnailUrl={item.thumbnailUrl} index={index} />
                        )}
                    />
                </View>
            </View>
        );
    }
}

// The function takes data from the app current state,
// and insert/links it into the props of our component.
// This function makes Redux know that this component needs to be passed a piece of the state
function mapStateToProps(state, props) {
    return {
        loading: state.imageDataReducer.loading,
        data: state.imageDataReducer.data,
    };
}

// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions file (action/home.js)
function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(DetailScreen);