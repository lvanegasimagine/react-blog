import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Redireccion = styled.div`
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  a {
    text-decoration: none;
    color: #165168;
  }

  a:hover {
    text-decoration: underline;
  }
`;
const Error404Screen = () => {
  return (
    <div>
      <h2>Error 404</h2>
      <p style={{ marginTop: "20px", marginBottom: "20px" }}>La pagina que buscas no existe o fue cambiada de lugar.</p>
      <Redireccion>
        <Link to="/">Pincha aqui.</Link>
      </Redireccion>
    </div>
  );
};

export default Error404Screen;
