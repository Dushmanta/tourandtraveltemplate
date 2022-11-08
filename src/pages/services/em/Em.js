import React from "react";
import "../seo/seo.css";
import {CgWebsite} from "react-icons/cg";
const Em = () => {
  return (
    <div className="Seo">
      <div className="seoright">
        <h2 className="seomain"> Website Strategy</h2>
        <p className="seop">
          Your website is your business’s online shop window. As such, it’s the
          most important part of your online marketing efforts. There are so
          many things about your website that can damage your SEO and
          credibility online. H1 tags, images, load speed, and functional links
          are just a few of the things that add value to your site. A good
          digital agency will go through your website carefully and ensure that
          every aspect of it is working to your benefit. Key Medium recently
          increased a client’s website traffic by 28% simply by improving their
          website.
        </p>
      </div>
      <div className="seoleft">
        <li className="seo1">
          <CgWebsite style={{ color: "darkgoldenrod", fontsize: "500px" }} />
        </li>
      </div>
    </div>
  );
};

export default Em;
