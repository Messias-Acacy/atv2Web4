import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Avatar } from 'react-native-elements';
import axios from 'axios';
import { StyleSheet, TextInput } from 'react-native';
import { ScrollView } from 'react-native';
import { ListItem} from 'react-native-elements'
import { Image } from 'react-native-elements';
import { useState, useEffect } from 'react';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function HomeScreen() {
  const [list, setList] = useState([]);
  useEffect(() => {
    const fetchDoutor = async () => {
      try {
        const response = await axios.get('http://localhost:3000/doutores');
        setList(response.data); // Atualiza o estado 
      } catch (error) {
        console.error("Erro ao buscar os contatos:", error);
      }
    };

  fetchDoutor(); 
}, []);



  return (
    <View style={{ flex: 1, height: "100vh",backgroundColor:"#F2F2F2" }}>
      <View style={[styles.header]}>
        <View style={[styles.iconAndText]}>
          <Avatar
            rounded
            size="medium"
            source={{
              uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
            }}
          />
          <View >
            <Text style={{ color: "white", fontWeight: "bold", fontSize: "1.2em" }} >Welcome</Text>
            <Text style={{ color: "white", fontSize: "1em" }}  >Dani Martinez</Text>
          </View>
        </View>
        <View style={styles.searchContainer}>
         
          <TextInput
            style={styles.searchInput}
            placeholder="Search doctor"
            placeholderTextColor="#aaa"
          />
           <Ionicons name="search" size={20} color="#aaa" style={styles.searchIcon} />
</View>

      </View>


      {/* MAIN */}

      <View style={{ paddingLeft: "20px", paddingRight: "20px", paddingTop: "10px"}}>
        <View>
          {/* CATEGORIAL E SHOW ALL */}
          <View style={{ justifyContent: "space-between", flex: 1, flexDirection: "row",marginBottom:"1vh" }}>
            <Text>Categories</Text>
            <Text>Show all</Text>

          </View>

          {/* FOTOS */}
          <View style={{flexWrap:"wrap",flexDirection:"row", gap:"10px",justifyContent:"center"}}>
            <Image
              source={{ uri: "None"}}
              style={{ width: 100, height: 100,borderRadius:"10px" }}
      
            />
             <Image
              source={{ uri: "None"}}
              style={{ width: 100, height: 100,borderRadius:"10px" }}
      
            />
              <Image
              source={{ uri: "None"}}
              style={{ width: 100, height: 100,borderRadius:"10px" }}
      
            />
              <Image
              source={{ uri: "None"}}
              style={{ width: 100, height: 100,borderRadius:"10px" }}
      
            />
              <Image
              source={{ uri: "None"}}
              style={{ width: 100, height: 100,borderRadius:"10px" }}
      
            />
              <Image
              source={{ uri: "None"}}
              style={{ width: 100, height: 100,borderRadius:"10px" }}
      
            />

          </View>

          <Text style={{marginTop:"2vh",marginBottom:"1.5vh"}}>
            Top doctors
          </Text>
          
          {/* scroll view com doutores */}
          <View style={{height:"25vh",width:"100%", marginBottom:"30px"}}> 
          <ScrollView>
             
                <View style={{paddingBottom:"10px"}}>
                {list.map((l, i) => (
                 <ListItem key={i} containerStyle={{ marginBottom: 10, borderRadius: 10, backgroundColor: '#fff' }}>
                  
                    <Avatar   rounded size={60} source={{ uri:"https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"}} />
                    <ListItem.Content>
                      <ListItem.Title>{l.nome}</ListItem.Title>
                      <ListItem.Subtitle>{l.especialidade}</ListItem.Subtitle>
                      <ListItem.Subtitle>{l.rate}</ListItem.Subtitle>
                    </ListItem.Content>
                  </ListItem>
                ))}
                </View>
                      
          </ScrollView>
       
          </View>
         
       
        </View>


       
      </View>
      
                {/*FOOTER  */}
                <View style  = {{backgroundColor:"#5A66FF",width:"100%", flexDirection:"row",height:"10%"
                  ,justifyContent:"space-evenly",alignItems:"center",alignSelf:"center",marginVertical:"auto",
                 
                }}>
                <Ionicons name="home-outline" size={50} color="white" />
                <FontAwesome5 name="calendar-alt" size={50} color="black" />
                <MaterialCommunityIcons name="stethoscope" size={50} color="black" />
                <MaterialIcons name="account-circle" size={50} color="black" />
                
                </View>
    </View>
  );
}

const styles = StyleSheet.create({
  iconAndText: {
    flexDirection: "row",
    gap: "20px",
    marginBottom: "2px",

  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 15,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 16,
  },
  header: {
    paddingTop:"40px",
    backgroundColor: "#5A66FF",
    borderEndEndRadius: "10px",
    borderEndStartRadius: "10px",
    padding: "2vh",

    height:"200px"
  },
  searchBox: {

    height: "50%",
    marginTop: 15,
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});