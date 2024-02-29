import { View, Text, TouchableHighlight } from "react-native";
import React from "react";
import { getAuth, signOut } from "firebase/auth";
import styles from "./employees-styles";

const Employees = () => {
  const auth = getAuth();
  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={() => signOut(auth)}>
        <Text>Logout</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Employees;
