import React from "react";
import Abouthome from "./Abouthome";
import About from "./About";
import Choosenreason from "./Choosenreason";
import ValuesVisions from "./ValuesVisions";
import Valuesoptions from "./Valuesoptions";
import Offer from "./Offer";
import Team from "./Team";

const Mainabout = () => {
  return (
    <div>
      <Abouthome />
      <Choosenreason />
      <ValuesVisions />
      <Valuesoptions />
      <Offer />
      <Team/>
      {/* <About/> */}
    </div>
  );
};

export default Mainabout;
