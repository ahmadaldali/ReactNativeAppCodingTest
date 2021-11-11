import * as React from "react";
import { ReactNode } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import SaveButton from "../components/Button/ButtonItem";
import PartnerList from "../components/Partner/PartnerList";
import SearchItem from "../components/Search/SearchItem";

type props = {
  children: ReactNode;
};

const DismissKeyboard = ({ children }: props) => (
  <TouchableWithoutFeedback
    onPress={() => {
      Keyboard.dismiss();
    }}
  >
    {children}
  </TouchableWithoutFeedback>
);

export default function HomePageScreen() {
  return (
    <DismissKeyboard>
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Welcome to Ahmad Aldali/Coding Test</Text>
        <SearchItem />
        <SaveButton />
        <PartnerList />
      </View>
    </DismissKeyboard>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 50,
    alignItems: "center",
  },
  title: {
    width: "100%",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
});
