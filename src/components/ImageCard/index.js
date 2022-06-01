import React from 'react'
import { Image, View, Text, StyleSheet, Pressable } from 'react-native'
import { W } from '../../constants'

const width = W / 2 - 20
const marginHorizontal = 5

const ImageCard = ({ data, onPress }) => {
  const { container, sub, h1, cover } = styles
  const { name } = data.show
  const image = data.show.image.original
  return (
    <Pressable onPress={onPress} style={container}>
      <View style={sub}>
        <Image style={cover} source={{ uri: image }} />
      </View>
      <Text style={h1}>{name.toUpperCase()}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    width,
    marginHorizontal,
    marginBottom: 10
  },
  sub: {
    shadowColor: '#000',
    borderRadius: 10,
    backgroundColor: 'white',
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4
  },
  h1: {
    paddingTop: 10,
    fontFamily: 'AvenirNext-DemiBold',
    fontSize: 18,
    alignSelf: 'center',
    textAlign: 'center'
  },
  cover: {
    width: width,
    height: W * 0.63,
    borderRadius: 10
  }
})

export { ImageCard }
