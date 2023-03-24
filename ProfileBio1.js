import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import * as React from 'react';

export default function ProfileBio1({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.Upper}>
        {/* upper upper half */}
        <View
          style={{
            alignItems: "center",
            marginBottom: 50,
          }}
        >
          <Image
            style={{ height: 80, width: 250 }}
            source={require("./assets/logo.png")}
          />
        </View>
        {/* upper lower half */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 12,
          }}
        >
          <View style={{}}>
            <Image
              style={styles.tinyLogo}
              source={require("./assets/dots.png")}
            />
          </View>
          <View style={{}}>
            <Image
              style={styles.tinyLogo}
              source={require("./assets/dots.png")}
            />
             <View
            style={{
              backgroundColor: "#f0930c",
              height: 60,
              width: 60,
              marginTop: -50,
              marginLeft: 25,
              borderRadius: 50,
              
            }}
          ></View>
          </View>
        </View>
      </View>
      <StatusBar style="auto" />

      {/* Middle View  start*/}
      <View style={styles.middleView}>
        <View style={{}}>
          <Text style={{ fontSize: 25, marginVertical: 10,color: "#0da0dc", fontWeight:'500'}}>
          Quel est ton role?
          </Text>
        </View>
        <View style={{}}>
          <Text style={{ fontSize: 15, textAlign: "center",color: "#0da0dc",fontWeight:'400' }}>
          choisissez votre mode d'utilisation:{'\n'}Client ou Prestaire

          </Text>
        </View>

        <View style={styles.profileImgView} >
        <TouchableOpacity style={styles.touchProfileImg1}>
        <Image
              style={styles.profileImg1}
              source={require("./assets/profileImg1.png")}
            />
            <Text style={styles.profileText1}>Prestataire</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchProfileImg2}>
        <Image
              style={styles.profileImg2}
              source={require("./assets/profileImg2.png")}
            />
            <Text style={styles.profileText2}>Cliente</Text>
        </TouchableOpacity>

        </View>
      {/* Middle View  end*/}



      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#f6f6f6",
    alignItems: "center",
    // paddingBottom: "18.29%",
  },
  Upper: {
    justifyContent: "flex-end",
    paddingBottom: 20,
    backgroundColor: "#0da0dc",
    height: "47%",
    width: "100%",
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },

  tinyLogo: {
    width: 90,
    height: 90,
  },
  middleView: {
    marginTop: "-16.6%",
    backgroundColor: "#ffffff",
    height: "35%",
    width: "90.1%",
    // paddingBottom: "15.29%",
    alignItems: "center",
    borderRadius: 10,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 5,
  },
 profileImgView:{
    flexDirection:'row',
    padding:20
 },
 profileImg1:{
    height:70,
    width:60,
 },
 profileImg2:{
    height:60,
    width:70,
 },
 touchProfileImg1:{
    marginHorizontal:20,
    height:135,
    width:135,
    backgroundColor:"#f0930c",
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10


 },
 touchProfileImg2:{
    marginHorizontal:20,
    height:135,
    width:135,
    backgroundColor:"#ffffff",
    justifyContent:'center',
    alignItems:'center',
    borderColor:"#146194",
    borderWidth:2,
    borderRadius:10
 },
 profileText1:{
    color:'#ffffff',
    marginTop:10,
    fontSize:16,
    fontWeight:"400"
 },
 profileText2:{
    color:'#146194',
    marginTop:20,
    fontSize:16,
    fontWeight:"400"

 }
 
});
