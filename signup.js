import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
// import Icon from 'react-native-vector-icons/dist/FontAwesome';

// import iconFont from 'react-native-vector-icons/Fonts/FontAwesome.ttf';

export default function SignUP() {
  return (
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
          <Text style={{ fontSize: 22,color:'#f6f6f6' }}>S'enregistrer</Text>
          <Text style={{ fontSize: 15,color:'#f6f6f6' }}>
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
            source={require("./assets/img2.png")}
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
        <TextInput style={styles.textInput} placeholder="Adresse e-mail" />
        <TextInput style={styles.textInput} placeholder="Mot de passe*" />
        <TextInput style={styles.textInput} placeholder="Prénom" />
        <TextInput style={styles.textInput} placeholder="Nom defamille*" />
        <TextInput style={styles.textInput} placeholder="Nom de votre compagnie" />
        <TextInput style={styles.textInput} placeholder="Numéro de téléphone*" />
        <TextInput style={styles.textInput} placeholder="Adresse" />
        <View style={styles.checkBoxView}>
          <Text style={styles.checkBoxText}>
            En cliquant sur s'enregistrer, vous acceptez nos CGU
          </Text>
        </View>
        <TouchableOpacity style={styles.btnRandomAsteroid}>
          <Text style={styles.btnTextRandomAsteroid}>S'enregistrer</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomTextView}>
        <Text style={styles.bottomText}>Ou Connectez -vous en utilisant</Text>
      </View>
      <View style={styles.fbGoogleView}>
        <TouchableOpacity>
          <Image
            style={styles.fbGoogleIcon}
            source={require("./assets/img2.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.fbGoogleIcon}
            source={require("./assets/img2.png")}
          />
        </TouchableOpacity>
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
    paddingBottom: "18.29%",
  },
  Upper: {
    flexDirection: "row",
    paddingBottom: 20,
    backgroundColor: "#0da0dc",
    height: "33%",
    width: "100%",
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  dottImage: {
    width: 90,
    height: 90,
  },
  inputField: {
    marginTop: "-12%",
    backgroundColor: "#ffffff",
    height: "70%",
    width: "90.1%",
    paddingBottom: "15.29%",
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
  btnRandomAsteroid: {
    backgroundColor: "#f0930c",
    width: 320,
    marginTop: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  btnTextRandomAsteroid: {
    color: "white",
    fontSize: 20,
    paddingVertical: 10,
  },
  bottomTextView: {
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomText: {},
  fbGoogleView: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    height: 55,
    width: "90.1%",
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
  fbGoogleIcon: {
    height: 45,
    width: 45,
    borderRadius: 50,
    marginHorizontal: 10,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 2,
  },
});
