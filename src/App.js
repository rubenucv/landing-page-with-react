import React from "react";
import './App.css';
import Card from "./js/components/Card";
import Footer from "./js/components/Footer";
import Jumbotron from "./js/components/Jumbotron";
import Navbar from "./js/components/Navbar";

const App = () => {
  return (
  <div className="container-fluid">
    <Navbar/>
    <Jumbotron />
    <Card />
    <Footer />
  </div>);
}

export default App;
