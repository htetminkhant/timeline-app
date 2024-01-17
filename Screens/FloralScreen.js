import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import SelectDropdown from "react-native-select-dropdown";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import React from "react";

const FloralScreen = ({ navigation }) => {
  const countries = ["ပန်းမျိုးစုံ", "နှင်းဆီပန်း", "သစ်ခွ"];
  const countriesWithFlags = [
    { title: "Egypt", image: require("../assets/images/love203.png") },
    { title: "Canada", image: require("../assets/images/love203.png") },
    { title: "Australia", image: require("../assets/images/love203.png") },
    { title: "Ireland", image: require("../assets/images/love203.png") },
    { title: "Brazil", image: require("../assets/images/love203.png") },
    { title: "England", image: require("../assets/images/love203.png") },
    { title: "Dubai", image: require("../assets/images/love203.png") },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.userHeader}
          source={require("../assets/images/love201.png")}
        />
        <Text style={styles.at}>
          P l a n n i n g <> </> H a p p y <> </> W e d d i n g !
        </Text>
        <Image
          style={styles.userHeader}
          source={require("../assets/images/love203.png")}
        />
      </View>

      <View style={styles.e}>
        <View style={styles.f}>
          <Text>မင်္ဂလာဝတ်စုံအမျိုးအစား</Text>
        </View>
      </View>

      <SelectDropdown
        data={countries}
        defaultValueByIndex={1}
        defaultValue={"England"}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
        }}
        defaultButtonText={"Select country"}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          return item;
        }}
        buttonStyle={styles.dropdown2BtnStyle}
        buttonTextStyle={styles.dropdown2BtnTxtStyle}
        renderDropdownIcon={(isOpened) => {
          return (
            <FontAwesome
              name={isOpened ? "chevron-up" : "chevron-down"}
              color={"#FFF"}
              size={18}
            />
          );
        }}
        dropdownIconPosition={"right"}
        dropdownStyle={styles.dropdown2DropdownStyle}
        rowStyle={styles.dropdown2RowStyle}
        rowTextStyle={styles.dropdown2RowTxtStyle}
      />
      <View style={styles.e}>
        <View style={styles.f}>
          <Text>သတို့သားမင်္ဂလာဝတ်စုံ</Text>
        </View>
      </View>

      <SelectDropdown
        data={countries}
        defaultValueByIndex={1}
        defaultValue={"England"}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
        }}
        defaultButtonText={"Select country"}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          return item;
        }}
        buttonStyle={styles.dropdown2BtnStyle}
        buttonTextStyle={styles.dropdown2BtnTxtStyle}
        renderDropdownIcon={(isOpened) => {
          return (
            <FontAwesome
              name={isOpened ? "chevron-up" : "chevron-down"}
              color={"#FFF"}
              size={18}
            />
          );
        }}
        dropdownIconPosition={"right"}
        dropdownStyle={styles.dropdown2DropdownStyle}
        rowStyle={styles.dropdown2RowStyle}
        rowTextStyle={styles.dropdown2RowTxtStyle}
      />

      <View style={styles.e}>
        <View style={styles.f}>
          <Text>သတို့သမီးမင်္ဂလာဝတ်စုံ</Text>
        </View>
      </View>

      <SelectDropdown
        data={countries}
        defaultValueByIndex={1}
        defaultValue={"England"}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
        }}
        defaultButtonText={"Select country"}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          return item;
        }}
        buttonStyle={styles.dropdown2BtnStyle}
        buttonTextStyle={styles.dropdown2BtnTxtStyle}
        renderDropdownIcon={(isOpened) => {
          return (
            <FontAwesome
              name={isOpened ? "chevron-up" : "chevron-down"}
              color={"#FFF"}
              size={18}
            />
          );
        }}
        dropdownIconPosition={"right"}
        dropdownStyle={styles.dropdown2DropdownStyle}
        rowStyle={styles.dropdown2RowStyle}
        rowTextStyle={styles.dropdown2RowTxtStyle}
      />
      <View style={styles.e}>
        <View style={styles.f}>
          <Text>သတို့သမီးမင်္ဂလာဝတ်စုံ</Text>
        </View>
      </View>

      <SelectDropdown
        data={countries}
        defaultValueByIndex={1}
        defaultValue={"England"}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
        }}
        defaultButtonText={"Select country"}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          return item;
        }}
        buttonStyle={styles.dropdown2BtnStyle}
        buttonTextStyle={styles.dropdown2BtnTxtStyle}
        renderDropdownIcon={(isOpened) => {
          return (
            <FontAwesome
              name={isOpened ? "chevron-up" : "chevron-down"}
              color={"#FFF"}
              size={18}
            />
          );
        }}
        dropdownIconPosition={"right"}
        dropdownStyle={styles.dropdown2DropdownStyle}
        rowStyle={styles.dropdown2RowStyle}
        rowTextStyle={styles.dropdown2RowTxtStyle}
      />
      <View style={styles.e}>
        <View style={styles.f}>
          <Text>မင်္ဂလာဝတ်စုံအတွက် ခန့်မှန်းအသုံးစရိတ်</Text>
        </View>
      </View>

      <SelectDropdown
        data={countries}
        defaultValueByIndex={1}
        defaultValue={"England"}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
        }}
        defaultButtonText={"Select country"}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          return item;
        }}
        buttonStyle={styles.dropdown2BtnStyle}
        buttonTextStyle={styles.dropdown2BtnTxtStyle}
        renderDropdownIcon={(isOpened) => {
          return (
            <FontAwesome
              name={isOpened ? "chevron-up" : "chevron-down"}
              color={"#FFF"}
              size={18}
            />
          );
        }}
        dropdownIconPosition={"right"}
        dropdownStyle={styles.dropdown2DropdownStyle}
        rowStyle={styles.dropdown2RowStyle}
        rowTextStyle={styles.dropdown2RowTxtStyle}
      />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <FontAwesome5 name="home" size={30} color="pink" />
      </TouchableOpacity>
    </View>
  );
};

export default FloralScreen;

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
  dropdown2BtnStyle: {
    width: "80%",
    height: 50,
    backgroundColor: "#444",
    borderRadius: 8,
  },
  dropdown2BtnTxtStyle: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "bold",
  },
  dropdown2DropdownStyle: {
    backgroundColor: "#444",
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  dropdown2RowStyle: { backgroundColor: "#444", borderBottomColor: "#C5C5C5" },
  dropdown2RowTxtStyle: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "bold",
  },
});
