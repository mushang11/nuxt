import React, {Component} from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';
export default class SectionListComponent extends Component {
  render () {
    return (
      <View style={styles.container}>
        <SectionList
          sections={[ {title: 'D', data: ['weiqiang']},
            {title: 'J', data: ['weiqiang32', 'james']},
            {title: 'weioqwiang', data: ['weiqiang32', 'james']},
          ]}
          renderItem = {({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader = {({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1)'
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
})
