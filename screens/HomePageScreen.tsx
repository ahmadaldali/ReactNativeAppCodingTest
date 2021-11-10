import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

import SaveButton from "../components/Button/ButtonItem";
import PartnerList from "../components/Partner/PartnerList";
import SearchItem from "../components/Search/SearchItem";


export default function HomePageScreen() {
 
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Welcome to Ahmad Aldali/Coding Test</Text>
      <SearchItem />
      <SaveButton />

       <PartnerList />

    </View>
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
