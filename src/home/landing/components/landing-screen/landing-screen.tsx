import { View, Text } from "react-native";
import React from "react";
import styles from "./landing-screen-styles";
import Search from "../../../../components/search/search";
import InventoryList from "../../../../components/inventory-list/inventory-list";
import Cart from "../cart/cart";

const Landing = () => {
  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <Search />
      </View>
      <View style={styles.inventoryList}>
        <InventoryList />
        <Cart />
      </View>
    </View>
  );
};

export default Landing;
