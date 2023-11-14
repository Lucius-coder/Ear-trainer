
import { StyleSheet, Text, View, Button, Alert, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import AddTask from "./AddTask.js"
import Header from "./Header.js"
import Timer from "./Timer.js"
export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>
      <Header />

      <AddTask />
      
    </SafeAreaView>

  );
}
