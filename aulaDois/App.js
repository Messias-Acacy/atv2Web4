import { StatusBar } from 'expo-status-bar';
import React, { cloneElement } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Input, Button, Avatar } from 'react-native-elements';
import { ScrollView } from 'react-native-web';



export function tela1() {
  return (
    <View style={{ width: "100%", height: "100%", flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View style={[css.borda]}>
        <Avatar
          rounded
          size="xlarge"
          source={{
            uri:
              'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          }}
        />

  <View style={{ width: "100%", }}>
  <Input inputStyle={{ backgroundColor: "#D3D3D3",width:"100%",margin:0,padding:0,borderWidth:0 }}
          label="Email"
        />

        <Input inputStyle={{ backgroundColor: "#D3D3D3" }}
          label="Senha"
        />

  </View>
       
        <View style={{ width: "100%"}}>
          <Button buttonStyle={{ backgroundColor: "green",width:"100%"}} style={{ marginBottom: "10px" }}
            title="Logar"
          />

          <Button buttonStyle={{ backgroundColor: "green" }}
            title="Cadastre-se"
          />


        </View>


        <Text>Esqueceu a senha</Text>

      </View>
    </View>
  );
}

const css = StyleSheet.create({
  borda: {
    width: "70%", height: "80%", backgroundColor: "white", alignItems: "center", justifyContent: "center"
  }
});




export function tela2() {
  return (
    <View style={{ width: "100%", height: "100%", flex: 1, alignItems: "center", justifyContent: "center" }}>
       <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Cadastrar</Text>
        </View>

      <View style={{ width: "70%", height: "75%", backgroundColor: "white", alignItems: "center", justifyContent: "center"}}>

       
        <View style={{ width: "100%" }}>
          <Input inputStyle={{ backgroundColor: "#D3D3D3" }} label="Nome" />
          <Input inputStyle={{ backgroundColor: "#D3D3D3" }} label="Email" />
          <Input inputStyle={{ backgroundColor: "#D3D3D3" }} label="Senha" />
          <Button buttonStyle={{ backgroundColor: "green", width: "100%" }} title="Solid Button" />
        </View>

      
      </View>
    </View>
  );
}

export function tela3(){
  return(

    <View style={{ width: "100%", height: "100%", flex: 1, alignItems: "center", justifyContent: "center" }}>
    <View style={styles.headerContainer}>
       <Text style={styles.headerText}>Esqueceu a senha</Text>
     </View>

   <View style={{ width: "70%", height: "75%", backgroundColor: "white", alignItems: "center", justifyContent: "center"}}>

    
     <View style={{ width: "100%" }}>
       <Input inputStyle={{ backgroundColor: "#D3D3D3" }} label="Senha" />
       <Button buttonStyle={{ backgroundColor: "green", width: "100%" }} title="Solid Button" />
     </View>

   
   </View>
 </View>


  );
}



const styles = StyleSheet.create({
  headerContainer: {

    backgroundColor: "green", 
    width: "100%", 
    height:"25%",
    alignItems: "center", 
    justifyContent: "center", 
  },
  headerText: {
    fontSize: 30, 
    textAlign: "center"
  },
  borda: {
    width: "70%",
    height: "80%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default tela1;
