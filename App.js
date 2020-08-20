import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.entradas}>
        <TextInput placeholder="valor" keyboardType="numeric" style={styles.input}/>
        <TextInput placeholder="periodo" keyboardType="numeric" style={styles.input}/>
        <TextInput placeholder="dia" keyboardType="numeric" style={styles.input}/> 
    </View>
       <TouchableOpacity onpress={()=>{}}>
         <Text style={styles.buttonText}>Inserir valores</Text>
         </TouchableOpacity>
       <TouchableOpacity onpress={()=>{}}>
         <Text style={styles.buttonText}>Calcular média</Text>
       </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  entradas:{
    flexDirection:'row'
  },
  input:{
    height:80,
    textAlign:'center',
    width:"30%",
    fontSize:30,
    marginTop:24
  },
  button:{
   backgroundColor:"#89ffa5",
   flexDirection:'row',
   width:"30%",
   height:30
  },
  buttonText:{
    alignSelf:'center',
    padding:30,
    fontSize:30,
    color:"#6dc4a4",
    fontWeight:'bold'
  },
});
