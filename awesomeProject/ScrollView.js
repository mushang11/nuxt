import React, {Component} from 'react';
import { ScrollView, Image, Text, View} from "react-native";
export default class ScrollComponent extends Component {
  render () {
    return (
      <ScrollView>
        <Text style={{fontSize: 96}}>Scroll me plz</Text>
      </ScrollView>
    )
  }
}
