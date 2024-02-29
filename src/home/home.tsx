import { Feather } from "@expo/vector-icons";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import styles from "./home-styles";
import { fontScale } from "../components/scale";
import LandingNavigator from "./landing/landing";
import EmployeesNavigator from "./employees/employees";
import Inventory from "./inventory/inventory";

export default function Home() {
  const BottomTab = createBottomTabNavigator();
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: styles.tabBarStyle,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={LandingNavigator}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Feather name="home" size={fontScale(24)} color="black" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Invetory"
        component={Inventory}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Feather name="shopping-cart" size={fontScale(24)} color="black" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Employees"
        component={EmployeesNavigator}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Feather name="user" size={fontScale(24)} color="black" />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
