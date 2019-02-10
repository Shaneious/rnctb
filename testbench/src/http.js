import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class HelloWorldApp extends Component {
  sendUserInformation() {
    fetch('http://35.183.241.127/tester.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: 'some username here yo',
        password: 'some password here yo',
      }),
    })
    .then((response) => response.json())
    .then((responseJson) => {
      alert(JSON.stringify(responseJson));
    })
    .catch(function(error) { alert(error) });
  }

  render() {
    return (
      <View style={{flex:1, justifyContent: 'flex-start'}}>
        <Text>Sending to IP: 35.183.241.127</Text>
        <Button
          onPress={this.sendUserInformation.bind(this)}
          title="Send User Information"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}
