import React from "react";
import "../sem/sem.css";

import { AiTwotoneMail } from "react-icons/ai";
const Ws = () => {
  return (
    <div className="Sem">
      <div className="semright">
        <li className="sem1">
          <AiTwotoneMail style={{ color: "darkgoldenrod", fontsize: "500px" }} />
        </li>
      </div>
      <div className="semleft">
        <h2 className="semmain">Email Marketing</h2>
        <p className="semp">
          Email marketing is a form of marketing that can make the customers on
          your email list aware of new products, discounts, and other services.
          It can also be a softer sell to educate your audience on the value of
          your brand or keep them engaged between purchases. It can also be
          anything in between.
        </p>
      </div>
    </div>
  );
};

export default Ws;
