import { View, Text, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import { getDatabase, ref, child, get } from "firebase/database";
import { getAuth } from "firebase/auth";
import styles from "./employee-list-styles";

const EmployeeList = () => {
  const auth = getAuth();
  const db = ref(getDatabase());
  const [users, setUsers] = useState("");

  useEffect(() => {
    get(child(db, "stores/" + auth.currentUser.email.split("@")[0] + "/users"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setUsers(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [auth]);

  const employee = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.text}>Name: {item.username}</Text>
        <Text style={styles.text}>Role: {item.role}</Text>
        <Text style={styles.text}>Email: {item.email}</Text>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={Object.values(users)}
        renderItem={(employee)}
        keyExtractor={(item) => item.email}
      />
    </View>
  );
};

export default EmployeeList;
