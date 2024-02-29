import "./src/auth/config/firebase";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/home/home";
import { NavigationContainer } from "@react-navigation/native";
import Auth from "./src/auth/auth";

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Auth />
      </NavigationContainer>
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
