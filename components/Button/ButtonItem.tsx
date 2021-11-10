import React from 'react';
import { Text, Pressable } from 'react-native';
import { connect } from 'react-redux';
import styles from './ButtonStyle';
import { filterPartners } from '../../redux/actions/partnersAction';
import getFilteredPartners from '../../controllers/partners/index';
import { PartnerType } from '../../types/types';

const SaveButton = (props:any) => {
  return (
    <Pressable style={styles.button} onPress={ function(){
      props.findPartners(props.distance);
    }}>
      <Text style={styles.text}>Find Partners</Text>
    </Pressable>
  );
}

const mapStateProps = (state: any) => {
  return {
    distance: state.DistanceState.distance,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    findPartners: (distance:number) => {
      //call function
      let filteredPartners:PartnerType[] = getFilteredPartners(distance);
      //pass the results
      dispatch(filterPartners(filteredPartners));
    },
  };
};

export default connect(
  mapStateProps,
  mapDispatchToProps,
)(SaveButton);
