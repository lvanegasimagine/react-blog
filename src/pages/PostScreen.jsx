import React, { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { getPostById } from "../selector/getPostById";

const PostScreen = () => {
  const { id } = useParams();
  const post = useMemo(() => getPostById(id), [id]);

  const navigate = useNavigate();

  const handleReturn = () => {
    navigate("/blog");
  };

  return (
    <>
      {post ? (
        <div>
          <h1>{post.titulo}</h1>
          <p>{post.texto}</p>
        </div>
      ) : (
        <Contenedor>
          <h1>No existe post
          
          </h1>
          <Boton className="btn btn-outline-info" onClick={handleReturn}>Atras</Boton>
        </Contenedor>
      )}
    </>
  );
};

const Contenedor = styled.div`
  justify-content: space-between;
  color: #165168;
  margin: 0 20px;
`;

const Boton = styled.button`
  margin-top: 10px;
  border-radius: 5px;
  padding: 10px;
  border: none;
  background-color: #00b894;
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;
`;

export default PostScreen;
