import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Input, Button, Avatar } from 'react-native-elements';
import { ScrollView } from 'react-native-web';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ListItem } from 'react-native-elements';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import {Alert } from 'react-native';
import { useEffect } from 'react';


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
  const [email,setEmail] = useState('')
  const [senha,setSenha] = useState('')
  
  let enviar = () => {
    axios.get('http://localhost:3000/usuarios')
    .then(response => {
  
      const usuarios = response.data;

      
   
      usuarios.forEach(usuario => {
        if(usuario.email == email && usuario.senha == senha){
          console.log(usuario.email)
          navigation.navigate('ListaContatos')
        }
        console.log(usuario.email)
      });
      
    })
    .catch(error => {
      console.error("Erro ao buscar usuários:", error);
      console.log("Cadastro não encontrado!")
    });


  }
 

  
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
            label="email"  
            value={email}
            onChangeText={setEmail}
          />

          <Input inputStyle={{ backgroundColor: "#D3D3D3" }}
            label="senha" value={senha}
            onChangeText={setSenha}
          />
        </View>

        <View style={{ width: "95%" }}>
          <Button buttonStyle={{ backgroundColor: "green", width: "100%" }} style={{ marginBottom: "10px" }}
            title="Logar" onPress={enviar} 
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



function ListaContatos({navigation}) {
  const [list, setList] = useState([]);
  
  useEffect(() => {
    
    const fetchContatos = async () => {
      try {
        const response = await axios.get('http://localhost:3000/contatos');
        setList(response.data); // Atualiza o estado 
      } catch (error) {
        console.error("Erro ao buscar os contatos:", error);
      }
    };

    fetchContatos(); 
  }, []);

  return (
    <View style={{ width: "100%", height: "100%", flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ScrollView style={{ width: "100%" }}>
        {list.map((l, i) => (
          <ListItem key={i} bottomDivider  
          onPress={()=>navigation.navigate('AlterarContato',{id:l.id,name:l.nome,email:l.email,telefone:l.telefone})} >
            <Avatar source={{ uri:"https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"}} />
            <ListItem.Content>
              <ListItem.Title>{l.nome}</ListItem.Title>
              <ListItem.Subtitle>{l.telefone}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        ))}
      </ScrollView>
    </View>
  );
}


function Usuario({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');

  const enviarUsuario = () => {
    axios.post("http://localhost:3000/usuarios", {
      nome, email, cpf, senha
    })
    .then((response) => {
      Alert.alert("Sucesso", "Dados salvos com sucesso!");
      navigation.goBack();
    })
    .catch((error) => {
      Alert.alert("ERRO", "Ocorreu um erro ao salvar");
      console.error(error);
    });
  };

  return (
    <View style={{ width: "100%", height: "100%", flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View style={{ width: "95%" }}>
        <Input 
          inputStyle={{ backgroundColor: "#D3D3D3" }} 
          label="Nome"
          value={nome}
          onChangeText={setNome}
        />
        <Input 
          inputStyle={{ backgroundColor: "#D3D3D3" }} 
          label="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <Input 
          inputStyle={{ backgroundColor: "#D3D3D3" }} 
          label="Cpf"
          value={cpf}
          onChangeText={setCpf}
          keyboardType="numeric"
        />
        <Input 
          inputStyle={{ backgroundColor: "#D3D3D3" }} 
          label="Senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry={true}
        />
        <Button 
          buttonStyle={{ backgroundColor: "green", width: "100%" }} 
          title="Salvar" 
          onPress={enviarUsuario}
        />
      </View>
    </View>
  );
}




function Contato({navigation}) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  
  const enviarContato = () => {
    axios.post("http://localhost:3000/contatos", {
      nome, email, telefone
    })
    .then((response) => {
      Alert.alert("Sucesso", "Dados salvos com sucesso!");
      navigation.navigate('ListaContatos');
    })
    .catch((error) => {
      Alert.alert("ERRO", "Ocorreu um erro ao salvar");
      console.error(error);
    });
  };

  return (
    <View style={{ width: "100%", height: "100%", flex: 1, alignItems: "center", justifyContent: "center" }}>
    

      <View style={{ width: "95%", height: "75%", backgroundColor: "white", alignItems: "center", justifyContent: "center" }}>
        <View style={{ width: "100%" }}>
          <Input inputStyle={{ backgroundColor: "#D3D3D3" }} label="Nome"  value={nome}
          onChangeText={setNome} />
          <Input inputStyle={{ backgroundColor: "#D3D3D3" }} label="Email" value={email}
          onChangeText={setEmail} />
          <Input inputStyle={{ backgroundColor: "#D3D3D3" }} label="Telefone" value={telefone}
          onChangeText={setTelefone} />
          <Button buttonStyle={{ backgroundColor: "green", width: "100%" }} title="Salvar" onPress={enviarContato} />
        </View>
      </View>
    </View>
  );
}

function AlterarContato({route,navigation}) {
  
  const [nome, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const { id } = route.params;

  useEffect(() => {
    setName(route.params.name);
    setEmail(route.params.email);
    setTelefone(route.params.telefone);
  }, []);


  const putContatos = () =>{
    axios.put(`http://localhost:3000/contatos/${id}`,
      {id,nome,email,telefone}).then((response)=>{
      console.log("dados alterados com sucesso!")
      navigation.navigate('ListaContatos');
    }).catch((error)=>{
      console.log("erro!")
    }
  )
  }


  const deleteContatos = () =>{
    axios.delete(`http://localhost:3000/contatos/${id}`)
     .then((response)=>{
      console.log("dados Excluidos")
      navigation.navigate('ListaContatos');
    }).catch((error)=>{
      console.log("erro!")
    }
  )
  }
  return (
  
    

      <View style={{ width: "100%", height: "75%", backgroundColor: "white", alignItems: "center", justifyContent: "center" }}>
        <View style={{ width: "95%" }}>
          <Input  value={nome} onChangeText={setName}  inputStyle={{ backgroundColor: "#D3D3D3" }} label="Nome" />
          <Input value={email} onChangeText={setEmail} inputStyle={{ backgroundColor: "#D3D3D3" }} label="Email" />
          <Input  value={telefone} onChangeText={setTelefone} inputStyle={{ backgroundColor: "#D3D3D3" }} label="Telefone" />
          <Button buttonStyle={{ backgroundColor: "green", width: "100%" }} title="Alterar"  style={{marginBottom:"2%"}} onPress={putContatos}/>
          <Button buttonStyle={{ backgroundColor: "green", width: "100%" }} onPress={deleteContatos} title="Excluir" />
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
