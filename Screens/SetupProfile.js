import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Platform,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import { TouchableOpacity, StatusBar, TextInput, Alert } from "react-native";
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
} from "firebase/firestore";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";

const SetupProfile = ({ navigation }) => {
  let auth = getAuth();
  let user1 = auth.currentUser;
  let user = user1.email;
  let db = getFirestore();
  const [date, setdate] = useState(new Date());
  const [name, setname] = useState("");
  const [phone, setphone] = useState("");
  const [rank, setrank] = useState("");
  const [service, setservice] = useState("");
  const [address, setaddress] = useState("");
  const [show, setshow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(user1.photoURL);
  const [gender, setGender] = useState("");
  const [rsStatus, setRsStatus] = useState("");
  const [reload, setreload] = useState("");
  const [data, setData] = useState("");

  useEffect(() => {
    async function getdata() {
      const citiesCol = await getDoc(doc(db, "users", user));
      if (citiesCol.exists()) {
        setData(citiesCol.data());
        setGender(data.Gender);
        setreload(data.Gender);
        setRsStatus(data.rsStatus);
        setdate(data.Date && data.Date.toDate());
      } else {
        // default values
        await setDoc(
          doc(db, "users", user),
          {
            Account_Created_At: auth.currentUser.metadata.creationTime,
            User_id: auth.currentUser.uid,
            Name: "",
            Phone: "",
            Rank: "",
            Service: "",
            Address: "",
            Gender: "",
            Date: "",
            rsStatus: "",
          },
          { merge: true }
        );
      }
    }
    getdata();
  }, [reload]);

  const upload = async () => {
    setLoading(true);
    const storage = getStorage();

    let storageRef = ref(
      storage,
      user + "/images/profilePicture/" + user1.uid + ".jpg"
    );
    const response = await fetch(image);
    const blob = await response.blob();

    var metadata = {
      contentType: "image/jpeg",
    };

    var uploadTask = uploadBytesResumable(storageRef, blob, metadata);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        switch (error.code) {
          case "storage/unauthorized":
            break;
          case "storage/canceled":
            break;

          case "storage/unknown":
            break;
        }
      },

      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          const citiesCol = await getDoc(doc(db, "users", user));
          await setDoc(
            doc(db, "users", user),
            {
              Account_Created_At: auth.currentUser.metadata.creationTime,
              User_id: auth.currentUser.uid,
              Name: name === "" ? data.Name : name,
              Phone: phone === "" ? data.Phone : phone,
              Rank: rank === "" ? data.Rank : rank,
              Service: service === "" ? data.Service : service,
              Address: address === "" ? data.Address : address,
              Gender: gender,
              Date: date,
              rsStatus: rsStatus,
              profilePicture: downloadURL,
            },
            { merge: true }
          ).then(async () => {
            await updateProfile(user1, {
              photoURL: citiesCol.data().profilePicture,
            }).then(() => {
              setLoading(false);
              alert("Upload Profile Picture Succeed!");
              navigation.navigate("Profile");
            });
          });
        });
      }
    );
  };

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } = await ImagePicker.getMediaLibraryPermissionsAsync();
        console.log("permission: " + status);
        if (status !== "granted") {
          const { status } =
            await ImagePicker.requestMediaLibraryPermissionsAsync();
          if (status !== "granted") {
            alert("Need Media library permission");
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
    }
  };

  return (
    <View style={styles.container}>
      {loading === true ? (
        <ActivityIndicator animating={loading} size="large" color="black" />
      ) : (
        false
      )}
      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={pickImage}>
          <Image
            style={styles.profilePic}
            source={{
              uri: image,
            }}
          />
        </TouchableOpacity>
      </View>
      <ScrollView style={{ width: "100%" }}>
        <View style={styles.inputGroup}>
          <Text style={styles.inputText}>Name</Text>
          <TextInput
            defaultValue={data.Name}
            style={styles.input}
            placeholder="Enter Name"
            onChangeText={(text) => {
              setname(text);
            }}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.inputText}>Phone</Text>
          <TextInput
            defaultValue={data.Phone}
            style={styles.input}
            placeholder="Enter Phone"
            onChangeText={(text) => {
              setphone(text);
            }}
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.inputText}>Rank</Text>
          <TextInput
            defaultValue={data.Rank}
            style={styles.input}
            placeholder="Enter Rank"
            onChangeText={(text) => {
              setrank(text);
            }}
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.inputText}>Service Years</Text>
          <TextInput
            defaultValue={data.Service}
            style={styles.input}
            placeholder="Enter Service Years"
            onChangeText={(text) => {
              setservice(text);
            }}
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.inputText}>Address</Text>
          <TextInput
            defaultValue={data.Address}
            style={styles.input}
            placeholder="Enter Address"
            onChangeText={(text) => {
              setaddress(text);
            }}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.inputText}>Gender</Text>
          <View style={styles.input}>
            <Picker
              selectedValue={gender}
              onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
              mode="dropdown"
              dropdownIconColor="#ff0000"
            >
              <Picker.Item label="Choose Gender" value=" " color="grey" />
              <Picker.Item label="Male" value="male" />
              <Picker.Item label="Female" value="female" />
              <Picker.Item label="Transgender" value="transgender" />
              <Picker.Item
                label="I prefer not to say"
                value="not descriebed!"
              />
            </Picker>
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.inputText}>Birthday</Text>
          <TouchableOpacity
            onPress={() => {
              setshow(true);
            }}
          >
            <Text style={styles.input}>
              {date
                ? new Date(date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                  })
                : "Select Date"}
            </Text>
          </TouchableOpacity>
        </View>
        {show === true ? (
          <DateTimePicker
            value={date ? new Date(date) : new Date()}
            mode="date"
            display="default"
            onChange={(event, selectedDate) => {
              if (event.type === "dismissed") {
                setshow(false);
              } else {
                setshow(false);
                console.log("Selected Date:", selectedDate);
                const parsedDate = selectedDate || new Date();
                console.log("Parsed Date:", parsedDate);
                setdate(parsedDate); // Convert to timestamp
              }
            }}
          />
        ) : (
          false
        )}

        <View style={styles.inputGroup}>
          <Text style={styles.inputText}>Relationship Status</Text>
          <View style={styles.input}>
            <Picker
              selectedValue={rsStatus}
              onValueChange={(itemValue, itemIndex) => setRsStatus(itemValue)}
              mode="dropdown"
              dropdownIconColor="#ff0000"
            >
              <Picker.Item
                label="Choose Relationship Status"
                value=""
                color="grey"
              />
              <Picker.Item label="Single" value="single" />
              <Picker.Item label="Relationship" value="relationship" />
              <Picker.Item label="Married" value="married" />
              <Picker.Item label="Divorced" value="divorced" />
              <Picker.Item label="I prefer not to say" value="not described!" />
            </Picker>
          </View>
        </View>

        <TouchableOpacity
          style={styles.submit}
          onPress={() => {
            upload();
          }}
        >
          <Text>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default SetupProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputGroup: {
    width: "80%",
    maxWidth: 500,
    alignSelf: "center",
    marginVertical: 10,
  },
  inputText: {
    marginLeft: 10,
    marginBottom: 5,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 2,
    borderColor: "grey",
    padding: 10,
    borderRadius: 5,
  },
  imageContainer: {
    borderRadius: 40,
    borderWidth: 3,
    borderColor: "gold",
    padding: 1,
    marginVertical: 10,
  },
  profilePic: {
    width: 75,
    height: 75,
    borderRadius: 40,
  },
  submit: {
    alignSelf: "center",
    backgroundColor: "lightblue",
    paddingHorizontal: 20,
    paddingVertical: 10,
    elevation: 10,
    borderRadius: 5,
  },
});
