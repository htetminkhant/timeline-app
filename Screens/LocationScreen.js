import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import Countdown from "./Countdown";

const App = () => {
  const [targetDate, setTargetDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [showTimer, setShowTimer] = useState(false);

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);

    if (selectedDate) {
      setTargetDate(selectedDate);
    }
  };

  const handleTimeChange = (event, selectedTime) => {
    setShowTimePicker(false);

    if (selectedTime) {
      setTargetDate(
        (prevDate) =>
          new Date(
            prevDate.setHours(
              selectedTime.getHours(),
              selectedTime.getMinutes()
            )
          )
      );
    }
  };

  const startTimer = () => {
    setShowTimer(true);
  };

  const editDate = () => {
    setShowTimer(false);
    setShowDatePicker(true);
  };

  const editTime = () => {
    setShowTimer(false);
    setShowTimePicker(true);
  };

  return (
    <View style={styles.container}>
      {showDatePicker && (
        <DateTimePicker
          testID="datePicker"
          value={targetDate}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}

      {showTimePicker && (
        <DateTimePicker
          testID="timePicker"
          value={targetDate}
          mode="time"
          display="default"
          is24Hour={true}
          onChange={handleTimeChange}
        />
      )}

      {showTimer ? (
        <View>
          <Countdown targetDate={targetDate} />
          <Button title="Edit Date" onPress={editDate} />
          <Button title="Edit Time" onPress={editTime} />
        </View>
      ) : (
        <View>
          <Button title="Select Date" onPress={() => setShowDatePicker(true)} />
          <Button title="Select Time" onPress={() => setShowTimePicker(true)} />
          <Button title="Start Timer" onPress={startTimer} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
