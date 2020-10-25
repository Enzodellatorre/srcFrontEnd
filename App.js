import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View,TextInput, TouchableOpacity } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import SlidingPanel from 'react-native-sliding-panels';
export default function App() {
  const [valor,setValor]=useState('');
  const[periodo,setPeriodo]=useState('');
  const[dia,setDia]=useState('');
  const tb={
    tableHead:['Domingo'],
    tableTitle:['Antes do café','depois do café','antes do almoco','depois do almoco','antes do jantar', 'depois do jantar'],
    tableData:[[90],
               [85],
               [93],
               [88],
               [92],
               [89]
  ]
  }
  function handleSubmit(){
    alert('valor: '+valor);
    alert('periodo: '+periodo);
    alert('dia: '+dia);
  }
  
  
    function postNiveis(){
  fetch('localhost:3000/nivel',
  {
    method:'POST',
    headers:{
      Accept:'application/json',
      'Content-Type':'application-json'
    },
    body:JSON.stringify({
      valorNivel,
      idPeriodo,
      idDia
    })
  });
}
 
  const getNiveisFromApiAsync=async ()=>{
    try{
      let response=await fetch('localhost:3000/niveis');
    let json=await response.json();
    return json.niveis;
    }catch(error){
      console.error(error);
    }
  }
  
  /*
  function calcularMedia({{tableData}}){
    var media=0;
    var soma=0;
    forEach(numero){
      soma+= numero;
      media=(soma)/6;
      return media;
    };
  */
  return (
    <View style={styles.container}>
      <Table borderStyle={{borderWidth:1}}>
                <Row data={tb.tableHead} flexArr={[1,2,1,1]}style={styles.head} textStyle={styles.text}/>
                <TextInput 
                          placeholder="dia" 
                          keyboardType="numeric"
                          value={dia}
                          onChangeText={(dia)=>setDia(dia)}  
                          style={styles.input}/>
                
                <TableWrapper style={styles.wrapper}>
                    <Col data={tb.tableTitle} style={styles.title} heightArr={[28,28]}textStyle={styles.text}/>
                    <TextInput 
                          placeholder="periodo" 
                          keyboardType="numeric"
                          value={periodo}
                          onChangeText={(periodo)=>setPeriodo(periodo)}  
                          style={styles.input}/>
                    
                    <Rows data={tb.tableData} flexArr={[2,1,1]} style={styles.row} textStyle={styles.text}/>
                    <TextInput
                              placeholder="valor" 
                              keyboardType="numeric"
                              value={valor}
                              onChangeText={(valor)=>setValor(valor)} 
                              style={styles.input}/>
                              
                </TableWrapper>
            </Table>
      <SlidingPanel
      headerLayoutHeight={100}
      headerLayout={()=>
      <View style={styles.headerLayoutStyle}>
          <Text style={styles.text}>{tb.tableHead}</Text>
      </View>
      }
      />
       
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
  head:{
    height:40,
    backgroundColor:'#f1f8ff'
},
input:{
  alignSelf:'right',
  alignItems:'right',
  padding:10
},
wrapper:{
    flexDirection:'row'
},
title:{
    flex:1,
    backgroundColor:'#f6f8fa'
},
row:{
    height:28
},
text:{
    textAlign:'center'
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
   headerLayoutStyle: {
    width:100, 
    height: 100, 
    backgroundColor: 'orange', 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  slidingPanelLayoutStyle: {
    width:100, 
    height:100, 
    backgroundColor: '#7E52A0', 
    justifyContent: 'center', 
    alignItems: 'center',
  }
});
