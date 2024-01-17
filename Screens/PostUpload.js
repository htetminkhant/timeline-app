import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  StatusBar,
  Button,
  ScrollView,
  TouchableNativeFeedback,
  ActivityIndicator,
  Platform,
  Pressable,
} from "react-native";
import React, { useState, useEffect } from "react";
import {
  getStorage,
  ref,
  uploadBytes,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { getAuth, updateProfile } from "firebase/auth";
import {
  doc,
  collection,
  getDocs,
  getDoc,
  query,
  where,
  addDoc,
  setDoc,
  getFirestore,
  Firestore,
  Timestamp,
  serverTimestamp,
} from "firebase/firestore";
import * as ImagePicker from "expo-image-picker";
import uuid from "react-native-uuid";

const PostUpload = ({ navigation }) => {
  let auth = getAuth();
  let user1 = auth.currentUser;
  let user = user1.email;
  let db = getFirestore();
  const id = uuid.v4();
  // const db1 = doc(db, "post", "id");
  const [post, setpost] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const uid = auth.currentUser.uid;

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } = await ImagePicker.getMediaLibraryPermissionsAsync();

        if (status !== "granted") {
          const { status } =
            await ImagePicker.requestMediaLibraryPermissionsAsync();
          if (status !== "granted") {
            alert("101 App Need Media library");
          }
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });
    console.log(result);
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    } else {
      setImage(null); // Clear the image state if selection is canceled
    }
  };

  const uploadTextPost = async () => {
    try {
      await setDoc(
        doc(db, "post", id),
        {
          postID: id,
          postText: post,
          postTime: serverTimestamp(),
          ownerId: uid,
        },
        { merge: true }
      );

      setLoading(false);
      alert("Text Post Upload Completed");
      navigation.navigate("Home_1");
    } catch (error) {
      console.error("Error creating text post:", error);
      setLoading(false);
    }
  };

  const uploadImagePost = async () => {
    setLoading(true);

    const storage = getStorage();
    const storageRef = ref(
      storage,
      user + "/images/postPicture/" + id + ".jpg"
    );
    let downloadURL = null;

    try {
      const response = await fetch(image);
      const blob = await response.blob();
      const metadata = {
        contentType: "image/jpeg",
      };

      await uploadBytesResumable(storageRef, blob, metadata);
      downloadURL = await getDownloadURL(storageRef);
    } catch (error) {
      console.error("Error uploading image:", error);
      setLoading(false);
      return;
    }

    try {
      await setDoc(
        doc(db, "post", id),
        {
          postID: id,
          postText: post,
          postTime: serverTimestamp(),
          ownerId: uid,
          postImage: downloadURL,
        },
        { merge: true }
      );

      setLoading(false);
      alert("Image Post Upload Completed");
      navigation.navigate("Home_1");
    } catch (error) {
      console.error("Error creating image post:", error);
      setLoading(false);
    }
  };

  const submit = async () => {
    if (post && image) {
      // Handle text + image post
      uploadImagePost();
    } else if (post) {
      // Handle text-only post
      uploadTextPost();
    } else if (image) {
      // Handle image-only post
      uploadImagePost();
    } else {
      // Handle case when neither text nor image is provided
      alert("Please provide text or select an image.");
    }
  };

  // const submit = async () => {
  //   setLoading(true);

  //   const storage = getStorage();
  //   let storageRef;
  //   let downloadURL = null;

  //   if (image) {
  //     // If there is an image, proceed with image upload
  //     storageRef = ref(storage, user + "/images/postPicture/" + id + ".jpg");

  //     try {
  //       const response = await fetch(image);
  //       const blob = await response.blob();
  //       const metadata = {
  //         contentType: "image/jpeg",
  //       };

  //       await uploadBytesResumable(storageRef, blob, metadata);

  //       // Retrieve the download URL after successful image upload
  //       downloadURL = await getDownloadURL(storageRef);
  //     } catch (error) {
  //       console.error("Error uploading image:", error);
  //       setLoading(false);
  //       return; // Exit the function if there's an error with image upload
  //     }
  //   }

  //   // Handle text-only posts or posts with images
  //   try {
  //     await setDoc(
  //       doc(db, "post", id),
  //       {
  //         postID: id,
  //         postText: post,
  //         postTime: serverTimestamp(),
  //         ownerId: uid,
  //         postImage: downloadURL, // Will be null for text-only posts
  //       },
  //       { merge: true }
  //     );

  //     setLoading(false);
  //     alert("Post Upload Completed");
  //     navigation.navigate("Home_1");
  //   } catch (error) {
  //     console.error("Error creating post:", error);
  //     setLoading(false);
  //   }
  // };

  return (
    <View style={styles.container}>
      {loading === true ? (
        <ActivityIndicator animating={loading} size="large" color="black" />
      ) : (
        false
      )}
      <Text style={styles.title}>Upload your history</Text>

      <View style={styles.postContainer}>
        <ScrollView style={styles.scrollview}>
          <TextInput
            multiline={true}
            placeholder="Post your histories.......!"
            style={styles.input}
            onChangeText={(text) => {
              setpost(text);
            }}
          />

          <Button title="Choose your Image" onPress={pickImage} />
          {image && (
            <Image
              source={{ uri: image }}
              style={{
                width: "100%",
                height: 300,
                marginTop: 10,
              }}
              resizeMode="contain"
            />
          )}
        </ScrollView>

        {Platform.OS === "web" ? (
          <Pressable
            onPress={() => {
              submit();
            }}
            style={({ pressed }) => [
              styles.btn,
              {
                backgroundColor: pressed ? "lightblue" : "#487efa",
              },
            ]}
          >
            <Text style={{ color: "white" }}>Post</Text>
          </Pressable>
        ) : (
          <TouchableNativeFeedback
            onPress={() => {
              submit();
            }}
            background={TouchableNativeFeedback.Ripple("lightblue", false)}
          >
            <View style={styles.btn}>
              <Text style={{ color: "white" }}>Post</Text>
            </View>
          </TouchableNativeFeedback>
        )}
      </View>
    </View>
  );
};

export default PostUpload;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",

    paddingTop: StatusBar.currentHeight,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
  },
  postContainer: {
    width: "100%",
    flex: 1,

    alignItems: "center",
    // backgroundColor: "#487efa",
  },
  input: {
    width: "100%",
    borderWidth: 2,
    borderColor: "grey",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    marginTop: 10,
  },
  scrollview: {
    width: "80%",
  },
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 20,
    backgroundColor: "#487efa",
    borderRadius: 5,
  },
});
