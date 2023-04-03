import React, { useState, useEffect } from "react";
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
  navigation,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default function ProfileBio2({ navigation }) {
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (!setImage == 0) {
      navigation.navigate("ImagePickerScreen", { Im: image });
    }
  });

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1.5, 1],
      quality: 1,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <ScrollView
      contentContainerStyle={{
        width: windowWidth,
      }}
    >
      <View style={styles.container}>
        <View style={styles.Upper}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("ProfileBio1");
            }}
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
          {/* <TextInput style={styles.textInput} placeholder="Catégoties" /> */}
          <View style={{ flexDirection: "row" }}>
            <TextInput style={styles.textInput} placeholder="Catégoties" />
            <TouchableOpacity onPress={() => {}} style={styles.plusIcon}>
              <Text style={styles.plusText}>+</Text>
            </TouchableOpacity>
          </View>

          {/* <TextInput style={styles.textInput} placeholder="Sub-catégoties" /> */}
          <View style={{ flexDirection: "row" }}>
            <TextInput style={styles.textInput} placeholder="Sub-catégoties" />
            <TouchableOpacity onPress={() => {}} style={styles.plusIcon}>
              <Text style={styles.plusText}>+</Text>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: "row" }}>
            <TextInput
              style={styles.textInput}
              placeholder="Permis de conduire"
            />
            <TouchableOpacity
              onPress={() => {
                pickImage();
              }}
              style={styles.plusIcon}
            >
              <Text style={styles.plusText}>+</Text>
            </TouchableOpacity>
          </View>
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
    transform: [{ rotate: "180deg" }],
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
  plusIcon: {
    borderColor: "#146194",
    borderWidth: 2,
    height: 22,
    width: 22,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: -40,
    marginTop: 25,
  },
  plusText: {
    marginTop: -3,
    marginLeft: 1,
    color: "#146194",
    fontWeight: "500",
    fontSize: 16,
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
