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
// import Icon from 'react-native-vector-icons/dist/FontAwesome';

// import iconFont from 'react-native-vector-icons/Fonts/FontAwesome.ttf';
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default function TermsScreen() {
  return (
    <ScrollView
      contentContainerStyle={{
        width: windowWidth,
      }}
    >
      <View style={styles.container}>
        <View style={styles.Upper}>
          <Image
            style={styles.arrowIcon}
            source={require("./assets/arrow.png")}
          />
          <View
            style={{
              paddingHorizontal: 50,
            }}
          >
            <Text style={{ fontSize: 23, color: "#f6f6f6", fontWeight: 500 }}>
              Termes et Conditions
            </Text>
          </View>
        </View>

        <View style={styles.textView}>
          <Text style={styles.textHeading}>General Terms</Text>
          <Text style={styles.text}>
            Welcome to . This website is owned and operated by STUDIO MUSIC
            PRODUCTION Ltd. By visiting our website and accessing the
            information, resources, services, products, and tools we provide,
            you understand and agree to accept and adhere to w for more
            information). {'\n'}
            This agreement is in effect as of June 25, 2012. We
            reserve the right to change this User Agreement from time to time
            without notice. You acknowledge and agree that it is your
            responsibility to review this User Agreement periodically to
            familiarize yourself with any modifications. Your continued use of
            this site after such modifications will constitute acknowledgment
            and agreement of the modified terms and conditions.
          </Text>
          <Text style={styles.textHeading}>Licensing</Text>
          <Text style={styles.text}>
            By visiting our website and accessing the information, resources,
            services, products, and tools we provide for you, either directly or
            indirectly (hereafter referred to as ‘Resources), you agree to use
            these Resources only for the purposes intended as permitted by (a)
            the terms of this User Agreement, and (b) applicable laws,
            regulations and generally accepted online practices or guidelines.
          </Text>
          <Text style={styles.textHeading}>Supplier</Text>
          <Text style={styles.text}>
            By visiting our website and accessing the information, resources,
            services, products, and tools we provide for you, either directly or
            indirectly (hereafter referred to as ‘Resources), you agree to use
            these Resources only for the purposes intended as permitted by (a)
            the terms of this User Agreement, and (b) applicable laws,
            regulations and generally accepted online practices or guidelines.
          </Text>
          <Text style={styles.textHeading}>Distribution SET</Text>
          <Text style={styles.text}>
            By visiting our website and accessing the information, resources,
            services, products, and tools we provide for you, either directly or
            indirectly (hereafter referred to as ‘Resources), you agree to use
            these Resources only for the purposes intended as permitted by (a)
            the terms of this User Agreement, and (b) applicable laws,
            regulations and generally accepted online practices or guidelines.
          </Text>
          <Text style={styles.textHeading}>Ownership Splits</Text>
          <Text style={styles.text}>
            By visiting our website and accessing the information, resources,
            services, products, and tools we provide for you, either directly or
            indirectly (hereafter referred to as ‘Resources), you agree to use
            these Resources only for the purposes intended as permitted by (a)
            the terms of this User Agreement, and (b) applicable laws,
            regulations and generally accepted online practices or guidelines.
          </Text>
        </View>

        <StatusBar style="auto" />
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
    transform: "rotate(180deg)",
  },
  textView: {
    alignContent: "center",
    justifyContent: "center",
    paddingHorizontal:16
  },
  textHeading: {
    color:"#0da0dc",
    fontSize:22,
    fontWeight:'500',
    marginVertical:16,
  },
  text: {
    fontSize:15,
  },
});
