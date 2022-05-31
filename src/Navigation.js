import React from 'react'
import { StatusBar } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { HomeScreen, DelailsScreen, AddMovieScreen } from './screens'
import { BLUE } from './constants'

const Stack = createNativeStackNavigator()

export default function Navigation() {
  return (
    <NavigationContainer>
      <StatusBar barStyle={'light-content'} backgroundColor={BLUE} />
      <Stack.Navigator
        initialRouteName="HOME_SCREEN"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="HOME_SCREEN" component={HomeScreen} />
        <Stack.Screen
          name="DETAIL_SCREEN"
          options={{ animation: 'slide_from_right' }}
          component={DelailsScreen}
        />
        <Stack.Screen
          name="ADD_MOVIE_SCREEN"
          options={{ animation: 'flip' }}
          component={AddMovieScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
