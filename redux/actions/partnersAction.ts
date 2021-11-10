import { PartnerType } from '../../types/types';
import { FILTER_PARTNERS} from '../types';
import { SET_DISTANCE} from '../types';

export const filterPartners = (partners: PartnerType[]) => {
  return {
    type: FILTER_PARTNERS,
    payload: partners,
  };
};


export const setDistance = (distance: number) => {
  return {
    type: SET_DISTANCE,
    payload: distance,
  };
};
