import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Landing from './components/landing-screen/landing-screen'

const LandingNavigator = () => {
  const Stack = createNativeStackNavigator()

  return (
    <Stack.Navigator>
      <Stack.Screen name="Landing" component={Landing} />
    </Stack.Navigator>
  )
}

export default LandingNavigator