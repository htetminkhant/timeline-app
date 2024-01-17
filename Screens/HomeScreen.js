import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
  TextInput,
  Platform,
  ScrollView,
} from "react-native";
import React, { useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { FontAwesome } from "@expo/vector-icons";

export default function HomeScreen({ navigation }) {
  const click = () => {
    alert("လွမ်းတယ်။");
  };
  const [emotion, setEmotion] = useState("");
  console.log(emotion);

  const [username, setUsername] = useState("");
  console.log(username);

  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, ဓာတ်ပုံပြောင်းရန်အတွက် ခွင့်ပြုချက်လိုအပ်ပါသည်။");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.userHeader}
          source={require("../assets/images/love201.png")}
        />
        <Text style={styles.at}>
          H a p p y <> </> W e d d i n g !
        </Text>
        <Image
          style={styles.userHeader}
          source={require("../assets/images/love203.png")}
        />
      </View>

      <View style={styles.a}>
        <Text>{emotion}</Text>
        <TextInput
          placeholder="ချစ်တယ်"
          style={styles.at}
          onChangeText={(Text) => setEmotion(Text)}
        />
      </View>

      <View style={styles.e}>
        <Text>{username}</Text>
        <TextInput
          placeholder="ကိုကို နဲ့ သဲတုန်"
          style={styles.at}
          onChangeText={(Text) => setUsername(Text)}
        />
      </View>

      <ScrollView style={styles.scrollView}>
        <TouchableOpacity
          onPress={() => {
            alert("ဓာတ်ပုံပြောင်းရန်။");
          }}
        >
          <Image
            style={styles.headerImage}
            source={require("../assets/images/love.jpg")}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            alert("ဓာတ်ပုံပြောင်းရန်။");
          }}
        >
          <Image
            style={styles.headerImage}
            source={require("../assets/images/love.jpg")}
          />
        </TouchableOpacity>
        {image && <Image source={{ uri: image }} style={styles.headerImage} />}
      </ScrollView>

      <View style={styles.userBottom}>
        <TouchableOpacity onPress={pickImage}>
          <FontAwesome name="camera" size={24} color="pink" />
        </TouchableOpacity>

        <Image
          style={styles.userIcon}
          source={require("../assets/images/wed1.png")}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Login_1");
          }}
        >
          <AntDesign name="login" size={50} color="pink" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

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
  header: {
    width: "100%",
    height: 40,
    backgroundColor: "pink",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    margin: 7,
  },
  headerImage: {
    resizeMode: "contain",
    width: 345,
    height: 245,
    justifyContent: "center",
    alignItems: "center",
    margin: 3,
    borderRadius: 50,
    borderWidth: 7,
    borderColor: "gold",
  },
  userIcon: {
    resizeMode: "cover",
    width: 140,
    height: 80,
    borderRadius: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  userBottom: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  userHeader: {
    width: 40,
    height: 40,
  },
  e: {
    width: 300,
    height: 50,
    backgroundColor: "grey",
    margin: 5,
    padding: 8,
    borderWidth: 5,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "gold",
    flexDirection: "row",
  },
  a: {
    width: 200,
    height: 50,
    backgroundColor: "grey",
    borderWidth: 5,
    borderColor: "gold",
    borderRadius: 25,
    elevation: 10,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    flexDirection: "row",
  },
  f: {
    width: 200,
    height: 50,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  at: {
    fontSize: 15,
    fontWeight: "bold",
    fontStyle: "normal",
    color: "maroon",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  body: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
    padding: 5,
  },
  post: {
    width: "100%",
    height: 200,
    backgroundColor: "white",
    borderRadius: 5,
    elevation: 3,
    marginVertical: 5,
  },
  scrollView: {
    marginHorizontal: 20,
  },
});
