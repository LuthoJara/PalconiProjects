//Links for react router
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import OurValuesAndVision from "../components/AboutUsComponents/OurValuesAndVision";
import OurServices from "../components/AboutUsComponents/OurServices";
import Leadership from "../components/AboutUsComponents/Leadership";
import OurStaff from "../components/AboutUsComponents/OurStaff";
import HealthAndSafety from "../components/AboutUsComponents/HealthAndSafety";
import PlantAndEquipment from "../components/AboutUsComponents/PlantAndEquipment";
  
const AboutUs = () => {
  return (
    <>
      <OurValuesAndVision />
      <OurServices />
      <Leadership />
      <OurStaff />
      <HealthAndSafety />
      <PlantAndEquipment />
    </>
  );
};
export default AboutUs;