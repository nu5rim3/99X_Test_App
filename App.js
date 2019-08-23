/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "./app/stores"; //Import the store
import Navigation from "./app/views/index";

export default class App extends React.Component {
  renderLoading = () => (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#f47e47" />
    </View>
  );

  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={this.renderLoading()}>
          <Navigation />
        </PersistGate>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
console.disableYellowBox = true;
