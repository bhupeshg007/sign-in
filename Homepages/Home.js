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
export default function Home({ navigation }) {
  return (
    <View style={styles.Container}>
    <Text style={{fontSize:30}}>Home</Text>
      <View style={styles.bottomTab}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Image style={styles.icons} source={require("../assets/HomeACTIVE.png")} />
        </TouchableOpacity>

        <TouchableOpacity
         onPress={() => {
            navigation.navigate("Search");
          }}
        >
          <Image
            style={styles.icons}
            source={require("../assets/SearchINACTIVE.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity
         onPress={() => {
            navigation.navigate("Job");
          }}
        >
          <Image style={styles.icons} source={require("../assets/JobsINACTIVE.png")} />
        </TouchableOpacity>

        <TouchableOpacity
         onPress={() => {
            navigation.navigate("User");
          }}
        >
          <Image style={[styles.icons, {height:26}]} source={require("../assets/ProfileINACTIVE.png")} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "flex-end",
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
    shadowOffset: {
        width: 1,
        height: 1,
      },
      shadowOpacity: 0.5,
      shadowRadius: 0.5,
      elevation: 5,
  },
  icons: {
    height: 24,
    width: 25,
  },
});
