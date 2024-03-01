import * as Updates from "expo-updates";

export enum Environment {
  Production,
  Staging,
  Development,
}

const databaseURL = process.env.DATABASE_URL;

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
      databaseURL: "https://sales-development-76f8e-default-rtdb.europe-west1.firebasedatabase.app/",
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
      apiKey: process.env.apiKey,
      authDomain: process.env.authDomain,
      projectId: process.env.projectId,
      storageBucket: process.env.storageBucket,
      messagingSenderId: process.env.messagingSenderId,
      appId: process.env.appId,
      measurementId: process.env.measurementId,
      databaseURL,
    },
    eas: {
      projectId: process.env.easProjectId,
    },
  },
};

export default function env() {
  // What is __DEV__ ?
  // This variable is set to true when react-native is running in Dev mode.
  // __DEV__ is true when run locally, but false when published.
  if (__DEV__) {
    return ENV.development;
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
