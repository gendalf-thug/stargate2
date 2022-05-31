import React, { useState } from 'react'
import { TouchableOpacity, TextInput, View, StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { BLUE, W } from '../../constants'

const Search = ({ iconRight, onSubmit, placeholder, value, onBlur, colorRight }) => {
  const [searchText, setSearchText] = useState('')
  const { top } = useSafeAreaInsets()
  function onChangeText(text) {
    setSearchText(text)
  }

  return (
    <View style={[container, { paddingTop: top }]}>
      <View style={sub}>
        <TextInput
          autoFocus
          style={inputStyle}
          onChangeText={onChangeText}
          placeholder={placeholder}
          onSubmitEditing={() => onSubmit(searchText)}
          defaultValue={value}
          onBlur={onBlur}
        />
        <TouchableOpacity onPress={() => onSubmit(searchText)} style={searchStyle}>
          <MaterialCommunityIcons
            name={iconRight}
            size={30}
            style={[{ color: colorRight }]}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  sub: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: W - 45
  },
  inputStyle: {
    fontSize: 18,
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 50,
    paddingLeft: 15,
    paddingVertical: 10
  },
  searchStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    height: 48,
    width: 48,
    borderRadius: 25,
    position: 'absolute',
    right: 0
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    paddingHorizontal: 20,
    backgroundColor: BLUE,
    height: 70,
    paddingVertical: 10
  }
})

const { container, sub, inputStyle, searchStyle } = styles

export { Search }
