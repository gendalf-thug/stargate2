import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'

export function Layout({ children }) {
  const { container } = styles
  return <View style={container}>{children}</View>
}
const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexShrink: 2,
    justifyContent: 'space-around',
    padding: 10,
    marginBottom: 150
  }
})
