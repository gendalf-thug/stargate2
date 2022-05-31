import React from 'react'
import { Image, View, Text, StyleSheet, Pressable, Alert } from 'react-native'
import { useDispatch } from 'react-redux'
import { W } from '../../constants'
import { removeById } from '../../store/movieSlice'

const width = W / 2 - 20
const marginHorizontal = 5

const ImageCard = ({ data, onPress }) => {
  const { container, sub, h1, cover } = styles
  const { image, name, id } = data
  const dispatch = useDispatch()
  function openAlert() {
    function del() {
      dispatch(removeById(id))
    }
    Alert.alert(
      'Confirm action',
      'Are you sure you want to delete this movie?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        { text: 'Yes', onPress: del }
      ],
      { cancelable: true }
    )
  }
  return (
    <Pressable onLongPress={openAlert} onPress={onPress} style={container}>
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
