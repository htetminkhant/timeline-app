import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import fire from "../config/firebase";

import { getAuth, onAuthStateChanged } from "firebase/auth";
const ApploadingScreen = ({ navigation }) => {
  const [visible, setVisible] = useState(true);
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user.uid);
      setVisible(false);
      navigation.reset({
        index: 0,
        routes: [{ name: "Home_1" }],
      });
    } else {
      console.log("no user");
      setVisible(false);
      navigation.reset({
        index: 0,
        routes: [{ name: "Login_1" }],
      });
    }
  });

  return (
    <View style={styles.container}>
      <ActivityIndicator animating={visible} color="#000" size={40} />
      <Text style={{ marginTop: 20 }}>
        {" "}
        Go to  fund management system . .. ...
      </Text>
    </View>
  );
};

export default ApploadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
