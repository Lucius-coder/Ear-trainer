import React, { useState } from 'react';
import { View, Button, Platform,Pressable,Text,StyleSheet} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Timer from "./Timer.js"
const MyDate= ({display,mode,taskName,value}) => {
   const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios'); // On iOS, show the picker again if a date is selected
   
      
    
          
    setDate(currentDate)

  };
  const showDatepicker = () => {
    setShow(true);
    return date
  };

  return (
    <View>
    <Timer date={date}/>
      <Pressable onPress={showDatepicker} style={styles.pressed} color="white">
      <Text style={styles.text}>{taskName}</Text>
      </Pressable>
      
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode} // You can change this to 'date' or 'time'
          is24Hour={true}
          display={display}
          onChange={onChange}
        />
      )}
    </View>
  );
};
const styles=StyleSheet.create({
  pressed:{
textAlign:"center",
backgroundColor:"dodgerblue",
padding:10,
color:"black",
borderRadius:30

  },
  text:{
    color:"white"
  }
})
export default MyDate;