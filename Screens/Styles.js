// styles.js

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#487efa",
  },
  centeredContent: {
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: "80%",
    borderColor: "white",
    fontWeight: "bold",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    color: "white",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "pink",
    padding: 10,
    borderRadius: 5,
    elevation: 10,
  },
  buttonText: {
    color: "#487efa",
    margin: 5,
    fontWeight: "bold",
  },
  weatherInfo: {
    marginTop: 20,
    alignItems: "center",
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    marginTop: 10,
  },
  subheading: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    marginTop: 10,
  },
  weatherText: {
    color: "white",
    fontSize: 16,
    marginBottom: 8,
  },
});
