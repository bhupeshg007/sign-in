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

export default function SignIn() {
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
            source={require("./assets/Icon1.png")}
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
              source={require("./assets/img2.png")}
            />
          </View>
          <View style={{}}>
            <Image
              style={styles.tinyLogo}
              source={require("./assets/img2.png")}
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

      {/* Middle View */}
      <View style={styles.middleView}>
        <View style={{}}>
          <Text style={{ fontSize: 25, marginVertical: 10,color: "#0da0dc", }}>
            Bienvenue sur Sen Jambaar!
          </Text>
        </View>
        <View style={{ marginHorizontal: 60 }}>
          <Text style={{ fontSize: 15, textAlign: "center",color: "#0da0dc", }}>
            sen Jambaar, I'amour du tarvail bien accompli!{" "}
          </Text>
        </View>

        <TouchableOpacity style={styles.Seconnecterbtn}>
          <Text style={{ color: "white", fontSize: 20, paddingVertical: 10 }}>
            Se connecter
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.nouveauBtn}>
          <Text style={{ color: "#f0930c", fontSize: 20, paddingVertical: 10 }}>
            Creer nouveau compte
          </Text>
        </TouchableOpacity>
        <View style={styles.bottomTextView}>
          <Text style={styles.bottomText}>
            Utiliser votre compte des ces reseaux sociaux
          </Text>
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

  bottomTextView: {
    marginHorizontal: 80,
    marginVertical:10,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomText: {
    textAlign:'center',
    color: "#0da0dc",

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
