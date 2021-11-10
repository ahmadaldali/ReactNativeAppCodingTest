

import React from "react";
import { FlatList, View } from "react-native";
import { connect } from "react-redux";
import PartnerItem from "./PartnerItem";
import styles from './PartnerListStyle';


const PartnerList = (props:any) => {

  return (
    <View style={styles.partnersList}>
  
   <FlatList
      data={props.partners}
      renderItem={({ item }) => (
        <PartnerItem key={item.id} partner={item} />
      )}
    />

  </View>
  );
};


const mapStateProps = (state: any) => {
  return {
    partners: state.partnersState.partners,
  };
};


export default connect (mapStateProps) (PartnerList);




     



         