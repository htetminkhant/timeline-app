// Weather.js

import React, { useState } from "react";
import { View, Text, Pressable, TextInput } from "react-native";
import { styles } from "./Styles";
import { getWeather, getForecast } from "../config/WeatherApi";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);

  const handleGetWeather = () => {
    getWeather(city, setWeatherData, setForecastData);
  };

  const handleGetForecast = () => {
    getForecast(city, setWeatherData, setForecastData);
  };

  return (
    <View style={styles.centeredContent}>
      <Text style={styles.title}>Today Weather!</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your city name......"
        value={city}
        onChangeText={setCity}
      />

      <Pressable
        onPress={handleGetWeather}
        style={({ pressed }) => [
          styles.button,
          {
            backgroundColor: pressed ? "lightblue" : "pink",
          },
        ]}
      >
        <Text style={styles.buttonText}>Weather</Text>
      </Pressable>
      <Text> </Text>
      <Pressable
        onPress={handleGetForecast}
        style={({ pressed }) => [
          styles.button,
          {
            backgroundColor: pressed ? "lightblue" : "pink",
          },
        ]}
      >
        <Text style={styles.buttonText}>Forecast</Text>
      </Pressable>

      {weatherData && (
        <View style={styles.weatherInfo}>
          <Text style={styles.weatherText}>
            <Text style={styles.heading}>Temperature:</Text>{" "}
            {weatherData.temperature} °C
          </Text>
          <Text style={styles.weatherText}>
            <Text style={styles.heading}>Description:</Text>{" "}
            {weatherData.description}
          </Text>
        </View>
      )}

      {forecastData && (
        <View style={styles.weatherInfo}>
          <Text style={styles.heading}>
            Forecast for the next few hours: {"\n"}
          </Text>
          {forecastData.map((forecastItem, index) => (
            <Text key={index} style={styles.weatherText}>
              <Text style={styles.subheading}>Time:</Text>{" "}
              {new Date(forecastItem.dt * 1000).toLocaleTimeString()},{" "}
              <Text style={styles.subheading}>Temperature:</Text>{" "}
              {(forecastItem.main.temp - 273.15).toFixed(2)} °C,{" "}
              <Text style={styles.subheading}>Description:</Text>{" "}
              {forecastItem.weather[0].description}
            </Text>
          ))}
        </View>
      )}
    </View>
  );
};

export default Weather;
