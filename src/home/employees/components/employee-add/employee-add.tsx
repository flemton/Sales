import { View, Text, Alert } from "react-native";
import React, { useState, useRef } from "react";
import { getDatabase, ref, set } from "firebase/database";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { Form, FormItem } from "react-native-form-component";
import styles from "./employee-add-styles";

const EmployeeAdd = ({ navigation }) => {
  const auth = getAuth();
  const db = ref(getDatabase());
  const emailRef = useRef();
  const passwordRef = useRef();
  const nameRef = useRef();
  const roleRef = useRef();
  const [role, setRole] = useState("Employee");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { currentUser } = auth;
  const adminID = currentUser.email;

  function addUser() {
    createUserWithEmailAndPassword(auth, email, password).then((cred) => {
      const db = getDatabase();
      set(
        ref(
          db,
          "stores/" +
            adminID.split("@")[0].toLocaleLowerCase() +
            "/users/" +
            cred.user.uid
        ),
        {
          role: role,
          username: name,
          email: email,
          profile_picture: "https://example.com/profile.jpg",
        }
      ).finally(() => {
        auth.updateCurrentUser(currentUser);
        Alert.alert("Employee Created Successfully");
        navigation.navigate("EmployeesScreen");
      });
    });
  }

  return (
    <View style={styles.container}>
      <Text>Employee Add</Text>
      <Form
        onButtonPress={() => addUser()}
        style={styles.form}
        buttonStyle={styles.btn}
      >
        <FormItem
          style={styles.input}
          label="Name"
          labelStyle={styles.label}
          value={name}
          isRequired
          ref={nameRef}
          onChangeText={(input) => setName(input)}
          placeholder="Enter Employee Name"
        />
        <FormItem
          style={styles.input}
          label="Email"
          labelStyle={styles.label}
          value={email}
          autoCapitalize="none"
          isRequired
          ref={emailRef}
          onChangeText={(input) => setEmail(input)}
          placeholder="Enter Employee Email Address"
        />
        <FormItem
          label="Password"
          labelStyle={styles.label}
          style={styles.input}
          isRequired
          value={password}
          onChangeText={(input) => setPassword(input)}
          ref={passwordRef}
          placeholder="Password"
          secureTextEntry
          placeholderTextColor="lightgrey"
          showErrorIcon={false}
          underneathText="Password cannot be empty"
        />
      </Form>
    </View>
  );
};

export default EmployeeAdd;
