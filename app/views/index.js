/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import NavigationService from "../navigation/";
const AppNavigator = createStackNavigator(
    {
        ListScreen: { getScreen: () => require("./listScreen.js").default },
        DetailScreen: { getScreen: () => require("./detailScreen.js").default },
        PreviewScreen: { getScreen: () => require("./previewScreen.js").default }
    },
    {
        initialRouteName: "ListScreen"
    },
    {
        header: null
    }
);

const AppContainer = createAppContainer(AppNavigator);

export default class Navigation extends Component {
    render() {
        return (
            <AppContainer
                ref={navigatorRef => {
                    NavigationService.setTopLevelNavigator(navigatorRef);
                }}
            />
        );
    }
}
