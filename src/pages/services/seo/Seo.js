import React from "react";
import "./seo.css";
import { FaSearchengin } from "react-icons/fa";
const Seo = () => {
  return (
    <div className="Seo">
      <div className="seoright">
        <h2 className="seomain" >Search Engine Optimization</h2>
        <p className="seop">
          SEO is always at the top of any digital marketing agency services
          list. That is because it affects all your online marketing strategies.
          SEO is vital to ensure your website shows up in online searches.
          Without effective SEO, prospective customers may never get to see any
          of your digital marketing efforts.
        </p>
      </div>
      <div className="seoleft">
        <li className="seo1">
          <FaSearchengin style={{ color: "darkgoldenrod", fontsize: "500px" }} />
        </li>
      </div>
    </div>
  );
};

export default Seo;
