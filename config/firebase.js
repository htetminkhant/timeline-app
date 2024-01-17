import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  initializeAuth,
  browserLocalPersistence,
} from "firebase/auth";
import { getStorage } from "firebase/storage";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyBzdZ3vJd-5p1W9E8TRH3woEMGpcj_HJJM",
  authDomain: "project-101-navy.firebaseapp.com",
  projectId: "project-101-navy",
  storageBucket: "project-101-navy.appspot.com",
  messagingSenderId: "676193636405",
  appId: "1:676193636405:web:9c21dba1c09e043ddba17c",
};

const app = initializeApp(firebaseConfig);

let persistenceFunction;

const isReactNative =
  typeof navigator !== "undefined" && navigator.product === "ReactNative";

if (isReactNative) {
  // Import getReactNativePersistence only if in React Native environment
  persistenceFunction = async () => {
    const { getReactNativePersistence } = await import("firebase/auth");
    return getReactNativePersistence(AsyncStorage);
  };
} else {
  // For web, use a different persistence method (e.g., LOCAL)
  persistenceFunction = async () => browserLocalPersistence;
}

(async () => {
  initializeAuth(app, {
    persistence: await persistenceFunction(),
  });

  const db = getFirestore(app);
  const auth = getAuth(app);
  const storage = getStorage(app);
})();
