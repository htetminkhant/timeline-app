import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./Screens/LoginScreen";
import LoginScreen_1 from "./Screens/LoginScreen_1";
import RegisterScreen from "./Screens/RegisterScreen";
import RegisterScreen_1 from "./Screens/RegisterScreen_1";
import HomeScreen from "./Screens/HomeScreen";
import Home_1 from "./Screens/Home_1";
import DressScreen from "./Screens/DressScreen";
import FloralScreen from "./Screens/FloralScreen";
import PhotoScreen from "./Screens/PhotoScreen";
import MakeupScreen from "./Screens/MakeupScreen";
import InvitationletterScreen from "./Screens/InvitationletterScreen";
import InvitationgiftScreen from "./Screens/InvitationgiftScreen";
import LocationScreen from "./Screens/LocationScreen";
import FoodScreen from "./Screens/FoodScreen";
import EventmanagerScreen from "./Screens/EventmanagerScreen";
import Profile from "./Screens/Profile";
import ApploadingScreen from "./Screens/ApploadingScreen";
import SetupProfile from "./Screens/SetupProfile";
import ImageFullScreen from "./Screens/ImageFullScreen";
import PostUpload from "./Screens/PostUpload";
import Weather from "./Screens/Weather";
import WeatherScreen from "./Screens/WeatherScreen";

const Stack = createNativeStackNavigator();

const App = (navigation) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Loading">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home_1"
          component={Home_1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login_1"
          component={LoginScreen_1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register_1"
          component={RegisterScreen_1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Dress"
          component={DressScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Floral"
          component={FloralScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Photo"
          component={PhotoScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Makeup"
          component={MakeupScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Invitationletter"
          component={InvitationletterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Invitationgift"
          component={InvitationgiftScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Location"
          component={LocationScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Food"
          component={FoodScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Eventmanager"
          component={EventmanagerScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: true, headerTitleAlign: "center" }}
        />
        <Stack.Screen
          name="Loading"
          component={ApploadingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Setup"
          component={SetupProfile}
          options={{ headerShown: true, headerTitleAlign: "center" }}
        />
        <Stack.Screen
          name="Image"
          component={ImageFullScreen}
          options={{ headerShown: true, headerTitleAlign: "center" }}
        />
        <Stack.Screen
          name="Post"
          component={PostUpload}
          options={{ headerShown: true, headerTitleAlign: "center" }}
        />
        <Stack.Screen
          name="Weather"
          component={Weather}
          options={{ headerShown: true, headerTitleAlign: "center" }}
        />
        <Stack.Screen
          name="WeatherScreen"
          component={WeatherScreen}
          options={{ headerShown: true, headerTitleAlign: "center" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
