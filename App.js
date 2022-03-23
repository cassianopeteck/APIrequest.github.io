import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';


export default function App() {
  function req(){
    //Requisição vai aqui:
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(function(json){
      alert(json.title);
    })
  }


  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>req()}><Text style={styles.text}>Clique Aqui!</Text></TouchableOpacity>
      <Text style={styles.text}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize: 35,
    color: 'white',
    fontWeight: 'bold'
  }
});
