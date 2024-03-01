import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./landing-screen-styles";
import Search from "../../../../components/search/search";
import InventoryList from "../../../../components/inventory-list/inventory-list";
import Cart from "../cart/cart";
import { ref, getDatabase, child, get } from "firebase/database";
import { getAuth } from "firebase/auth";

const Landing = () => {
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
        <Cart />
      </View>
    </View>
  );
};

export default Landing;
