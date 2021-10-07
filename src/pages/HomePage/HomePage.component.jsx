import React from "react";
import { About, Intro, Projects, Services, Nav } from "../../components";
const HomePage = () => {
  return (
    <div className="home-page">
      <Intro />
      <Services />
      <About />
      <Projects />
      <Nav />
    </div>
  );
};

export default HomePage;
