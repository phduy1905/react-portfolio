import React from "react";
import "./Services.styles.scss";
import { services } from "../constant";
import { PrimaryButton } from "..";

export const Services = () => {
  return (
    <section className="section services" id="services">
      <h3 className="section__title section__title--services">What I do</h3>
      <div className="services__container">
        {services.map(({ title, desc, id }) => {
          return (
            <div className="services__item" key={id}>
              <h4 className="services__title">{title}</h4>
              <p className="services__desc">{desc}</p>
            </div>
          );
        })}
      </div>

      <PrimaryButton url="#projects">see my work</PrimaryButton>
    </section>
  );
};
