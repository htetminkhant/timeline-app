import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";
import { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";

const LoginScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  console.log(name);

  const [budget, setBudget] = useState("");
  console.log(budget);

  const [estime, setEstime] = useState("");
  console.log(estime);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.userHeader}
          source={require("../assets/images/love201.png")}
        />
        <Text style={styles.at}>
          S t a r t i n g <> </> H a p p y <> </> W e d d i n g !
        </Text>
        <Image
          style={styles.userHeader}
          source={require("../assets/images/love203.png")}
        />
      </View>

      <View style={styles.body}>
        <Text style={styles.subTitle}>မင်္ဂလာမောင်နှံအမည်</Text>
        <Text>{name}</Text>
        <TextInput
          placeholder="မင်္ဂလာမောင်နှံအမည်"
          style={styles.Input}
          multiline={true}
          onChangeText={(Text) => setName(Text)}
        />
      </View>
      <View style={styles.body}>
        <Text style={styles.subTitle}>ခန့်မှန်းအသုံးစရိတ်</Text>
        <Text>{budget}</Text>
        <TextInput
          placeholder="မင်္ဂလာပွဲတွင် သုံးစွဲမည့်ခန့်မှန်းအသုံးစရိတ်"
          style={styles.Input}
          multiline={true}
          onChangeText={(Text) => setBudget(Text)}
        />
      </View>
      <View style={styles.body}>
        <Text style={styles.subTitle}>မင်္ဂလာပွဲကျင်းပမည့်အချိန်</Text>
        <Text>{budget}</Text>
        <TextInput
          placeholder="မင်္ဂလာပွဲကျင်းပမည့် အချိန်၊ ရက်၊ လ၊ ခုနှစ်။"
          style={styles.Input}
          multiline={true}
          onChangeText={(Text) => setEstime(Text)}
        />
      </View>
      <View style={styles.userBottom}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <FontAwesome5 name="home" size={30} color="pink" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Register");
          }}
        >
          <View style={styles.e}>
            <View style={styles.f}>
              <Text style={styles.title}> Register </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#487efa",
    alignItems: "center",
    paddingTop: StatusBar.currentHeight,
    paddingBottom: StatusBar.currentHeight,
  },
  e: {
    width: 200,
    height: 50,
    backgroundColor: "grey",
    margin: 5,
    padding: 8,
    borderWidth: 5,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "gold",
    marginRight: 15,
  },
  f: {
    width: 200,
    height: 50,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    width: "100%",
    height: 40,
    backgroundColor: "pink",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    margin: 7,
  },
  at: {
    fontSize: 15,
    fontWeight: "bold",
    fontStyle: "normal",
    color: "maroon",
  },
  userHeader: {
    width: 40,
    height: 40,
  },
  body: {
    width: "98%",
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    flexDirection: "column",
    borderColor: "gold",
    borderWidth: 5,
    borderRadius: 5,
    justifyContent: "space-between",
    margin: 5,
  },
  Input: {
    backgroundColor: "lightblue",
    width: "100%",
    height: "75%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    fontSize: 15,
    fontWeight: "bold",
    fontStyle: "normal",
    color: "maroon",
  },
  title: {
    color: "maroon",
    fontWeight: "bold",
    fontSize: 15,
    alignSelf: "center",
    elevation: 8,
  },
  subTitle: {
    color: "maroon",
    fontWeight: "bold",
    fontSize: 15,
    alignSelf: "center",
    marginTop: 13,
    flexBasis: "column",
  },
  userBottom: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
});
