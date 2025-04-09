import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Input, Button, Avatar } from 'react-native-elements';
import { ScrollView } from 'react-native-web';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ListItem } from 'react-native-elements';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native'; // Importando o hook useNavigation

function HeaderRight() {
  const navigation = useNavigation(); // Acesso ao hook useNavigation

  return (
    <AntDesign
      style={{ marginRight: 10 }} 
      name="pluscircleo" 
      size={24} 
      color="black" 
      onPress={() => navigation.navigate('Contato')} // Navegar para a tela 'login'
    />
  );
}


function HeaderLeftLogin() {
  const navigation = useNavigation(); 

  return (
    <AntDesign name="caretleft" size={24} color="black" onPress={() => navigation.navigate('Login')}/>
  );
}

function HeaderLeftContato() {
  const navigation = useNavigation(); 

  return (
    <AntDesign name="caretleft" size={24} color="black" onPress={() => navigation.navigate('ListaContatos')}/>
  );
}



function Login({ navigation }) {
  return (
    <View style={{ width: "100%", height: "100%", flex: 1, alignItems: "center", justifyContent: "center" }}>
   
        <Avatar
          rounded
          size="xlarge"
          source={{
            uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          }}
        />

        <View style={{ width: "95%" }}>
          <Input inputStyle={{ backgroundColor: "#D3D3D3", width: "100%", margin: 0, padding: 0, borderWidth: 0 }}
            label="Email"
          />

          <Input inputStyle={{ backgroundColor: "#D3D3D3" }}
            label="Senha"
          />
        </View>

        <View style={{ width: "95%" }}>
          <Button buttonStyle={{ backgroundColor: "green", width: "100%" }} style={{ marginBottom: "10px" }}
            title="Logar" onPress={() => navigation.navigate('ListaContatos')} 
          />

          <Button buttonStyle={{ backgroundColor: "green" }}
            title="Cadastre-se" onPress={() => navigation.navigate('Usuario')}
          />
        </View>

        <Text>Esqueceu a senha</Text>
     
    </View>
  );
}

const css = StyleSheet.create({
  borda: {
    width: "95%", height: "80%", backgroundColor: "white", alignItems: "center", justifyContent: "center"
  }
});

const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    email:"falso@naoexiste.com",
    number: '98765432'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    email:"falso2@naoexiste.com",
    number: '12345678'
  },
  {
    name: 'Messias',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    email:"falso3@naoexiste.com",
    number: '40024002'
  },
];

function ListaContatos({navigation}) {

  return (
    <View style={{ width: "100%", height: "100%", flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ScrollView style={{ width: "100%" }}>
        {list.map((l, i) => (
          <ListItem key={i} bottomDivider  
          onPress={()=>navigation.navigate('AlterarContato',{name:l.name,email:l.email,telefone:l.number})} >
            <Avatar source={{ uri: l.avatar_url }} />
            <ListItem.Content>
              <ListItem.Title>{l.name}</ListItem.Title>
              <ListItem.Subtitle>{l.number}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        ))}
      </ScrollView>
    </View>
  );
}

function Usuario() {
  return (
    <View style={{ width: "100%", height: "100%", flex: 1, alignItems: "center", justifyContent: "center" }}>
      

        <View style={{ width: "95%" }}>
          <Input inputStyle={{ backgroundColor: "#D3D3D3" }} label="Nome" />
          <Input inputStyle={{ backgroundColor: "#D3D3D3" }} label="Email" />
          <Input inputStyle={{ backgroundColor: "#D3D3D3" }} label="Cpf" />
          <Input inputStyle={{ backgroundColor: "#D3D3D3" }} label="Senha" />
          <Button buttonStyle={{ backgroundColor: "green", width: "100%" }} title="Salvar" />
        </View>
    
    </View>
  );
}




function Contato() {
  return (
    <View style={{ width: "100%", height: "100%", flex: 1, alignItems: "center", justifyContent: "center" }}>
    

      <View style={{ width: "95%", height: "75%", backgroundColor: "white", alignItems: "center", justifyContent: "center" }}>
        <View style={{ width: "100%" }}>
          <Input inputStyle={{ backgroundColor: "#D3D3D3" }} label="Nome" />
          <Input inputStyle={{ backgroundColor: "#D3D3D3" }} label="Email" />
          <Input inputStyle={{ backgroundColor: "#D3D3D3" }} label="Telefone" />
          <Button buttonStyle={{ backgroundColor: "green", width: "100%" }} title="Salvar" />
        </View>
      </View>
    </View>
  );
}

function AlterarContato({route}) {
  const {name,email,telefone} = route.params
  return (
  
    

      <View style={{ width: "100%", height: "75%", backgroundColor: "white", alignItems: "center", justifyContent: "center" }}>
        <View style={{ width: "95%" }}>
          <Input value={name} inputStyle={{ backgroundColor: "#D3D3D3" }} label="Nome" />
          <Input value={email} inputStyle={{ backgroundColor: "#D3D3D3" }} label="Email" />
          <Input  value={telefone} inputStyle={{ backgroundColor: "#D3D3D3" }} label="Telefone" />
          <Button buttonStyle={{ backgroundColor: "green", width: "100%" }} title="Alterar"  style={{marginBottom:"2%"}}/>
          <Button buttonStyle={{ backgroundColor: "green", width: "100%" }} title="Excluir" />
        </View>
   
    </View>
  );
}




const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "green",
    width: "100%",
    height: "25%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
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

const Stack = createNativeStackNavigator();

function app() {
  return (
    <NavigationContainer>
      <Stack.Navigator style={{width:"100%"}}>
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ headerShown: false }} 
        />
        
        <Stack.Screen 
          name="ListaContatos" 
          component={ListaContatos} 
          options={{
            headerTitleAlign: 'center',
            headerRight: () => <HeaderRight />,  // Usando o componente HeaderRight
            headerLeft: () => null,  // Isso remove a seta de "voltar"
            headerStyle: {
              backgroundColor: '#27ae60', // Verde (troque para a cor que desejar)
            }
          
          }} 
        />
        
        <Stack.Screen 
          name="Usuario" 
          component={Usuario} 
          options={{  
           headerTitleAlign: 'center'
            
            ,headerLeft: () => <HeaderLeftLogin/>,headerStyle: {
              backgroundColor: '#27ae60', // Verde (troque para a cor que desejar)
            }}}
        />

<Stack.Screen 
          name="Contato" 
          component={Contato} 
          options={{  headerTitleAlign: 'center',
            headerLeft: () => <HeaderLeftContato/>,headerStyle: {
              backgroundColor: '#27ae60', // Verde (troque para a cor que desejar)
            }
           
          }
          }
        />
        <Stack.Screen  name = "AlterarContato" component={AlterarContato}  options={{  headerTitleAlign: 'center',
            headerLeft: () => <HeaderLeftContato/>,
            headerStyle: {
              backgroundColor: '#27ae60', // Verde (troque para a cor que desejar)
            } 
          }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default app;
