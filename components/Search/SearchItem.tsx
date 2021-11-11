import React from "react";
import { TextInput } from "react-native";
import { connect } from "react-redux";
import { setDistance } from "../../redux/actions/partnersAction";
import { styles } from "./SearchStyle";

const SearchItem = (props: any) => {
  const placeholderText = "Enter your distance";

  return (
    <TextInput
      style={styles.input}
      onChangeText={(value) => props.getDistanceFromInput(value)}
      keyboardType="numeric"
      placeholder={placeholderText}
      value={props.distance == 0 ? "" : props.distance + ""}
    />
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getDistanceFromInput: (value: string) => {
      let val: boolean = /^[0-9]+$/.test(value) || value === "";
      if (val) {
        if (value == "") {
          value = "0";
        }
        dispatch(setDistance(parseInt(value)));
      }
    },
  };
};

const mapStateProps = (state: any) => {
  return {
    distance: state.DistanceState.distance,
  };
};

export default connect(mapStateProps, mapDispatchToProps)(SearchItem);
