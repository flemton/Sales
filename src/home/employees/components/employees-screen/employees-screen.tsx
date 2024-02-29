import { View, Text, TouchableHighlight } from "react-native";
import React from "react";
import { getAuth, signOut } from "firebase/auth";
import styles from "./employees-screen-styles";
import { Button } from "react-native-paper";
import EmployeeList from "../employee-list/employee-list";

const EmployeesScreen = ({ navigation }) => {
  const auth = getAuth();
  return (
    <View style={styles.container}>
      <EmployeeList />
      <View style={styles.btnContainer}>
        <Button
          mode="outlined"
          onPress={() => signOut(auth)}
          children={"Logout"}
        ></Button>
        <Button
          mode="contained"
          onPress={() => navigation.navigate("AddEmployee")}
          children={"Add Employee"}
        ></Button>
      </View>
    </View>
  );
};

export default EmployeesScreen;
