import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Image,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

import { FontAwesome } from "@expo/vector-icons";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import firestore from "../config/firebase";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {
  doc,
  collection,
  getDocs,
  getDoc,
  query,
  where,
  addDoc,
  setDoc,
} from "firebase/firestore";
const Profile = ({ navigation }) => {
  const auth = getAuth();
  const user = auth.currentUser.email;
  const uid = auth.currentUser.uid;
  const user1 = auth.currentUser;
  const db = getFirestore();
  const [data, setData] = useState("");
  useEffect(() => {
    async function getdata() {
      const citiesCol = await getDoc(doc(db, "users", user));
      if (citiesCol.exists()) {
        setData(citiesCol.data());
      }
    }
    getdata();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.float}>
        <TouchableOpacity
          style={styles.edit}
          onPress={() => {
            navigation.navigate("Setup");
          }}
        >
          <FontAwesome5 name="user-edit" size={18} color="black" />
        </TouchableOpacity>
        <Image
          source={{
            uri: user1.photoURL,
          }}
          style={styles.profilePicture}
        />
        <Text style={styles.username}>
          {data ? data.Name : "Not Available"}
        </Text>
        <Text style={styles.email}>
          <Fontisto
            name="email"
            size={13}
            color="white"
            style={{ padding: 10 }}
          />
          {user}
        </Text>
        <Text style={styles.email}>
          <Feather
            name="phone"
            size={13}
            color="white"
            style={{ padding: 10 }}
          />
          {data ? data.Phone : "Not Available"}
        </Text>
        {/* <Text style={styles.email}>
          <FontAwesome5
            name="user"
            size={13}
            color="white"
            style={{ padding: 10 }}
          />
          {uid}
        </Text> */}
      </View>

      <View style={styles.body}>
        <View style={styles.innerbody}>
          <ScrollView>
            <View style={styles.item}>
              <Ionicons name="star-half-outline" size={30} color="white" />
              <Text style={styles.iteminfo}>
                {data ? data.Rank : "Not Available"}
              </Text>
            </View>
            <View style={styles.item}>
              <FontAwesome5 name="suitcase" size={30} color="white" />
              <Text style={styles.iteminfo}>
                {data ? data.Service : "Not Available"}
              </Text>
            </View>
            <View style={styles.item}>
              <Ionicons name="home-outline" size={30} color="white" />
              <Text style={styles.iteminfo}>
                {data ? data.Address : "Not Available"}
              </Text>
            </View>
            {/* <View style={styles.item}>
              <FontAwesome5 name="hand-holding-usd" size={30} color="white" />
              <Text style={styles.iteminfo}>
                {data ? data.donation : "Not Available"}
              </Text>
            </View> */}
            <View style={styles.item}>
              <MaterialCommunityIcons
                name="human-male-female"
                size={30}
                color="white"
              />
              <Text style={styles.iteminfo}>
                {data ? data.Gender : "Not Available"}
              </Text>
            </View>
            <View style={styles.item}>
              <FontAwesome name="birthday-cake" size={30} color="white" />
              <Text style={styles.iteminfo}>
                {data
                  ? data.Date.toDate().toLocaleDateString()
                  : "Not Available"}
              </Text>
            </View>
            {/* <View style={styles.item}>
              <Ionicons name="school-outline" size={30} color="grey" />
              <Text style={styles.iteminfo}>B.C.Sc</Text
            </View> */}
            <View style={styles.item}>
              <MaterialCommunityIcons
                name="heart-multiple-outline"
                size={30}
                color="white"
              />
              <Text style={styles.iteminfo}>
                {data ? data.rsStatus : "Not Available"}
              </Text>
            </View>
            <View>
              <TouchableOpacity
                style={styles.item}
                onPress={() => {
                  auth.signOut();
                  navigation.reset({
                    index: 0,
                    routes: [{ name: "Login_1" }],
                  });
                }}
              >
                <MaterialCommunityIcons name="logout" size={30} color="#000" />
                <Text style={styles.iteminfo}>Logout</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
      {/* <Text>{user} </Text> */}
      {/* <TouchableOpacity
        style={{
          padding: 10,
          backgroundColor: "lightblue",
          elevation: 5,
          marginTop: 10,
        }}
        onPress={() => {
          auth.signOut();
          navigation.reset({
            index: 0,
            routes: [{ name: "Login_1" }],
          });
        }}
      >
        <Text>Log Out</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#487efa",
    alignItems: "center",
    paddingTop: StatusBar.currentHeight,
    paddingBottom: StatusBar.currentHeight,
    width: "100%",
    alignSelf: "center",
  },

  float: {
    backgroundColor: "#487efa",
    width: "80%",
    maxWidth: 450,
    paddingVertical: 20,
    elevation: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  body: {
    backgroundColor: "#5285fa",
    flex: 1,
    width: "100%",
    marginTop: -20,
  },
  profilePicture: {
    width: 75,
    height: 75,
    borderRadius: 40,
  },
  username: {
    fontWeight: "bold",
    color: "white",
    fontSize: 25,
    margin: 5,
  },
  email: {
    color: "white",
    fontSize: 13,
  },
  edit: {
    position: "absolute",
    right: 20,
    top: 20,
  },
  innerbody: {
    flex: 1,
    width: "100%",
    marginTop: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 50,
    marginVertical: 10,
  },
  iteminfo: {
    fontSize: 20,
    fontWeight: "normal",
    marginLeft: 50,
  },
});
