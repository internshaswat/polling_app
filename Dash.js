import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";
import { Card, ListItem, Button} from 'react-native-elements'

function Dash({navigation}) {
  return (
    <View style={styles.root}>
      <Card>
  <Card.Title>HELLO Dasboard</Card.Title>
  <Card.Divider/>
  <Card.Image source={{uri:'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'}}>
    <Text style={{marginBottom: 10}}>
      The idea with React Native Elements is more about component structure than actual design.
    </Text>
    <Button
      icon={<Icon name='spinner' color='#ffffff' style={{fontSize:30}} />}
      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
      title='VIEW NOW' />
  </Card.Image>
</Card>
<View style={{height:60}}></View>
<Button
      icon={<Icon name='eye' color='#ffffff' style={{fontSize:30}} />}
      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
      title='VIEW NOW' />
      <View style={{height:60}}></View>
      <Button
      icon={<Icon name='heart' color='#ffffff' style={{fontSize:30}} />}
      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
      title='VIEW NOW' />
    </View>
  );
}

const styles = StyleSheet.create({
  root:{

  }
});

export default Dash;