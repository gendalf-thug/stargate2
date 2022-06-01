import React from 'react'
import { View, StyleSheet } from 'react-native'
import Spin from 'react-native-spinkit'
import { BLUE } from '../../constants'

export function Loading() {
  return (
    <View style={container}>
      <Spin color={BLUE} size={110} type="CircleFlip" />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  }
})
const { container } = styles
