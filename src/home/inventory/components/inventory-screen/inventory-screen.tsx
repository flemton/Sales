import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./inventory-screen-styles";
import InventoryList from "../../../../components/inventory-list/inventory-list";
import Search from "../../../../components/search/search";
import { Button } from "react-native-paper";
import { getAuth } from "firebase/auth";
import { ref, getDatabase, child, get } from "firebase/database";

const InventoryScreen = ({ navigation }) => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const [inventoryData, setInventoryData] = useState();
  const auth = getAuth();
  const db = ref(getDatabase());
  useEffect(() => {
    get(
      child(db, "stores/" + auth.currentUser.email.split("@")[0] + "/inventory")
    )
      .then((snapshot) => {
        if (snapshot.exists()) {
          setInventoryData(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [db]);

  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <Search
          clicked={clicked}
          searchPhrase={searchPhrase}
          setSearchPhrase={setSearchPhrase}
          setClicked={setClicked}
        />
      </View>
      <View style={styles.inventoryList}>
        <InventoryList
          searchPhrase={searchPhrase}
          setClicked={setClicked}
          data={inventoryData ? Object.values(inventoryData) : []}
        />
        <Button
          mode="contained"
          onPress={() => navigation.navigate("InventoryAdd")}
          children={"Add Item"}
        ></Button>
      </View>
    </View>
  );
};

export default InventoryScreen;
