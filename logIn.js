import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView
} from "react-native";
// import Icon from 'react-native-vector-icons/dist/FontAwesome';

// import iconFont from 'react-native-vector-icons/Fonts/FontAwesome.ttf';

export default function LognIn() {
  return (
    <View style={styles.container}>
      <View style={styles.Upper}>
        <View
          style={{
            alignSelf: "flex-start",
            flex: 4,
            paddingLeft: 10,
            paddingTop: 110,
          }}
        >
          <Text style={{ fontSize: 23, color: "#f6f6f6" }}>s'identifier</Text>
          <Text style={{ fontSize: 14, color: "#f6f6f6", lineHeight:20, }}>
            Connectez-vous pour découvrir des choses incroyables á proximité
            autour de vous.
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
      <KeyboardAvoidingView style={styles.inputField}>
        <TextInput style={styles.textInput} placeholder="Adresse email" />
        <TextInput style={styles.textInput} placeholder="Code secret" />
        <TouchableOpacity
          style={{
            margin: 10,
            // alignItems:'flex-end',
            // justifyContent:'flex-end'

          }}
        >
          <Text
            style={{
              fontSize: 14,
              marginLeft:180,
              color:'#37657d',
            }}
          >
            Mot de passe oublié?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.identifierBtn}>
          <Text style={styles.identifierBtnText}>s'identifier</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      <View style={styles.bottomTextView}>
        <Text style={styles.bottomText}>Ou Connectez -vous en utilisant</Text>
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
    height: "37%",
    width: "100%",
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  dottImage: {
    width: 90,
    height: 90,
  },
  inputField: {
    paddingVertical: 30,
    marginTop: "-12%",
    backgroundColor: "#ffffff",
    height: "41%",
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
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: "#f7f7f7",
    width: 320,
    marginTop: 10,
  },
  identifierBtn: {
    backgroundColor: "#f0930c",
    width: 320,
    marginTop: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  identifierBtnText: {
    color: "white",
    fontSize: 25,
    paddingVertical: 11,
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
      width: 1,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 10,
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
      width: 1,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 10,
  },
});
