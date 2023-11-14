import { StyleSheet, Text, View, Button, Alert, FlatList, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Timer from "./Timer.js"
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import DateTimePicker from '@react-native-community/datetimepicker';

import MyDate from './Date.js'
export default function AddTask() {
  let [hour, setHour] = useState()
  let [minutes, setMinutes] = useState()
  let [seconds, setSeconds] = useState()
  let [days, setDays] = useState()
  let date = new Date()

  return (
    <ScrollView >

      <View style={styles.flexCol}>
        <Text style={styles.textLarge}>Set how long the task would start</Text></View>
      <View style={styles.flexCol}>
        <MyDate display="spinner" mode="time" taskName="set task duration" />
      </View>
      <View style={styles.flexCol}>
        <View >
      
      </View>
      <View style={styles.flexCol}><Text style={styles.textLarge}>Set when the task would end</Text>
      <MyDate mode="time" display="default" taskName="start task duration" />
  
      { /*  <FlatList data={days}/> */}
</View>
<View>
<Timer date={date}/>
</View>
<View>
    <Text style={styles.textLarge}>Set the name of task</Text>
        </View>
        <TextInput style={[styles.input, { width: "90%" }]} placeholder="name of task" />
        </View>
    </ScrollView>
  )
}
let styles = StyleSheet.create({
  flexRow: {
    alignItems: "center",
    flexDirection: "row",
    margin: 15,
    gap: 2
  },
  input: {
    padding: 10,
    fontSize: 20,
    borderRadius: 25,
    backgroundColor: "rgba(0,0,0,0.03)",
    textAlign: "center",



  },
  textLarge: {
    fontSize: 20,
    marginBottom: 15
  },
  flex: {
    flex: 1
  },
  flexCol: {
    alignItems: "center",
    justifyContent: "center"
  },
  textAlign: {
    textAlign: "center"
  },
  button: {
    alignItems: "center",
    backgroundColor: "dodgerblue",
    padding: 10,
    borderRadius: 30,
    width: "50%",
    justifyContent: "center",
    margin: 15,


  }


})