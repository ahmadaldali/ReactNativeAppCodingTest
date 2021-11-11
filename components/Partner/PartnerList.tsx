import React from "react";
import { FlatList, View } from "react-native";
import { connect } from "react-redux";
import PartnerItem from "./PartnerItem";
import styles from "./PartnerListStyle";
import AnimatedProgressWheel from "react-native-progress-wheel";

const PartnerList = (props: any) => {
  return (
    <View style={styles.partnersList}>
      {!props.loader && (
        <FlatList
          data={props.partners}
          renderItem={({ item }) => (
            <PartnerItem key={item.id} partner={item} />
          )}
        />
      )}
      {props.loader && (
        <AnimatedProgressWheel
          style={styles.progressLoader}
          size={100}
          width={15}
          progress={100}
          animateFromValue={0}
          duration={1500}
          color={"white"}
          fullColor={"red"}
        />
      )}
    </View>
  );
};

const mapStateProps = (state: any) => {
  return {
    partners: state.partnersState.partners,
    loader: state.LoaderState.loader,
  };
};

export default connect(mapStateProps)(PartnerList);
