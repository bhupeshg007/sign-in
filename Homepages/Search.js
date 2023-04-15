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

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default function Search({ navigation }) {
  return (
    <View style={styles.mainContainer}>
      {/* <View style> */}
      <View style={{ flexDirection: "row", padding: 20 }}>
        <TouchableOpacity
        onPress={() => navigation.goBack()}
        >
          <Image
            style={styles.nextIcon}
            source={require("../assets/next.png")}
          />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, fontWeight: "500", margin: 14 }}>
          Paramètres
        </Text>
      </View>

      <View style={styles.lineView}>
        <Image style={styles.Icon} source={require("../assets/write.png")} />
        <Text style={styles.text}>modifier votre profil</Text>
        <TouchableOpacity style={styles.revNextIconTouch}>
          <Image
            style={[styles.revNextIcon, { transform: [{ rotate: "180deg" }] }]}
            source={require("../assets/next.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.lineView}>
        <Image style={styles.Icon} source={require("../assets/lock.png")} />
        <Text style={styles.text}>Compte privé</Text>
        <TouchableOpacity style={styles.revNextIconTouch}>
          <Image
            style={[styles.revNextIcon, { transform: [{ rotate: "180deg" }] }]}
            source={require("../assets/next.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.lineView}>
        <Image style={styles.Icon} source={require("../assets/key.png")} />
        <Text style={styles.text}>changer votre mot de passe</Text>
        <TouchableOpacity style={styles.revNextIconTouch}>
          <Image
            style={[styles.revNextIcon, { transform: [{ rotate: "180deg" }] }]}
            source={require("../assets/next.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.lineView}>
        <Image style={styles.Icon} source={require("../assets/message.png")} />
        <Text style={styles.text}>Modifier l'e-mail</Text>
        <TouchableOpacity style={styles.revNextIconTouch}>
          <Image
            style={[styles.revNextIcon, { transform: [{ rotate: "180deg" }] }]}
            source={require("../assets/next.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.lineView}>
        <Image style={styles.Icon} source={require("../assets/call.png")} />
        <Text style={[styles.text, { marginTop: -9 }]}>
          changer votre numero{"\n"}de telephone
        </Text>
        <TouchableOpacity style={styles.revNextIconTouch}>
          <Image
            style={[styles.revNextIcon, { transform: [{ rotate: "180deg" }] }]}
            source={require("../assets/next.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.lineView}>
        <Image style={styles.Icon} source={require("../assets/delete.png")} />
        <Text style={styles.text}>Supprimer le compte</Text>
        <TouchableOpacity style={styles.revNextIconTouch}>
          <Image
            style={[styles.revNextIcon, { transform: [{ rotate: "180deg" }] }]}
            source={require("../assets/next.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.lineView}>
        <Image style={styles.Icon} source={require("../assets/headset.png")} />
        <Text style={styles.text}>contacter notre equipe</Text>
        <TouchableOpacity style={styles.revNextIconTouch}>
          <Image
            style={[styles.revNextIcon, { transform: [{ rotate: "180deg" }] }]}
            source={require("../assets/next.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.lineView}>
        <Image style={styles.Icon} source={require("../assets/detail.png")} />
        <Text style={styles.text}>À propos</Text>
        <TouchableOpacity style={styles.revNextIconTouch}>
          <Image
            style={[styles.revNextIcon, { transform: [{ rotate: "180deg" }] }]}
            source={require("../assets/next.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.lineView}>
        <Image style={styles.Icon} source={require("../assets/exit.png")} />
        <Text style={styles.text}>Se déconnecter</Text>
        <TouchableOpacity style={styles.revNextIconTouch}>
          <Image
            style={[styles.revNextIcon, { transform: [{ rotate: "180deg" }] }]}
            source={require("../assets/next.png")}
          />
        </TouchableOpacity>
      </View>

      {/* </View> */}

      {/* bottom tab start */}
      <View style={styles.bottomContainer}>
        <View style={styles.bottomTab}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <Image
              style={styles.icons}
              source={require("../assets/HomeINACTIVE.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Search");
            }}
          >
            <Image
              style={styles.icons}
              source={require("../assets/SearchACTIVE.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Job");
            }}
          >
            <Image
              style={styles.icons}
              source={require("../assets/JobsINACTIVE.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("User");
            }}
          >
            <Image
              style={[styles.icons, { height: 26 }]}
              source={require("../assets/ProfileINACTIVE.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {},

  nextIcon: {
    height: 26,
    width: 26,
    marginTop: 16,
  },
  lineView: {
    flexDirection: "row",
    padding: 20,
  },
  Icon: {
    height: 22,
    width: 22,
    marginLeft: 10,
  },
  text: {
    fontSize: 15,
    fontWeight: "500",
    marginLeft: 24,
  },
  revNextIconTouch: {
    alignItems: "flex-end",
    flex: 1,
  },
  revNextIcon: {
    height: 26,
    width: 26,
    marginRight: 10,
  },
  bottomContainer: {
    flex: 1,
    marginTop: windowHeight * 0.11,
  },
  bottomTab: {
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-around",
    height: 50,
    width: windowWidth,
    backgroundColor: "white",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
  icons: {
    height: 24,
    width: 25,
  },
});
