import {StyleSheet,Text,View,Button} from "react-native"
import {MaterialIcons} from "@expo/vector-icons"
import AddTask from "./AddTask.js"
export default function Timer({date}){
  
  return(
    <View>
        <View style={timer.flex}>
    <Text style={timer.text}>{date.toLocaleTimeString()}</Text>
    
     
    </View>
    </View>
    

    )
    
}
let timer=StyleSheet.create({
  flex:{
    flexDirection:"row",
    height:50,
  
    alignItems:"center",
    justifyContent:"center"
  },text:{
    fontSize:40
  }
})