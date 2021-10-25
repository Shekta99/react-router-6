import { type } from "os";
import React from "react";
import { useParams } from "react-router-dom";

type ContactParams = {
  name: string;
};

export default function ContactUs() {
  const { name } = useParams<ContactParams>();
  return (
    <>
      <h3>Contact Us Page</h3>
      <p>{name}</p>
    </>
  );
}
