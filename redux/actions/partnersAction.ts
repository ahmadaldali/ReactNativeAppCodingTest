import { PartnerType } from '../../types/types';
import { SET_DISTANCE,CHANGE_LOADER, FILTER_PARTNERS} from '../types';

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

export const changeLoader = (val:boolean) => {
  return {
    type: CHANGE_LOADER,
    payload: val,
  };
};
