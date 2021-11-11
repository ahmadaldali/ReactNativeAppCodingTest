import React from "react";
import { FlatList, Text, View } from "react-native";
import { PartnerType } from "../../types/types";
import OfficeItem from "./OfficeItem";
import {styles} from './PartnerItemStyle';

const PartnerItem = (props: { partner: PartnerType; }) => {
const {partner} = props;
  return (   
    <View style={styles.partner}>
    <Text  style={styles.partnerName}>{partner.organization}</Text>
    <FlatList
      data={partner.offices}
      renderItem={(office) => (
          <OfficeItem location={office.item.location} address={office.item.address} />
      )}
      keyExtractor={(_, index) => index.toString()}
    ></FlatList>
  </View>
  );
};


export default PartnerItem;



     