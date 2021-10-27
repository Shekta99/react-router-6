import React from "react";
import { useParams } from "react-router-dom";

function ContactUs() {
  const { name } = useParams();
  return (
    <>
      <h3>Contact Us Page</h3>
      <p>{name}</p>
    </>
  );
}

export default ContactUs;
