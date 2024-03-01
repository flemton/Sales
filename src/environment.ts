import * as Updates from "expo-updates";

export enum Environment {
  Production,
  Staging,
  Development,
}

const databaseURL = process.env.DATABASE_URL;
const apiKey = process.env.APIKEY;
const authDomain = process.env.AUTH_DOMAIN;
const projectId = process.env.PROJECT_ID;
const storageBucket = process.env.STORAGE_BUCKET;
const messagingSenderId = process.env.MESSAGING_SENDER_ID;
const appId = process.env.APP_ID;
const measurementId = process.env.MEASUREMENT_ID;

const ENV = {
  development: {
    environment: Environment.Development,
    firebase: {
      apiKey: "AIzaSyCaxFx-s8uBqeJiGKljdXt0BlDD3THVByY",
      authDomain: "sales-development-76f8e.firebaseapp.com",
      projectId: "sales-development-76f8e",
      storageBucket: "sales-development-76f8e.appspot.com",
      messagingSenderId: "72110147544",
      appId: "1:72110147544:web:caafb32420149d6f9294ad",
      measurementId: "G-KQWJ97HRZ6",
      databaseURL:
        "https://sales-development-76f8e-default-rtdb.europe-west1.firebasedatabase.app/",
    },
    eas: {
      projectId: "",
    },
  },
  staging: {
    environment: Environment.Staging,
    firebase: {
      apiKey: "AIzaSyCaxFx-s8uBqeJiGKljdXt0BlDD3THVByY",
      authDomain: "sales-development-76f8e.firebaseapp.com",
      projectId: "sales-development-76f8e",
      storageBucket: "sales-development-76f8e.appspot.com",
      messagingSenderId: "72110147544",
      appId: "1:72110147544:web:caafb32420149d6f9294ad",
      measurementId: "G-KQWJ97HRZ6",
      databaseURL:
        "https://sales-development-76f8e-default-rtdb.europe-west1.firebasedatabase.app/",
    },
    eas: {
      projectId: "",
    },
  },
  production: {
    environment: Environment.Production,
    firebase: {
      apiKey: process.env.APIKEY || "AIzaSyCaxFx-s8uBqeJiGKljdXt0BlDD3THVByY",
      authDomain: process.env.AUTH_DOMAIN || "sales-development-76f8e.firebaseapp.com",
      projectId: process.env.PROJECT_ID || "sales-development-76f8e",
      storageBucket: process.env.STORAGE_BUCKET || "sales-development-76f8e.appspot.com",
      messagingSenderId: process.env.MESSAGING_SENDER_ID || "72110147544",
      appId: process.env.APP_ID || "1:72110147544:web:caafb32420149d6f9294ad",
      measurementId: process.env.MEASUREMENT_ID || "G-KQWJ97HRZ6",
      databaseURL: process.env.DATABASE_URL || "https://sales-development-76f8e-default-rtdb.europe-west1.firebasedatabase.app/",
    },
    eas: {
      projectId: process.env.EAS_PROJECT_ID,
    },
  },
};

export default function env() {
  // What is __DEV__ ?
  // This variable is set to true when react-native is running in Dev mode.
  // __DEV__ is true when run locally, but false when published.
  if (__DEV__) {
    return ENV.production;
  }
  if (Updates.channel === "preview") {
    return ENV.staging;
  }
  if (Updates.channel === "development") {
    return ENV.development;
  }
  if (Updates.channel === "test") {
    return ENV.staging;
  }
  if (Updates.channel === "production") {
    return ENV.production;
  }
  return ENV.production;
}
