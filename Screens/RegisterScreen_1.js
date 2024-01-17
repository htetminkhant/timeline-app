import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  Image,
  TextInput,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import fire from "../config/firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const RegisterScreen_1 = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const Register = async () => {
    try {
      if (email.length == 0) {
        alert("Invalid Email");
      } else if (password.length < 6) {
        alert("Invalid password");
      } else if (password !== confirmPassword) {
        alert("Password and confirmation do not match");
      } else {
        const auth = getAuth();
        await createUserWithEmailAndPassword(auth, email, password);
        navigation.navigate("Login_1");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.userHeader}
          source={require("../assets/images/A2.png")}
        />
        <Text style={styles.at}>
          J u s t <> </> F o r <> </> K n o w l e d g e !
        </Text>
        <Image
          style={styles.userHeader}
          source={require("../assets/images/Ar.png")}
        />
      </View>
      <View
        style={{
          backgroundColor: "white",
          width: 100,
          height: 100,
          borderRadius: 100,
          margin: 10,
        }}
      >
        <Image
          source={require("../assets/images/logo.png")}
          style={{
            resizeMode: "contain",
            width: 100,
            height: 100,
          }}
        ></Image>
      </View>
      <View style={styles.body}>
        <View style={styles.Input1}>
          <Text style={styles.title1}>Email</Text>
          <TextInput
            placeholder="Enter Your Email"
            style={styles.Input}
            onChangeText={(Text) => setEmail(Text)}
          />
        </View>
        <View style={styles.Input1}>
          <Text style={styles.title1}>Password</Text>
          <TextInput
            placeholder="Enter Your Password"
            style={styles.Input}
            onChangeText={(Text) => setPassword(Text)}
          />
        </View>
        <View style={styles.Input1}>
          <Text style={styles.title1}>Confirm Password</Text>
          <TextInput
            placeholder="Retype Password"
            style={styles.Input}
            onChangeText={(text) => setConfirmPassword(text)}
          />
        </View>
        {/* <View style={styles.Input1}>
          <Text style={styles.title1}>User Name</Text>
          <TextInput
            placeholder="Enter Your name"
            style={styles.Input}
            onChangeText={(Text) => setName(Text)}
          />
        </View> */}

        <TouchableOpacity
          onPress={() => {
            Register();
          }}
        >
          <View style={styles.e}>
            <View style={styles.f}>
              <Text style={styles.title}> Register </Text>
            </View>
          </View>
        </TouchableOpacity>

        <View style={{ flexDirection: "row", marginTop: "10" }}>
          <Text style={{ marginTop: 10 }}> Already Have An Account! </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Login_1");
            }}
          >
            <View>
              <Text style={styles.link}> Login </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RegisterScreen_1;

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
    flex: 1,
    width: "100%",
    // backgroundColor:"white",
    borderRadius: 5,
    marginBottom: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  Input: {
    backgroundColor: "white",
    width: "100%",
    padding: 10,
    borderRadius: 3,
    marginBottom: 20,
  },
  title1: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
    alignSelf: "flex-start",
    marginBottom: 5,
  },
  Input1: {
    width: "55%",
  },
  link: {
    color: "lightblue",
    marginTop: 10,
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
  },
});
