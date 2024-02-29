import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Login from "./login/login";
import LandingNavigator from "../home/landing/landing";
import Register from "./register/register";

export default function Auth() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: true, headerTitle: "Welcome to Sales Login" }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerShown: true,
          headerTitle: "Register Your Store",
          headerBackVisible: true,
          headerBackTitle: "Back",
        }}
      />
      <Stack.Screen
        name="Home"
        component={LandingNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
