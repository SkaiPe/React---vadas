import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Topbar from "./components/Topbar";
import Main from "./components/Main";
import Users from "./components/Users";
import User from "./components/User";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <hero>
        <div>
          <img src="/images/logo.jpg" alt="logo" />
        </div>
        <Link to="/">Users</Link>
        <Link to="/">Main</Link>
        <Link to="/">Topbar</Link>
      </hero>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/topbar" element={<Topbar />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={User} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
