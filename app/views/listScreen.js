/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import { View, Text, ActivityIndicator, FlatList, TouchableOpacity } from "react-native";
import styles from "../styles";
import NavigationService from "../navigation/";


import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as Actions from "../actions"; //Import your actions

class ListScreen extends Component {
    static navigationOptions = {
        title: '99X',
        headerStyle: [styles.BGP],
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    state = {
        isFetching: false,
    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.getPosts();
    }

    getPosts() {
        this.setState({ isFetching: false });
        this.props.getPosts();
    }

    onRefresh() {
        this.setState({ isFetching: true }, function () {
            this.getPosts();
        });
    }

    renderListItem = ({ item, index }) => {
        return (
            <TouchableOpacity
                testID={"list_item_click_" + index}
                onPress={() => {
                    NavigationService.navigate('DetailScreen', { postData: item });
                }}
            >
                <View style={[styles.listItem]} testID="list_item_view">
                    <Text style={[styles.H2]}>{item.name}</Text>
                    <Text style={[styles.GTEXT]}>{item.title}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    ListEmptyComponent = () => {
        return (
            <View style={[styles.centerView]} testID="list_empty_view">
                <Text style={[styles.GTEXT, styles.centerText]}>No Comments found.</Text>
                <TouchableOpacity
                     testID="list_empty_reload_click"
                    onPress={() => this.getPosts()}
                >
                    <Text>Try again.</Text>
                </TouchableOpacity>
            </View>
        )
    }

    render() {

        const { loading, data } = this.props;

        if (loading) {
            return (
                <View testID="list_loading" style={[styles.BGOW, styles.container, styles.centerView]}>
                    <ActivityIndicator animating={true} size="large" color="#f47e47" />
                </View>
            );
        } else {
            return (
                <View testID="list_view" style={[styles.BGOW, styles.container]}>
                    <FlatList
                        data={data}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={this.renderListItem}
                        ListEmptyComponent={this.ListEmptyComponent}
                        onRefresh={() => this.onRefresh()}
                        refreshing={this.state.isFetching}
                        extraData={this.props}
                    />
                </View>
            );
        }

    }
}

// The function takes data from the app current state,
// and insert/links it into the props of our component.
// This function makes Redux know that this component needs to be passed a piece of the state
function mapStateToProps(state, props) {
    return {
        loading: state.postsDataReducer.loading,
        data: state.postsDataReducer.data,
    };
}

// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions file (action/home.js)
function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(ListScreen);