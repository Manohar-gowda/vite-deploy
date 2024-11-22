import React from "react";

import NavBar from './NavBar';
import Footer from "./Footer";
import { Route, Routes } from "react-router-dom";
import CenteredContainer from "./CenteredContainer";
import MainContent from "./MainContent";
import DisplayUsers from "./DisplayUsers";
import ManageUser from "./ManageUser";
import ManageRoles from "./ManageRoles";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <NavBar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<MainContent/>}></Route>
          <Route path="/menu" element={<CenteredContainer/>}></Route>
          <Route path="/users" element={<DisplayUsers/>}></Route>
          <Route path="/manage" element={<ManageUser/>}></Route>
          <Route path="/roles" element={<ManageRoles/>}></Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
