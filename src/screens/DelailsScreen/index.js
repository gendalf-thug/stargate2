import React from 'react'
import { View, ScrollView, Text, StyleSheet } from 'react-native'
import { Header, ImageBigCard } from '../../components'
import { WHITE, BLUE, W } from '../../constants'

export function DelailsScreen({ navigation, route }) {
  const image = route.params.data.image.original
  const text = route.params.data.summary
  const summary = text ? text : 'No description'
  const name = route.params.data.name
  const { container, sub, h1, h2 } = styles
  return (
    <View style={container}>
      <Header
        title={name}
        onPress={() => navigation.goBack()}
        iconLeft="ios-arrow-back"
        headerColor={BLUE}
        colorLeft={WHITE}
      />
      <ScrollView>
        <View style={sub}>
          <ImageBigCard image={image} />
          <Text style={h1}>{name.toUpperCase()}</Text>
          <Text style={h2}>{summary.replace(/<[^>]+>/g, '')}</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: WHITE
  },
  sub: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 150,
    backgroundColor: WHITE
  },
  cover: {
    width: W,
    height: W * 1.5,
    borderRadius: 10
  },
  h1: {
    fontFamily: 'AvenirNext-DemiBold',
    fontSize: 30,
    padding: 15,
    textAlign: 'center'
  },
  h2: {
    fontFamily: 'AvenirNext-DemiBold',
    fontSize: 15,
    textAlign: 'center',
    color: 'grey',
    paddingHorizontal: 15
  }
})
