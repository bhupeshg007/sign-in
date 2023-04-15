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
  Modal,
  navigation,
  Pressable,
} from "react-native";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function ProfileBioCustomerProfilePopUp({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [normalOpacity, setBlur] = useState(1);

  return (
    <>
      <ScrollView
        contentContainerStyle={{
          width: windowWidth,
        }}
      >
        <View style={[styles.container, { opacity: normalOpacity }]}>
          <View style={styles.Upper}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
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
                Client Profil
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
            <TextInput style={styles.textInput} placeholder="Adresse" />
            <View style={{ flexDirection: "row" }}>
              <TextInput style={styles.textInput} placeholder="Villa" />
              <TouchableOpacity onPress={() => {}}>
                <Image
                  style={styles.dropDownIcon}
                  source={require("./assets/dropDownIcon.png")}
                />
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row" }}>
              <TextInput style={styles.textInput} placeholder="Ville" />
              <TouchableOpacity onPress={() => {}}>
                <Image
                  style={styles.dropDownIcon}
                  source={require("./assets/dropDownIcon.png")}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.btnTouch}
              onPress={() => {
                setModalVisible(true), setBlur(0.4);
              }}
            >
              <Text style={styles.btnText}>Soumettre</Text>
            </TouchableOpacity>
          </View>

          <StatusBar style="auto" />
        </View>
      </ScrollView>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View>
              <Text style={styles.modalText1}>C'était incroyable !</Text>
              <Text style={styles.modalText2}>
                Vérifiez votre SMS pour la confirmation et vérification
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.modalText3}>Vous ne comprenez pas?</Text>
                <TouchableOpacity>
                  <Text style={styles.modalTouchText}>N'en veux pas</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.underLine}></View>
            </View>

            <Pressable
              style={styles.modalBtn}
              onPress={() => {
                setModalVisible(!modalVisible), setBlur(1);
              }}
            >
              <Text style={styles.modalBtnText}>X</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
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
  dropDownIcon: {
    height: 35,
    width: 25,
    marginTop: 20,
    marginLeft: -40,
  },
  ctegMainView: {
    flexDirection: "row",
    width: windowWidth,
  },
  categView: {
    alignItems: "center",
    justifyContent: "center",
    height: 35,
    width: 100,
    borderColor: "#146194",
    borderWidth: 2,
    borderRadius: 10,
    borderStyle: "dashed",
  },
  categText: {
    color: "#146194",
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
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  modalView: {
    height: 160,
    width: 360,
    backgroundColor: "#146194",
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    padding: 18,
  },

  modalText1: {
    margin: 10,
    color: "white",
    fontSize: 17,
    fontWeight: "500",
  },
  modalText2: {
    marginLeft: 10,
    color: "white",
    fontSize: 14,
    fontWeight: "300",
    marginRight: 20,
  },
  modalText3: {
    margin: 10,
    color: "white",
    fontSize: 13,
  },
  modalTouchText: {
    color: "white",
    fontSize: 13,
    marginTop: 10,
    marginLeft: -5,
  },
  underLine: {
    height: 1,
    width: 82,
    backgroundColor: "white",
    marginLeft: 162,
    marginTop: -11,
  },
  modalBtn: {
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "white",
    height: 25,
    width: 25,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: -15,
  },
  modalBtnText: {
    color: "white",
    fontWeight: "bold",
  },
});
