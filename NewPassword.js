import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { Dimensions } from "react-native";
// import Icon from 'react-native-vector-icons/dist/FontAwesome';

// import iconFont from 'react-native-vector-icons/Fonts/FontAwesome.ttf';
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default function NewPassword() {
  return (
    <ScrollView
      contentContainerStyle={{
        height: windowHeight * 1.15,
        width: windowWidth,
      }}
    >
      <View style={styles.container}>
        <View style={styles.Upper}>
          <View
            style={{
              alignSelf: "flex-start",
              flex: 4,
              paddingLeft: 10,
              paddingTop: 130,
              
            }}
          >
            <Text style={{ fontSize: 22, color: "#f6f6f6", fontWeight: 500,marginBottom:10 }}>
              S'Renouveler le code secret
            </Text>
            <Text style={{ fontSize: 14, color: "#f6f6f6" }}>
              votre nouveau mot de passe doit être{'\n'}different des mots de passe
              précédemment{'\n'}utilisés
            </Text>
          </View>
          <View
            style={{
              flex: 1.5,
              alignItems: "flex-end",
              alignSelf: "flex-end",
              marginBottom: -7,
            }}
          >
            <Image
              style={styles.dottImage}
              source={require("./assets/dots.png")}
            />
            <View
              style={{
                backgroundColor: "#f0930c",
                height: 60,
                width: 60,
                marginTop: -50,
                marginRight: 3,
                borderRadius: 50,
              }}
            ></View>
          </View>
        </View>
        <StatusBar style="auto" />
        <View style={styles.inputField}>
          <TextInput style={styles.textInput} placeholder="nouveau code secret" />
          <TextInput style={styles.textInput} placeholder="confirmer le code secret" />
          <View style={styles.checkBoxView}>
            <Text style={styles.checkBoxText}>
           !  les deux codes secrets doivent etre identiques
            </Text>
          </View>
          <TouchableOpacity style={styles.SenregisterBtn}>
            <Text style={styles.SenregisterBtnText}>Renouveler le code secret</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f6f6f6",
    alignItems: "center",
  },
  Upper: {
    flexDirection: "row",
    paddingBottom: 20,
    backgroundColor: "#0da0dc",
    height: 300,
    width: windowWidth,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  dottImage: {
    width: 90,
    height: 90,
  },
  inputField: {
    marginTop: -46,
    paddingTop:10,
    backgroundColor: "#ffffff",
    height: 290,
    width: 350,
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
  textInput: {
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: "#f7f7f7",
    width: 320,
    marginTop: 16,
  },
  checkBoxView: {
    margin: 10,
  },
  checkBoxText: {
    fontSize: 14,
    color:'#0da0dc'
  },
  SenregisterBtn: {
    backgroundColor: "#f0930c",
    width: 320,
    marginTop: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  SenregisterBtnText: {
    color: "white",
    fontSize: 18,
    paddingVertical: 14,
  },
});
