import {partners} from "../../data/partners";
import FilterOffices from "../../classes/filters/offices";
import FilterPartners from "../../classes/filters/partners";
import { PartnerType } from "../../types/types";


const getFilteredPartners =  (distance:any): PartnerType[] => {
  try {

    //add filters for offices
    let filterOffice = new FilterOffices();
    filterOffice.addFilter({
      key: "distance",
      value: distance,
    });
    /*
    //for the future - ex: add location filter / or other filters
    filterOffice.addFilter({
      key: "location",
      value: "London",
      });
    */

    let filterPartner:FilterPartners = new FilterPartners(partners , filterOffice);
    //filter companies offices according distance, this mean apply filterAccordingOffice function
    filterPartner = filterPartner.filterAccordingOffice(); 
    /*
    //for the future - ex: add other filters
    filterPartner.addFilter({
      key: "services",
      value: "XYZ",
      });
    //add filter according services
    //just call filterAccordingServices and implement it.
    //filterPartner = filterPartner.filterAccordingServices();
    */

    //sort the result
    filterPartner.sortPartnerAsNameAsc();
    //get final results after filtering and sorting
    const final_partners = filterPartner.getPartners();


/*     console.log("----------------Final Response-----------------");
    console.log(final_partners);
    console.log("---------------------------------"); */

    return final_partners;
  } catch (error) {
    return [];
  }

};

export default getFilteredPartners;
