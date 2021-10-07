import React from "react";
import "./About.styles.scss";
import { PrimaryButton } from "..";

export const About = () => {
  return (
    <section className="section about" id="about">
      <h2 className="section__title section__title--about">Who I am</h2>
      <h3 className="section__subtitle section__subtitle--about">
        A self taught learner
      </h3>
      <div className="about__img-container">
        <img
          src="https://images.pexels.com/photos/4709289/pexels-photo-4709289.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="duy-2"
          className="about__img"
        />
      </div>
      <p className="about__text">
        1 year ago, I was working as a customer support staff in Bangkok, just
        playing video games after work every night, not knowing where I was
        going in life... And one day I tried learning programming, I realised
        how much I enjoyed the beauty of web design and totally curios of how to
        make them. And from then I never look back!
      </p>
      <p className="about__text" style={{ marginBottom: "40px" }}>
        Started with basic HTML, CSS courses from the internet, until now I have
        developed more than 10 websites using different skillsets, including
        HTML, CSS, Javascript and React JS. I am looking for a company where I
        can utilize my knowledge as well as getting to know more things that I
        cannot learn by myself.
      </p>
      <PrimaryButton url="https://phduy1905.github.io/resume/" newtab>
        check my resume
      </PrimaryButton>
    </section>
  );
};
