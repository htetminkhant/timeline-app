import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const ImageFullScreen = ({ route, navigation }) => {
  const { data } = route.params;
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: data.postImage,
        }}
        style={styles.image}
      />
    </View>
  );
};

export default ImageFullScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#010101",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});
