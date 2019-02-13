import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Button } from 'react-native';
import Bluetooth from './src/bluetooth_old'
import Http from './src/http'
import QRscanner from './src/qrscanner'

const width = Dimensions.get('window').width; //full width
const height = Dimensions.get('window').height; //full height

const AppNavigator = createStackNavigator(
    {
        Bluetooth: Bluetooth,
        Http: Http,
        QRscanner: QRscanner
    },
    {
      initialRouteName: "Bluetooth"
    }
);

const AppContainer = createAppContainer(AppNavigator);

export default class Hello extends React.Component {
  render() {
    return <AppContainer />;
    // return (
    //   <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    //     <Text>Hello world Internal!</Text>
    //   </View>
    // )
  }
}

// import React, { Component } from 'react';
// import { Text, View } from 'react-native';
//
// export default class HelloWorldApp extends Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//         <Text>Hello world Internal!</Text>
//       </View>
//     );
//   }
// }
