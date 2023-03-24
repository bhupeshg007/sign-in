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
  navigation
} from "react-native";
import { Dimensions } from "react-native";
// import Icon from 'react-native-vector-icons/dist/FontAwesome';

// import iconFont from 'react-native-vector-icons/Fonts/FontAwesome.ttf';
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default function ProfileBio2() {
  return (
    <ScrollView
      contentContainerStyle={{
        width: windowWidth,
      }}
    >
      <View style={styles.container}>
        <View style={styles.Upper}>
        <TouchableOpacity
        onPress={()=>navigation.goBack()}
        >
          <Image
            style={styles.arrowIcon}
            source={require("./assets/arrow.png")}
          />
          </TouchableOpacity>
          <View
            style={{
              paddingHorizontal: 70,
            }}
          >
            <Text style={{ fontSize: 23, color: "#f6f6f6", fontWeight: 500 }}>
              Prestataire profil
            </Text>
          </View>
        </View>

        <View style={styles.headingView}></View>
        <View style={styles.inputField}>
          <Text style={styles.heading}>On fait{"\n"}connaissance</Text>
          <TextInput style={styles.textInput} placeholder="Prénom" />
          <TextInput style={styles.textInput} placeholder="Nom defamille" />
          <TextInput
            style={styles.textInput}
            placeholder="Numéro de téléphone"
          />
          <TextInput style={styles.textInput} placeholder="Adresse e-mail" />
          <TextInput style={styles.textInput} placeholder="Ville" />

          <TextInput style={styles.textInput} placeholder="Zone" />
          <TextInput style={styles.textInput} placeholder="Catégoties" />
          <TextInput
            style={styles.textInput}
            placeholder="Sub-catégoties"
          />
          
          <TextInput style={styles.textInput} placeholder="Permis de conduire" />
          <TouchableOpacity style={styles.btnTouch}>
            <Text style={styles.btnText}>Obtenir mon consentement</Text>
          </TouchableOpacity>
        </View>

        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f6f6f6",
  },
  Upper: {
    flexDirection: "row",
    paddingBottom: 25,
    backgroundColor: "#0da0dc",
    height: 150,
    width: windowWidth,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  arrowIcon: {
    height: 30,
    width: 20,
    transform: "rotate(180deg)",
  },
  inputField: {
    borderRadius: 10,
    padding: 30,
  },
  headingView: {},
  heading: {
    fontSize: 23,
    color: "#146194",
    fontWeight: "500",
    lineHeight: 25,
    paddingVertical: 8,
  },
  textInput: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: "#e2e2e2",
    width: 330,
    marginTop: 13,
  },
  btnTouch: {
    backgroundColor: "#f0930c",
    width: 290,
    margin: 20,
    borderRadius: 10,
    alignItems: "center",
  },
 btnText: {
    color: "white",
    fontSize: 17,
    paddingVertical: 12,
    fontWeight:'500'
  },
});
