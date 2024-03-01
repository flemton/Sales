import { View, Text, FlatList } from "react-native";
import React from "react";
import styles from "./inventory-list-styles";

const Item = ({ name, details, unitPrice }) => (
  <View style={styles.item}>
    <View style={styles.priceContainer}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.price}>GH₵: {unitPrice}</Text>
    </View>
    <Text style={styles.details}>{details}</Text>
  </View>
);

const InventoryList = ({ searchPhrase, setClicked, data }) => {
  const renderItem = ({ item }) => {
    // when no input, show all
    if (searchPhrase === "") {
      return (
        <Item
          name={item.name}
          details={item.description}
          unitPrice={item.unitPrice}
        />
      );
    }
    // filter of the name
    if (
      item.name
        .toUpperCase()
        .includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))
    ) {
      return (
        <Item
          name={item.name}
          details={item.description}
          unitPrice={item.unitPrice}
        />
      );
    }
    // filter of the description
    if (
      item.description
        .toUpperCase()
        .includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))
    ) {
      return (
        <Item
          name={item.name}
          details={item.description}
          unitPrice={item.unitPrice}
        />
      );
    }
  };

  return (
    <View
      onStartShouldSetResponder={() => setClicked(false)}
      style={styles.container}
    >
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default InventoryList;
