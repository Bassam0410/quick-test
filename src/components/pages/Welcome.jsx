import React from "react";
import { Link } from "react-router-dom";
import studyImage from "/src/assets/study.png";
import Footer from "./Footer";
import Header from "./Header";
import Card from "../cards/Card";
import tests from "../../assets/data";
import Hero from "../cards/Hero";
export default function Welcome(props) {
  return (
    <div>
      <Header setLanguage={props.setLanguage} language={props.language} />
      <section className="hero">
        <Hero language={props.language} />
        <div className="hero-image fade-in delay-2">
          <img src={studyImage} alt="Online test illustration" />
        </div>
      </section>
      <div className="cards">
        {tests[props.language].map((test, index) => {
          return (
            <Card
              language={props.language}
              resetValues={props.resetValues}
              key={index}
              heading={test.heading}
              title={test.title}
              description={test.description}
              image={test.image}
              setSubject={props.setSubject}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
