import React from "react";
import "./Intro.styles.scss";

export const Intro = () => {
  return (
    <section className="section intro" id="intro">
      <h1 className="section__title section__title--intro">
        Hi, I'm <strong style={{ display: "block" }}>Pham Duy</strong>
      </h1>
      <p className="section__subtitle section__subtitle--intro">
        Front-End Dev
      </p>
      <div className="intro__img-container">
        <img src="https://i.imgur.com/Hpbeh8W.jpg" alt="man's portrait" />
      </div>
    </section>
  );
};
