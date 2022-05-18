import React from "react";
import Routers from "../../routes/Router";
import Header from "../Header";
import Footer from "../Footer";

import { useState } from "react";

/**Router */
import { Routes, Route, Navigate } from "react-router-dom";

import LoginAdmin from "../../pages/LoginAdmin";

const Layout = () => {
  return (
        <section>
          <div>
            <Routers />
          </div>
        </section>
  );
};

export default Layout;
