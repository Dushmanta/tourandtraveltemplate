import React from "react";
import "../seo/seo.css";
import { IoShareSocialOutline } from "react-icons/io5";
const Smm = () => {
  return (
    <div className="Seo">
      <div className="seoright">
        <h2 className="seomain">Social Media Marketing</h2>
        <p className="seop">
          Social media marketing is the use of social media platforms to connect
          with your audience to build your brand, increase sales, and drive
          website traffic. This involves publishing great content on your social
          media profiles, listening to and engaging your followers, analyzing
          your results, and running social media advertisements. The major
          social media platforms (at the moment) are Facebook, Instagram,
          Twitter, LinkedIn, Whatsapp & YouTube.
        </p>
      </div>
      <div className="seoleft">
        <li className="seo1">
          <IoShareSocialOutline style={{ color: "darkgoldenrod", fontsize: "500px" }} />
        </li>
      </div>
    </div>
  );
};

export default Smm;
