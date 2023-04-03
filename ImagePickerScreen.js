import { StatusBar } from "expo-status-bar";
import {
  Button,
  Image,
  View,
  Platform,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  navigation,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function ImagePickerScreen({ route,navigation }) {
  const { Im } = route.params;
  return (
    <View
      contentContainerStyle={{
        width: windowWidth,
        height: windowHeight,
      }}
    >
      <View style={styles.container}>
        <View style={styles.Upper}>
        <TouchableOpacity
            onPress={() => {
              navigation.navigate("ProfileBio2Blur");
            }}
          >
            <Image
              style={styles.arrowIcon}
              source={require("./assets/arrow.png")}
            />
          </TouchableOpacity>
          <View
            style={{
              paddingHorizontal: 50,
            }}
          >
            <Text style={{ fontSize: 23, color: "#f6f6f6", fontWeight: 500 }}>
            Envoyer la photo
            </Text>
          </View>
        </View>
        <View style={styles.imageView}>
        <View style={styles.imageBgView}>
          <Image source={{ uri: `${Im}` }} style={styles.image} />
          </View>
        </View>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity style={styles.btnTouch}>
            <Text style={styles.btnText}>Prendre une photo</Text>
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f6f6f6",
    height: windowHeight * 1.1,
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
    transform: [{rotate: '180deg'}],
  },
  imageView: {
    alignItems: "center",
    justifyContent: "center",
    width: windowWidth*.95,
    height:windowHeight*.6,
    marginVertical: 40,
    marginHorizontal: 10,
    backgroundColor: "grey",
    padding: 70,
  },
  imageBgView:{
    flex:1,
    alignItems: "center",
    justifyContent: "center",
    width: windowWidth * 0.87,
    height: windowHeight * 0.3,
    borderRadius:10,
    backgroundColor: "white",

  },
  image: {
    width: windowWidth * 0.75,
    height: windowHeight * 0.3,
    borderRadius:10,
    margin:10
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
    fontWeight: "500",
  },
});
