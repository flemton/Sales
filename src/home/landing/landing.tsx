import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Landing from "./components/landing-screen/landing-screen";
import { getDatabase, ref, child, get } from "firebase/database";
import { getAuth } from "firebase/auth";

const LandingNavigator = () => {
  const auth = getAuth();
  const Stack = createNativeStackNavigator();
  const [storeName, setStoreName] = useState("Loading Store Name");
  const db = ref(getDatabase());
  get(child(db,"stores/" + auth.currentUser.email.split('@')[0] + "/name"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        setStoreName(snapshot.val());
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });

  return (
    <Stack.Navigator>
      <Stack.Screen name={storeName} component={Landing} />
    </Stack.Navigator>
  );
};

export default LandingNavigator;
