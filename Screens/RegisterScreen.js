import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
  targetDate,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import React from "react";
import Countdown from "./Countdown";

const RegisterScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.userHeader}
          source={require("../assets/images/love201.png")}
        />
        <Text style={styles.at}>
          ပျော်<> </> ရွှင်<> </> ဖွယ်<> </> မ<> </> င်္ဂ<> </> လာ<> </> ပွဲ
        </Text>
        <Image
          style={styles.userHeader}
          source={require("../assets/images/love203.png")}
        />
      </View>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Dress");
        }}
      >
        <View style={styles.e}>
          <View style={styles.f}>
            <Text style={styles.title}> မင်္ဂလာဝတ်စုံရွေးရန် </Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Floral");
        }}
      >
        <View style={styles.e}>
          <View style={styles.f}>
            <Text style={styles.title}> ပန်းအလှနှင့်အပြင်အဆင်ပြုလုပ်ရန် </Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Photo");
        }}
      >
        <View style={styles.e}>
          <View style={styles.f}>
            <Text style={styles.title}>
              {" "}
              အမှတ်တရ မှတ်တမ်းတင်ဓာတ်ပုံရိုက်ကူးရန်{" "}
            </Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Makeup");
        }}
      >
        <View style={styles.e}>
          <View style={styles.f}>
            <Text style={styles.title}> မိတ်ကပ်အပြင်အဆင်ပြုလုပ်ရန် </Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Invitationletter");
        }}
      >
        <View style={styles.e}>
          <View style={styles.f}>
            <Text style={styles.title}> မင်္ဂလာဖိတ်စာ ပြုလုပ်ရန် </Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Invitationgift");
        }}
      >
        <View style={styles.e}>
          <View style={styles.f}>
            <Text style={styles.title}> မင်္ဂလာပြန်ကမ်း ပြုလုပ်ရန် </Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Food");
        }}
      >
        <View style={styles.e}>
          <View style={styles.f}>
            <Text style={styles.title}> ဧည့်ခံအကျွေးအမွေးအစီအစဉ် </Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Location");
        }}
      >
        <View style={styles.e}>
          <View style={styles.f}>
            <Text style={styles.title}>
              {" "}
              မင်္ဂလာပွဲကျင်းပမည့်နေရာသတ်မှတ်ရန်{" "}
            </Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Eventmanager");
        }}
      >
        <View style={styles.e}>
          <View style={styles.f}>
            <Text style={styles.title}>
              {" "}
              အခမ်းအနားမှူး နှင့် အခါတော်ပေး ဆောင်ရွက်ရန်{" "}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home_1");
        }}
      >
        <FontAwesome5 name="home" size={30} color="pink" />
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;

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
    width: 330,
    height: 65,
    backgroundColor: "grey",
    margin: 5,
    padding: 8,
    borderWidth: 5,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "gold",
  },
  f: {
    width: 330,
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
  title: {
    color: "maroon",
    fontWeight: "bold",
    fontSize: 15,
    alignSelf: "center",
    elevation: 8,
    textAlign: "center",
  },
});
