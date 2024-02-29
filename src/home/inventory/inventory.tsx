import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import InventoryScreen from "./components/inventory-screen/inventory-screen";

const InventoryNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Inventory" component={InventoryScreen} />
    </Stack.Navigator>
  );
};

export default InventoryNavigator;
