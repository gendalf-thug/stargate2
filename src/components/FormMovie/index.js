import React, { useState } from 'react'
import { View, StyleSheet, Image, Text, Pressable, TextInput } from 'react-native'
import { launchImageLibrary } from 'react-native-image-picker'
import Icon from 'react-native-vector-icons/FontAwesome'
import { BLUE, SILVER, W } from '../../constants'
import { ButtonLong } from '../'

const testImg =
  'https://sun3.userapi.com/sun3-8/s/v1/if2/FtGyCTFZffNuLPvXkrwtYVmtb7xuJKBqXD36oE5-cf7BgTsBDz8xy4jO_nuvAz67Yf6rccie_Cub2mNoNa4zEseL.jpg?size=793x1080&quality=96&type=album'

const imgWidth = W / 1.5
const imgHeight = imgWidth * 1.5

export function FormMovie({ onSubmit }) {
  const [form, setForm] = useState({
    image: '',
    name: '',
    summary: ''
  })
  async function pickImage() {
    const result = await launchImageLibrary({
      mediaType: 'photo'
    })
    if (!result.didCancel) {
      setForm(pr => {
        return { ...pr, image: result.assets[0].uri }
      })
    } else {
      console.log(result.errorMessage)
    }
  }
  function changeName(text) {
    setForm(pr => {
      return { ...pr, name: text }
    })
  }
  function changeSummary(text) {
    setForm(pr => {
      return { ...pr, summary: text }
    })
  }
  const isValid = form.image !== '' && form.name !== '' && form.summary !== ''
  return (
    <>
      <TextInput onChangeText={changeName} style={inputS} placeholder={'Movie title'} />
      <View style={{ height: 30 }} />
      {form.image !== '' ? (
        <Pressable style={photoCont} onPress={pickImage}>
          <Image source={{ uri: form.image }} style={imgS} />
        </Pressable>
      ) : (
        <Pressable style={photoCont} onPress={pickImage}>
          <Icon name="file-photo-o" size={imgWidth - 70} color={SILVER} />
          <Text style={h1}>Select image</Text>
        </Pressable>
      )}
      <View style={{ height: 30 }} />
      <TextInput
        onChangeText={changeSummary}
        multiline
        style={multiInput}
        placeholder={'Movie description'}
      />
      <View style={{ height: 15 }} />

      {isValid && (
        <ButtonLong
          iconName="ios-checkmark-sharp"
          onPress={() => onSubmit(form)}
          title="Create"
        />
      )}
    </>
  )
}

const styles = StyleSheet.create({
  photoCont: {
    alignItems: 'center',
    justifyContent: 'center',
    width: imgWidth,
    height: imgHeight
  },
  imgS: {
    width: '100%',
    height: '100%',
    borderRadius: 10
  },
  h1: {
    fontSize: 19,
    fontFamily: 'AvenirNext-DemiBold',
    marginTop: 10,
    color: SILVER
  },
  inputS: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    fontSize: 22,
    fontFamily: 'AvenirNext-DemiBold',
    borderBottomColor: BLUE,
    borderBottomWidth: 1,
    width: imgWidth + 10
  },
  multiInput: {
    fontSize: 22,
    fontFamily: 'AvenirNext-DemiBold',
    borderColor: BLUE,
    borderWidth: 1,
    width: '80%',
    borderRadius: 10,
    height: 100,
    textAlignVertical: 'top'
  }
})
const { photoCont, imgS, h1, inputS, multiInput } = styles
