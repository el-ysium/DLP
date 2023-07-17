import React from "react";
import Home from "./pages/homepage";
import Banner from "./pages/banner";
import "./App.css";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
