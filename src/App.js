import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import "./styles/App.css";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Router Basename="https://fuggcodes.github.io/reactportfolio/">
        <Navbar />

        <Route exact path="/reactportfolio/" component={Home} />
        <Route exact path="/reactportfolio/about" component={AboutMe} />
        <Route exact path="/reactportfolio/portfolio" component={Portfolio} />
        <Route exact path="/reactportfolio/contact" component={Contact} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
