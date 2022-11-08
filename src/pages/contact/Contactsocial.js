import React from "react";
import "./social.css";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Contactsocial = () => {
  return (
    <div className="social">
      <div className="socialright">
        <span className="tti">Follow us!</span>
        <p className="ttpar">
          LOOKING TO KEEP UP WITH THE LATEST?
          <br /> YOU CAN FIND US HERE:
        </p>

        {/* <li className="hli">
            <a className="ali" href="www.twitter.com" target="_blank" rel="noopenner noreferrer">
              <FaTwitter />
            </a> */}
        <div className="hul">
          <a
          style={{Color:"white"}}
            className="ali"
            href="www.twitter.com"
            target="_blank"
            rel="noopenner noreferrer"
          >
            <FaTwitter  style={{color:"white"}}/>
          </a>
          <a
            className="ali"
            href="https://github.com " target="_blank" rel="noopenner noreferrer"
          >
            <FaGithub style={{color:"white"}} />
          </a>
          <a
            className="ali"
            href="https://facebook.com"
            target="_blank"
            rel="noopenner noreferrer"
          >
            <FaFacebook  style={{color:"white"}}/>
          </a>
          <a
            className="ali"
            href="www.twitter.com"
            target="_blank"
            rel="noopenner noreferrer"
          >
            <FaInstagram style={{color:"white"}}/>
          </a>
        </div>
      </div>
      <div className="socialleft">
        <p className="ant">
        todo:insert contact form here
        </p>
        <span className="mse">sponzer@gmail.com</span>
      </div>
    </div>
  );
};

export default Contactsocial;
