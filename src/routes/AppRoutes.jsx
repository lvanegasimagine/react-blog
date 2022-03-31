import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import AboutScreen from "../pages/AboutScreen";
import BlogScreen from "../pages/BlogScreen";
import Error404Screen from "../pages/Error404Screen";
import HomeScreen from "../pages/HomeScreen";
import PostScreen from "../pages/PostScreen";

const AppRoutes = () => {
  return (
    <Router>
      <ContenedorPrincipal>
        <Header />
        <Main>
          <Routes>
            <Route path="/" index element={<HomeScreen />}></Route>
            <Route path="/blog" element={<BlogScreen />}></Route>
            <Route path="/post/:id" element={<PostScreen />}></Route>
            <Route path="/acerca-de" element={<AboutScreen />}></Route>
            <Route path="*" element={<Error404Screen/>}/>
          </Routes>
        </Main>
      </ContenedorPrincipal>
    </Router>
  );
};


const ContenedorPrincipal = styled.div`
  padding: 40px;
  width: 90%;
  max-width: 700px;
`;

const Main = styled.main`
  background: #fff;
  padding: 40px;
  border-radius: 10px;
`;

export default AppRoutes;
