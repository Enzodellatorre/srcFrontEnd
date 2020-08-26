import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View,TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [valor,setValor]=useState('');
  const[periodo,setPeriodo]=useState('');
  const[dia,setDia]=useState('');
  function handleSubmit(){
    alert('valor: '+valor);
    alert('periodo: '+periodo);
    alert('dia: '+dia);
  }
  return (
    <View style={styles.container}>
      <View style={styles.entradas}>
        <TextInput 
        placeholder="valor" 
        keyboardType="numeric"
        value={valor}
        onChangeText={(valor)=>setValor(valor)} 
        style={styles.input}/>
        <TextInput 
        placeholder="periodo" 
        keyboardType="numeric"
        value={periodo}
        onChangeText={(periodo)=>setPeriodo(periodo)}  
        style={styles.input}/>
        <TextInput 
        placeholder="dia" 
        keyboardType="numeric"
        value={dia}
        onChangeText={(dia)=>setDia(dia)}  
        style={styles.input}/> 
    </View>
       <TouchableOpacity onpress={handleSubmit} style={styles.button}>
         <Text style={styles.buttonText}>Inserir valores</Text>
         </TouchableOpacity>
       <TouchableOpacity 
       onpress={()=>{}}
       style={styles.button}
       >
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
    justifyContent:'center',
    alignItems:'center',
    margin:15,
    backgroundColor:'#41AeF4',
    padding:10
   },
   buttonText:{
     alignSelf:'center',
     padding:30,
     fontSize:25,
     color:"#FFF",
     fontWeight:'bold'
   },
});
