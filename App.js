import "./src/auth/config/firebase";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/home/home";
import { NavigationContainer } from "@react-navigation/native";
import Auth from "./src/auth/auth";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

export default function App() {
  const [admin, setAdmin] = useState(false);
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setAdmin(user.email);
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      <NavigationContainer>{admin ? <Home /> : <Auth />}</NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
