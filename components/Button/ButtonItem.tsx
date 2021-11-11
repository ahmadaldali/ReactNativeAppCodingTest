import React from "react";
import { Text, Pressable } from "react-native";
import { connect } from "react-redux";
import styles from "./ButtonStyle";
import {
  changeLoader,
  filterPartners,
} from "../../redux/actions/partnersAction";
import getFilteredPartners from "../../controllers/partners/index";
import { PartnerType } from "../../types/types";
import { Keyboard } from "react-native";

const SaveButton = (props: any) => {
  return (
    <Pressable
      style={styles.button}
      onPress={function () {
        Keyboard.dismiss(); //Hide keyboard when press on the button
        props.findPartners(props.distance);
      }}
    >
      <Text style={styles.text}>Find Partners</Text>
    </Pressable>
  );
};

const mapStateProps = (state: any) => {
  return {
    distance: state.DistanceState.distance,
    loader: state.LoaderState.loader,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    findPartners: (distance: number) => {
      //I execute fetch partner function even the distance is 0 because,
      //I need to reset the results section (remove previous results from it)
      //so when the distance is 0, will fetch  empty array (0 partners) and render it

      //call function
      let filteredPartners: PartnerType[] = getFilteredPartners(distance);
      //pass the results
      dispatch(filterPartners(filteredPartners));

      //distance > 0 this mean that the input is not null
      if (distance > 0) {
        //start loader animation
        dispatch(changeLoader(true));
        //stop loader after 1.5 second
        setTimeout(() => {
          dispatch(changeLoader(false));
        }, 1500);
      } //if
    },
  };
};

export default connect(mapStateProps, mapDispatchToProps)(SaveButton);
