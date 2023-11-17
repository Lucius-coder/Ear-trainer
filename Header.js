import { StyleSheet, Text, View, SafeAreaView, Button, Alert, FlatList, TouchableOpacity } from 'react-native';
import { MaterialIcons,FontAwesome} from '@expo/vector-icons';
export default function Header(){
  
  
  return(
    <View style={header.flexbox}>
    <Text style={[header.text,header.flex]}>
    TaskMaster
    </Text>
    <View style={header.flex}>
        <MaterialIcons name="search" size={24}  color="dodgerblue"/>
    </View>

  </View>
    );
}
let header=StyleSheet.create({
  text:{
    fontSize:25,
    marginLeft:15,
    flexGrow:4,
    color:"dodgerblue",
   
    
  },
  flexbox:{
    height:50,
   backgroundColor:"white",
    flexDirection:"row",
    alignItems:"center"
  },
  flex:{
    flex:1,
    alignItems:"center",
    
  }
  
})