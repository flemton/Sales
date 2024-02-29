import { View, Text, TouchableHighlight, Alert } from "react-native";
import React, { useRef, useState } from "react";
import styles from "./register-styles";
import { Form, FormItem } from "react-native-form-component";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const Register = ({ navigation }) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const storeRef = useRef();
  const [store, setStore] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const auth = getAuth();

  async function signUp() {
    if (password !== confirmPassword) {
      Alert.alert("Passwords do not match");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("User created");
    } catch (error) {
      Alert.alert(error.message);
    }
  }

  return (
    <View style={styles.container}>
      <Form
        onButtonPress={() => signUp()}
        style={styles.form}
        buttonStyle={styles.btn}
      >
        <FormItem
          style={styles.input}
          label="Store Name"
          labelStyle={styles.label}
          value={store}
          isRequired
          ref={storeRef}
          onChangeText={(input) => setStore(input)}
          placeholder="Enter the store name"
        />
        <FormItem
          style={styles.input}
          label="Email"
          labelStyle={styles.label}
          value={email}
          isRequired
          ref={emailRef}
          onChangeText={(input) => setEmail(input)}
          placeholder="Enter your email address"
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
        <FormItem
          label="Confirm Password"
          labelStyle={styles.label}
          style={styles.input}
          isRequired
          value={confirmPassword}
          onChangeText={(input) => setConfirmPassword(input)}
          ref={confirmPasswordRef}
          placeholder="Confirm Password"
          secureTextEntry
          placeholderTextColor="lightgrey"
          showErrorIcon={false}
          underneathText="Confirm Password cannot be empty"
        />
      </Form>
    </View>
  );
};

export default Register;
