import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./form.css";

const ContactForm = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2gkvrid",
        "template_qoxinvy",
        form.current,
        "user_CeP5JbAgJY9AGNMNPBDoG"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="former">
      <div className="formerbg">
     <div className="drty">
     <form ref={form} onSubmit={sendEmail}>
         
          
        </form>
     </div>
      </div>

          
      </div>
       
      
    
  );
};

export default ContactForm;
