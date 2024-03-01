import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import InventoryScreen from "./components/inventory-screen/inventory-screen";
import InventoryAdd from "./components/inventory-add/inventory-add";

const InventoryNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Inventory" component={InventoryScreen} />
      <Stack.Screen name="InventoryAdd" component={InventoryAdd} />
    </Stack.Navigator>
  );
};

export default InventoryNavigator;
