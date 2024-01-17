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
  TouchableNativeFeedback,
  FlatList,
  Alert,
} from "react-native";
import React, { useEffect } from "react";
import { AntDesign, Octicons } from "@expo/vector-icons";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import fire from "../config/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
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
  onSnapshot,
  deleteDoc,
} from "firebase/firestore";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ReadMore from "@fawazahmed/react-native-read-more";
import clip from "text-clipper";

export default function Home_1({ navigation }) {
  let auth = getAuth();
  let user1 = auth.currentUser;
  let user = user1.email;
  let db = getFirestore();
  const [post, setPost] = useState([]);
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const q = query(collection(db, "post"));
        const querySnapshot = await getDocs(q);
        const posts = [];
        for (const doc of querySnapshot.docs) {
          const postData = doc.data();
          const userQuery = query(
            collection(db, "users"),
            where("User_id", "==", postData.ownerId)
          );
          const userSnapshot = await getDocs(userQuery);
          userSnapshot.forEach((userDoc) => {
            posts.push({
              ...postData,
              user: userDoc.data(),
              key: doc.id,
            });
          });
        }
        setPost(posts);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setLoading(false);
      }
    };
    if (loading) {
      fetchData();
    }
  }, [db, loading]);

  const isWeb = Platform.OS === "web";

  const postDelete = async (postId) => {
    try {
      console.log("Deleting post with ID: ", postId);

      const postRef = doc(db, "post", postId);

      if (isWeb) {
        alert("Are you sure you want to delete this post?");

        await deleteDoc(postRef);

        setPost((prevPosts) =>
          prevPosts.filter((post) => post.postID !== postId)
        );

        console.log("Post deleted successfully.");
      } else {
        Alert.alert(
          "Confirm Deletion",
          "Are you sure you want to delete this post?",
          [
            {
              text: "Cancel",
              style: "cancel",
            },
            {
              text: "Delete",
              onPress: async () => {
                await deleteDoc(postRef);

                setPost((prevPosts) =>
                  prevPosts.filter((post) => post.postID !== postId)
                );

                console.log("Post deleted successfully.");
              },
            },
          ],
          { cancelable: true }
        );
      }
    } catch (error) {
      console.error("Error deleting post: ", error);
      alert(
        "An error occurred while deleting the post. Please try again later."
      );
    }
  };

  const renderContent = ({ item }) => {
    // Check if it's a text-only post
    const isTextOnly = !item.postImage;

    return (
      <View style={styles.newpost}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 5,
          }}
        >
          {!item.user ? (
            <FontAwesome name="user-circle-o" size={55} color="grey" />
          ) : (
            <Image
              source={{ uri: item.user.profilePicture }}
              style={{ width: 55, height: 55, borderRadius: 55 }}
            />
          )}
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontWeight: "bold", color: "#012052" }}>
              {item.user ? item.user.Name : ""}
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: 12, color: "grey" }}>
              {item.postTime && item.postTime.toDate().toDateString()}
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: 12, color: "grey" }}>
              {item.postTime && item.postTime.toDate().toLocaleTimeString()}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              postDelete(item.postID);
            }}
          >
            <AntDesign
              name="delete"
              style={styles.deleteIcon}
              size={25}
              color="pink"
            />
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: "center" }}>
          <ReadMore
            numberOfLines={4}
            seeMoreStyle={{ color: "darkblue", fontWeight: "bold" }}
            seeLessStyle={{ color: "darkblue", fontWeight: "bold" }}
            ellipsis="... .. ."
          >
            {item.postText}
          </ReadMore>

          {item.postImage && (
            <TouchableOpacity
              style={{ width: "100%" }}
              onPress={() => {
                navigation.navigate("Image", { data: item });
              }}
            >
              <Image
                source={{
                  uri: item.postImage,
                }}
                style={styles.postImage}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.body}>
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
        <FlatList
          data={post}
          renderItem={renderContent}
          keyExtractor={(item) => item.postID}
          style={styles.scrollView}
          initialNumToRender={5}
          maxToRenderPerBatch={5}
          windowSize={10}
        />
      </View>
      <View style={styles.userBottom}>
        <TouchableOpacity
          onPress={() => {
            const auth = getAuth();
            if (auth.currentUser == null) {
              alert("Please Login!");
            } else {
              alert("Weather Forecast for your city!");
              navigation.navigate("WeatherScreen");
            }
          }}
        >
          <MaterialCommunityIcons
            name="weather-partly-cloudy"
            size={50}
            color="pink"
            style={styles.loginIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            const auth = getAuth();
            if (auth.currentUser == null) {
              navigation.navigate("Login_1");
            } else {
              navigation.navigate("Profile");
            }
          }}
        >
          <Image
            style={styles.userIcon}
            source={require("../assets/images/navy4.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.AddPostBtn}
          onPress={() => {
            navigation.navigate("Post");
          }}
        >
          <Octicons name="diff-added" size={47} color="pink" />
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
    width: "96%",
    height: 40,
    backgroundColor: "pink",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    margin: 5,
    borderRadius: 3,
  },
  headerImage: {
    resizeMode: "contain",
    width: 345,
    height: 275,
    justifyContent: "center",
    alignItems: "center",
    margin: 3,
    borderRadius: 50,
    borderWidth: 7,
    borderColor: "gold",
  },
  userIcon: {
    resizeMode: "cover",
    width: 100,
    height: 90,
    borderRadius: 20,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: -23,
    marginTop: 6,
  },
  loginIcon: {
    marginBottom: -23,
    marginTop: 6,
  },
  deleteIcon: {
    marginBottom: -23,
    marginTop: 6,
    marginLeft: 135,
  },
  userBottom: {
    position: "absolute",
    marginVertical: 700,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  userHeader: {
    width: 35,
    height: 35,
    margin: 3,
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
    width: "100%",
    flex: 1,

    padding: 5,
  },
  newpost: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 5,
    elevation: 3,
    marginVertical: 5,
    padding: 8,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  postImage: {
    width: "100%",
    height: 230,
    resizeMode: "cover",
    marginTop: 9,
  },
  postActualimage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  AddPostBtn: {
    marginBottom: -23,
    marginTop: 6,
    marginLeft: 5,
  },
});
