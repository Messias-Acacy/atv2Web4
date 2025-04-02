import { StatusBar } from 'expo-status-bar';
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import {
  Button,
  ButtonText,
  ButtonSpinner,
  ButtonIcon,
  ButtonGroup,
} from '@/components/ui/button';


import {
  Avatar,
  AvatarBadge,
  AvatarFallbackText,
  AvatarImage,
} from "@/components/ui/avatar"

import { Input, InputField } from "@/components/ui/input"





function App() {
  return (
    <GluestackUIProvider mode="light"><View style={styles.container}>

     <View style={{marginBottom:"2vh",width:"100"}}><Avatar size="2xl" >
      <AvatarFallbackText>Jane Doe</AvatarFallbackText>
      <AvatarImage
        source={{
          uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        }}
      />
      <AvatarBadge />
    </Avatar></View>

    <View style={{marginBottom:"2vh"}}>
    <Text className="text-typography-500">Email</Text>
      <Input
      variant="outline"
      size="xl"
      isDisabled={false}
      isInvalid={false}
      isReadOnly={false}
    >
      <InputField placeholder="Enter Text here..." />
    </Input></View>
            
    
    <View style={{marginBottom:"2vh"}}>
    <Text className="text-typography-500">Senha</Text>
      <Input
      variant="outline"
      size="xl"
      isDisabled={false}
      isInvalid={false}
      isReadOnly={false}
    >
      <InputField placeholder="Enter Text here..." />
    </Input></View>
    <View style={{width:"260px"}}>
    <Button size="lg" variant="solid" action="primary" style={{marginBottom:"2vh"}}>
      <ButtonText>Logar</ButtonText>
    </Button>
    </View>
    
    
    <View style={{width:"260px"}}>
    <Button size="lg" variant="solid" action="primary" style={{marginBottom:"2vh"}}>
      <ButtonText>Cadastrar</ButtonText>
    </Button>
    </View>
    <Text>Esqueceu a senha</Text>


      </View></GluestackUIProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:"100%",
    height:"100%",
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function App2(){

  return(
    <GluestackUIProvider mode="light"><View style={styles.container}>

    
    <View style={{flex:1, justifyContent:"center",alignItems:"center",backgroundColor:"green",width:"100%",marginBottom:"20vh"}}><Heading>CADASTRO</Heading></View>

<View style={{marginBottom:"2vh", flex: 5}}>
<Text className="text-typography-500">Nome</Text>
      <Input
      variant="outline"
      size="xl"
      isDisabled={false}
      isInvalid={false}
      isReadOnly={false}
    >
      <InputField placeholder="Enter Text here..." />
    </Input>


    <Text className="text-typography-500">Email</Text>
      <Input
      variant="outline"
      size="xl"
      isDisabled={false}
      isInvalid={false}
      isReadOnly={false}
    >
      <InputField placeholder="Enter Text here..." />
    </Input>



    <Text className="text-typography-500">Senha</Text>
      <Input style={{marginBottom:"2vh"}}
      variant="outline"
      size="xl"
      isDisabled={false}
      isInvalid={false}
      isReadOnly={false}
    >
      <InputField placeholder="Enter Text here..." />
    </Input>
    <View style={{width:"260px"}}>
    <Button size="lg" variant="solid" action="primary" style={{marginBottom:"2vh"}}>
      <ButtonText>Cadastrar</ButtonText>
    </Button>
    </View>
    </View>
            
    
    
    
    


      </View></GluestackUIProvider>


  );
  
}



function App3(){
  return(
    <GluestackUIProvider mode="light"><View style={styles.container}>

    
    <View style={{flex:1, justifyContent:"center",alignItems:"center",backgroundColor:"green",width:"100%",marginBottom:"20vh"}}><Heading>Esqueceu a senha</Heading></View>

<View style={{marginBottom:"2vh", flex: 4}}>
<Text className="text-typography-500">Nome</Text>
      <Input style={{marginBottom:"2vh"}}
      variant="outline"
      size="xl"
      isDisabled={false}
      isInvalid={false}
      isReadOnly={false}
    >
      <InputField placeholder="Enter Text here..." />
    </Input>


   
    <Button size="lg" variant="solid" action="primary">
      <ButtonText>Hello World!</ButtonText>
    </Button>
    </View>
            


      </View></GluestackUIProvider>


  );
  
}
export default App2;