import React from "react";
import "../sem/sem.css";
import { CgDesignmodo } from "react-icons/cg";
const Ga = () => {
  return (
    <div className="Sem">
      <div className="semright">
        <li className="sem1">
          <CgDesignmodo style={{ color: "darkgoldenrod", fontsize: "500px" }} />
        </li>
      </div>
      <div className="semleft">
        <h2 className="semmain">Graphic artworks</h2>
        <p className="semp">
          There's no limit to what you can get designed at sponzzer. Whether
          you're looking for a spectacular new logo or some stunning flyers, the
          talented global community of designers can make it happen.We have high
          quality designers who deliver only the best graphic design services.
          Find the right design service for you below and get design you'll love
          today!
        </p>
      </div>
    </div>
  );
};

export default Ga;
