import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  ScrollView
} from "react-native";
import {Dimensions} from 'react-native';
// import Icon from 'react-native-vector-icons/dist/FontAwesome';

// import iconFont from 'react-native-vector-icons/Fonts/FontAwesome.ttf';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default function SignUP() {
  return (
    <ScrollView contentContainerStyle={{ height: windowHeight * 1.15, width: windowWidth }}>
    <View style={styles.container}>
      <View style={styles.Upper}>
        <View
          style={{
            alignSelf: "flex-start",
            flex: 4,
            paddingLeft: 10,
            paddingTop: 85,
          }}
        >
          <Text style={{ fontSize: 23, color: "#f6f6f6" ,fontWeight:500}}>S'enregistrer</Text>
          <Text style={{ fontSize: 15, color: "#f6f6f6" }}>
            Créer un compte pour partager vos talents ou en découvrir
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
        <View  style={styles.inputField}>
          <TextInput style={styles.textInput} placeholder="Adresse e-mail" />
          <TextInput style={styles.textInput} placeholder="Mot de passe*" />
          <TextInput style={styles.textInput} placeholder="Prénom" />
          <TextInput style={styles.textInput} placeholder="Nom defamille*" />
          <TextInput
            style={styles.textInput}
            placeholder="Nom de votre compagnie"
          />
          <TextInput
            style={styles.textInput}
            placeholder="Numéro de téléphone*"
          />
          <TextInput style={styles.textInput} placeholder="Adresse" />
          <View style={styles.checkBoxView}>
            <Text style={styles.checkBoxText}>
              En cliquant sur s'enregistrer, vous acceptez nos CGU
            </Text>
          </View>
          <TouchableOpacity style={styles.SenregisterBtn}>
            <Text style={styles.SenregisterBtnText}>S'enregistrer</Text>
          </TouchableOpacity>
        </View>
     
      {/* <View style={styles.bottomTextView}>
        <Text style={styles.bottomText}>Ou Connectez -vous en utilisant</Text>
      </View> */}
      
      <View style={styles.bottomTextContainer}>
        <View style={styles.line}></View>
        <View style={styles.bottomTextView}>
          <Text style={styles.bottomText}>Ou Connectez -vous{'\n'}en utilisant</Text>
        </View>
        <View style={styles.line}></View>
      </View>
      <View style={styles.fbGoogleView}>
        <View style={styles.icons}>
          <TouchableOpacity>
            <Image
              style={styles.facebookIcon}
              source={require("./assets/facebook.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.icons}>
          <TouchableOpacity>
            <Image
              style={styles.GoogleIcon}
              source={require("./assets/google.png")}
            />
          </TouchableOpacity>
        </View>
        
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
    height: 240,
    width: windowWidth,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  dottImage: {
    width: 90,
    height: 90,
  },
  inputField: {
    // flex: 1, 
    marginTop: -46,
    backgroundColor: "#ffffff",
    height: 530,
    width: 350,
    // paddingBottom: "15.29%",
    alignItems: "center",
    borderRadius: 10,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 20,
  },
  textInput: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: "#f7f7f7",
    width: 320,
    marginTop: 10,
  },
  checkBoxView: {
    margin: 10,
  },
  checkBoxText: {
    fontSize: 13,
  },
  SenregisterBtn: {
    backgroundColor: "#f0930c",
    width: 320,
    marginTop: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  SenregisterBtnText: {
    color: "white",
    fontSize: 20,
    paddingVertical: 10,
  },
  // bottomTextView: {
  //   marginTop: 10,
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  bottomTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 6,
    padding:10
  },
  line: {
    height: 2,
    width: 60,
    backgroundColor: "#37657d",
  },
  bottomTextView: {
    paddingHorizontal:10,
  },
  bottomText: {
    textAlign: "center",
    color:'#0da0dc',
  },
  fbGoogleView: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    height: 60,
    width: 350,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 20,
  },
  facebookIcon: {
    height: 30,
    width: 35,
    borderRadius: 50,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 2,
  },
  GoogleIcon: {
    height: 35,
    width: 35,
    borderRadius: 50,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 2,
  },
  icons: {
    backgroundColor: "#ffffff",
    height: 45,
    width: 45,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 20,
  },
});
