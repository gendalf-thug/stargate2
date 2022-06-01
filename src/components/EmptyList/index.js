import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export function EmptyList() {
  return (
    <View style={container}>
      <Icon name="meh-o" size={80} />
      <Text style={textS}>Nothing found</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textS: {
    fontSize: 24,
    fontFamily: 'AvenirNext-DemiBold'
  }
})
const { container, textS } = styles
