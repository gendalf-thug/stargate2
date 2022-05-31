import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { BLUE, W } from '../../constants'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const Header = ({
  iconLeft,
  iconRight,
  colorLeft,
  colorRight,
  title,
  onPress,
  onPressRight
}) => {
  const { top } = useSafeAreaInsets()
  return (
    <View style={[container, { paddingTop: top }]}>
      {iconLeft && (
        <TouchableOpacity style={leftIconStyle} onPress={onPress}>
          <Ionicons name={iconLeft} size={35} color={colorLeft} />
        </TouchableOpacity>
      )}
      <Text numberOfLines={1} ellipsizeMode="tail" style={textStyle}>
        {title}
      </Text>
      {iconRight && (
        <TouchableOpacity onPress={onPressRight}>
          <MaterialCommunityIcons
            name={iconRight}
            size={30}
            style={{ color: colorRight }}
          />
        </TouchableOpacity>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    paddingHorizontal: 20,
    backgroundColor: BLUE,
    height: 70,
    paddingVertical: 10
  },
  textStyle: {
    color: '#fff',
    fontSize: 28,
    width: W - 75,
    fontFamily: 'AvenirNext-DemiBold'
  },
  leftIconStyle: {
    marginRight: 6,
    marginTop: 3
  }
})

const { container, textStyle, leftIconStyle } = styles

export { Header }
