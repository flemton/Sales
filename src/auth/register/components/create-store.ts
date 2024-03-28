import { View, Text } from "react-native";
import React from "react";
import { getDatabase, ref, set } from "firebase/database";

const CreateStore = ({ store, email, imageUrl, uid }) => {
  const db = getDatabase();
  set(ref(db, "stores/" + email.split("@")[0].toLocaleLowerCase()), {
    name: store,
    admin: email,
    store_logo: imageUrl,
    users: {
      [uid]: { username: "Admin", email: email, profile_picture: imageUrl },
    },
    inventory: null,
  });
};

export default CreateStore;
