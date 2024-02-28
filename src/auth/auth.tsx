import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

export default function Authentication() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerTitle: 'Welcome to Sales' }}
      />
      <Stack.Screen name="Register" component={Register} options={{ headerTitle: 'Hey there' }} />
      <Stack.Screen
        name="Forgot"
        component={ForgotPassword}
        options={{ headerTitle: 'Hey there' }}
      />
    </Stack.Navigator>
  );
}
