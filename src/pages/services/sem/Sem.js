import React from "react";
import "./sem.css";
import { GiSemiClosedEye } from "react-icons/gi";
const Sem = () => {
  return (
    <div className="Sem">
      <div className="semright">
        <li className="sem1">
          <GiSemiClosedEye style={{ color: "darkgoldenrod", fontsize: "500px" }} />
        </li>
      </div>
      <div className="semleft">
        <h2 className="semmain">Search Engine Marketing</h2>
        <p className="semp">
          While SEM and SEO both rely on keywords that’s where the similarity
          ends. SEM strategies involve paying a search engine to place your
          website in front of customers. It’s closely related to pay-per-click
          advertising.
        </p>
      </div>
    </div>
  );
};

export default Sem;
