import { View, Text, Alert, ScrollView } from "react-native";
import React, { useState, useRef } from "react";
import { getDatabase, ref, set } from "firebase/database";
import { getAuth } from "firebase/auth";
import { Form, FormItem } from "react-native-form-component";
import styles from "./inventory-add-styles";

const InventoryAdd = ({ navigation }) => {
  const auth = getAuth();
  const db = ref(getDatabase());
  const descriptionRef = useRef();
  const barcodeRef = useRef();
  const nameRef = useRef();
  const quantityRef = useRef();
  const unitPriceRef = useRef();
  const supplierRef = useRef();
  const expiryRef = useRef();
  const [description, setDescription] = useState("");
  const [barcode, setBarcode] = useState("");
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  const [supplier, setSupplier] = useState("");
  const [expiry, setExpiry] = useState("");

  const { currentUser } = auth;
  const adminID = currentUser.email;

  function addUser() {
    const db = getDatabase();
    set(
      ref(
        db,
        "stores/" +
          adminID.split("@")[0].toLocaleLowerCase() +
          "/inventory/" +
          Math.floor(Math.random() * 999999999)
      ),
      {
        description: description,
        barcode: barcode,
        name: name,
        quantity: quantity,
        unitPrice: unitPrice,
        supplier: supplier,
        expiry: expiry,
        image: "https://example.com/image.jpg",
      }
    ).finally(() => {
      auth.updateCurrentUser(currentUser);
      Alert.alert("Item Created Successfully");
      navigation.navigate("Inventory");
    });
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <Form
          onButtonPress={() => addUser()}
          style={styles.form}
          buttonStyle={styles.btn}
        >
          <FormItem
            style={styles.input}
            labelStyle={styles.label}
            value={name}
            isRequired
            ref={nameRef}
            onChangeText={(input) => setName(input)}
            placeholder="Enter Item Name"
          />
          <FormItem
            style={styles.input}
            labelStyle={styles.label}
            value={description}
            isRequired
            ref={descriptionRef}
            onChangeText={(input) => setDescription(input)}
            placeholder="Enter Item Description"
          />
          <FormItem
            style={styles.input}
            labelStyle={styles.label}
            value={quantity}
            isRequired
            ref={quantityRef}
            onChangeText={(input) => setQuantity(input)}
            placeholder="Enter Item Quantity"
          />
          <FormItem
            style={styles.input}
            labelStyle={styles.label}
            value={unitPrice}
            isRequired
            ref={unitPriceRef}
            onChangeText={(input) => setUnitPrice(input)}
            placeholder="Enter Unit Price of Item"
          />
          <FormItem
            style={styles.input}
            labelStyle={styles.label}
            value={barcode}
            ref={barcodeRef}
            onChangeText={(input) => setBarcode(input)}
            placeholder="Optional, Enter Item Barcode or Serial Number"
          />
          <FormItem
            style={styles.input}
            labelStyle={styles.label}
            value={supplier}
            ref={supplierRef}
            onChangeText={(input) => setSupplier(input)}
            placeholder="Optional, Enter Item Supplier Name and Address"
          />
          <FormItem
            style={styles.input}
            labelStyle={styles.label}
            value={expiry}
            ref={expiryRef}
            isRequired
            onChangeText={(input) => setExpiry(input)}
            placeholder="Enter Item Expiry Date in format: DD/MM/YYYY"
          />
        </Form>
      </View>
    </ScrollView>
  );
};

export default InventoryAdd;
