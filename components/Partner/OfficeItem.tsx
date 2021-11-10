
import React from "react";
import { Text, View } from "react-native";
import {styles} from './OfficeStyle';

const OfficeItem = (props: { location: string; address: string;}) => {
const {location , address } = props;

  return (   
  <View style={styles.office} key={location}>
    <Text style={styles.text}>{'- ' + location + ' / ' + address.replace('\n' , ', ')} </Text>
  </View>
  );
};


export default OfficeItem;



     