import { View, Text } from "react-native";
import React from "react";
import styles from "./inventory-screen-styles";
import InventoryList from "../../../components/inventory-list/inventory-list";
import Search from "../../../components/search/search";

const InventoryScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <Search />
      </View>
      <View style={styles.inventoryList}>
        <InventoryList />
      </View>
    </View>
  );
};

export default InventoryScreen;
