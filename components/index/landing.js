import React, {Component} from 'react';
import {AppRegistry, View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default class Loading extends Component{
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.main_wrapper}>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_wrapper: {
    flex: 1,
    backgroundColor: "rgb(251, 251, 255)",
    justifyContent: "center",
    alignItems: "center"
  }
});


AppRegistry.registerComponent('Landing', () => Landing);
