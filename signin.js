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

export default function SignIn({ navigation }) {
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
            Bienvenue sur Sen Jambaar!
          </Text>
        </View>
        <View style={{ marginHorizontal: 60 }}>
          <Text style={{ fontSize: 15, textAlign: "center",color: "#0da0dc",fontWeight:'500' }}>
            sen Jambaar, I'amour du tarvail bien accompli!{" "}
          </Text>
        </View>

        <TouchableOpacity style={styles.Seconnecterbtn}
        onPress={() => {
              navigation.navigate("logIn")
            }}>
          <Text style={{ color: "white", fontSize: 20, paddingVertical: 10 }}>
            Se connecter
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.nouveauBtn}
        onPress={() => {
              navigation.navigate("signUp")
            }}>
          <Text style={{ color: "#f0930c", fontSize: 20, paddingVertical: 10 }}>
            Creer nouveau compte
          </Text>
        </TouchableOpacity>
        {/* <View style={styles.bottomTextView}>
          <Text style={styles.bottomText}>
            Utiliser votre compte des ces reseaux sociaux
          </Text>
        </View> */}
        <View style={styles.bottomTextContainer}>
        <View style={styles.line}></View>
        <View style={styles.bottomTextView}>
          <Text style={styles.bottomText}>Utiliser votre compte des {'\n'}ces reseaux sociaux</Text>
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
    height: "52%",
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
  textInput: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: "#f7f7f7",
    width: 320,
    marginTop: 10,
  },
  Seconnecterbtn: {
    backgroundColor: "#f0930c",
    width: 320,
    marginTop: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  nouveauBtn: {
    backgroundColor: "#f7f7f7",
    width: 320,
    marginTop: 10,
    borderRadius: 10,
    borderWidth: 1,
    alignItems: "center",
    borderColor: "#f0930c",
  },

  bottomTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    padding:10
  },
  line: {
    height: 2,
    width: 60,
    backgroundColor: "#0da0dc",
  },
  bottomTextView: {
    paddingHorizontal:10,
  },
  bottomText: {
    textAlign: "center",
    color:'#0da0dc'
  },
  fbGoogleView: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    height: 55,
    width: "90.1%",
    backgroundColor: "#ffffff",
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
    elevation: 5,
  },
});
