import React from "react"
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>

  );
}

export default App;
