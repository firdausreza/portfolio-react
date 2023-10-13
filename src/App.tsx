import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import About from "./components/About";
import Skills from "./components/Skills";

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
      </main>
    </div>
  );
}

export default App;
