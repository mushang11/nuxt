import React, { Component, PropTypes } from 'react';
import { NavigatorIOS, Text, TouchableHighlight, View } from 'react-native';
export default class NavigatorIOSApp extends Component {
  render () {
    return (
      <NavigatorIOS initalRoute={{
        component: MyScrene,
        title: 'weiqiang'
      }}
      style={{flex: 1}}
      />
    )
  }
}
class MyScrene extends Component {
  static propTypes = {
    title: PropTypes.String.isRequired,
    navigator: PropTypes.Object.isRequired
  }
  constructor (props, context) {
    super(props, context)
    this._onForward = this._onForward.bind(this)
  }
  _onForward () {
    this.props.navigator.push({
      title: 'Scene '
    })
  }
  render () {
    return (
      <View>
        <Text>Current scene: {this.props.title}</Text>
        <TouchableHighlight onPress={this._onForward}>
          <Text>Tap me to load the next scene</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
