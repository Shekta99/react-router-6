import React from "react";

import Email from "./Email";
import Programs from "./Programs";
import { useParams } from "react-router-dom";

function About() {
  const { id } = useParams();
  return (
    <>
      <h3>About Page</h3>
      {id === "email" ? (
        <Email />
      ) : id === "programs" ? (
        <Programs />
      ) : (
        <p>Hola somos ada school aprende a programar con nosotros</p>
      )}
    </>
  );
}
export default About;
