import { View, Text, Alert } from "react-native";
import React from "react";
import styles from "./cart-styles";
import { Button } from "react-native-paper";

const Cart = () => {
  return <Button mode="contained" children="Checkout" style={styles.cart} onPress={() => Alert.alert("Coming soon!")}/>;
};

export default Cart;
