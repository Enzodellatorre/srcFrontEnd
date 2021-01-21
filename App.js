import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View,TextInput, TouchableOpacity } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import SlidingPanel from 'react-native-sliding-panels';

export default function App() {
  const [valor,setValor]=useState('');
  const[periodo,setPeriodo]=useState('');
  const[dia,setDia]=useState('');
  const data1=Date();
  const tb={
    tableHead:[data1],
    tableTitle:['pré-café','pós-café','pré-almoco','pós-almoco','pré-jantar', 'pós-jantar'],
    tableData:[[getNiveisFromApi]]
  }
 //avalia valor recebido como parametro e retorna mensagem ao usuario
  function avaliaValor(valor){
     if(valor<54){
      alert("alerta de hipoglicemia nivel 2-requer açao imediata");
    }
    else if(valor>54 && valor<70){
      alert("alerta de hipoglicemia nivel 1-requer monitoramento");
    }
    else if(valor>70 && valor<180){
      alert("nivel de glicemia equilibrado");
    }
    else if(valor>180){
      alert("alerta de hiperglicemia nivel 1-alerta elevado");
    }
    else if(valor>250){
      alert("alerta de hiperglicemia nivel 2-requer açao imediata")
    }
  }
  //função de postar os niveis no banco
  async function postNiveis(){
    const req = await fetch(`http://localhost:3000/niveis`, {
      method: 'POST',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        valorNivel: valor,
        idPeriodo: periodo,
        idDia: dia
      })
    });
    
    if((valor=='') || (periodo=='') || (dia=='')){
      alert('falta campos a serem preenchidos')
    }
    const json = await req.json();
    avaliaValor(valor);
}
 //funçao de puxar dados do banco quando carregar o app
  function getNiveisFromApi (){
    fetch('http://yourPCip:3000/niveis')
    .then(response => response.json())
    .then(niveis => console.warn(niveis))
  }
getNiveisFromApi();
  //funçao de calcular a media glicemica do usuario
  function calcularMedia(){
    var media=0;
    var soma=0;
    const x = 0;

    for (var i = 0, len = tb.tableData.length; i < len; i++) {
      soma += Number(tb.tableData[i]);
    }
    media = soma/6;
    alert('Média: '+media);
    var valorMedia=media;
    avaliaValor(valorMedia);
  }
 
  return (
    <View style={styles.container}>
     
      <Table borderStyle={{borderWidth:1}}>
                <Row data={tb.tableHead} flexArr={[1,2,1,1]}style={styles.head} textStyle={styles.text}/> 
                <TableWrapper style={styles.wrapper}>
                    <Col data={tb.tableTitle} style={styles.title} heightArr={[28,28]}textStyle={styles.text}/>
                    <Rows data={tb.tableData} flexArr={[2,1,1]} style={styles.row} textStyle={styles.text}/>           
                </TableWrapper>
      </Table>
     
     <TextInput
                              placeholder="valor glicêmico" 
                              keyboardType="numeric"
                              value={valor}
                              onChangeText={(valor)=>setValor(valor)} 
                              style={styles.input}/>  
      
      <TextInput 
                          placeholder="periodo do dia" 
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
            
       <TouchableOpacity onPress={postNiveis} style={styles.button}>
         <Text style={styles.buttonText}>Inserir valores</Text>
         </TouchableOpacity>
       
       <TouchableOpacity 
       onPress={calcularMedia}
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
   
  input:{
    backgroundColor:'#121212',
    borderRadius:10,
    margin:15,
    padding:10,
    color:'#FFF',
    fontSize:23
  }
});
