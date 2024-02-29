import { View, Text, TouchableHighlight, Alert } from "react-native";
import React, { useRef, useState } from "react";
import styles from "./login-styles";
import { Form, FormItem } from "react-native-form-component";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";

const Login = ({ navigation }) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const storeRef = useRef();
  const [store, setStore] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();

  function login() {
    signInWithEmailAndPassword(auth, email, password)
      .then((cred) => {
        console.log("Logged in", cred);
      })
      .catch((error) => {
        Alert.alert(error.message);
      });
  }

  return (
    <View style={styles.container}>
      <Form
        onButtonPress={() => login()}
        style={styles.form}
        buttonStyle={styles.btn}
      >
        <FormItem
          style={styles.input}
          label="Store UserName"
          labelStyle={styles.label}
          value={store}
          isRequired
          ref={storeRef}
          onChangeText={(input) => setStore(input)}
          placeholder="Enter the store username"
        />
        <FormItem
          style={styles.input}
          label="Email"
          labelStyle={styles.label}
          value={email}
          isRequired
          autoCapitalize="none"
          autoComplete="email"
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
      </Form>
      <View style={styles.btnContainer}>
        <TouchableHighlight
          onPress={() => navigation.navigate("Register")}
          style={styles.btn}
        >
          <Text style={styles.btnText}>Admin Register</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default Login;
