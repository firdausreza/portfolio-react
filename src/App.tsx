import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import About from "./components/About";
import Skills from "./components/Skills";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <header className="px-3 px-md-0">
        <Navbar />
      </header>
      <main className="px-3 px-md-0">
        <Profile />
        <About />
        <Skills />
        <Experiences />
        <Projects />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
