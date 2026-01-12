import React from "react";
import { Link } from "react-router-dom";
import studyImage from "/src/assets/study.png";
import Footer from "./Footer";
import Header from "./Header";
import Card from "../cards/Card";
import tests from "../../assets/data";
export default function Welcome(props) {
  return (
    <div>
      <Header />
      <section className="hero">
        <div className="hero-text">
          <h1 className="fade-in">Welcome to QuickTest</h1>
          <p className="fade-in delay-1">
            Take short online tests anytime and see your results instantly.
            Perfect for practicing, learning, or testing your knowledge — all in
            just a few minutes!
          </p>
          <ul className="features fade-in delay-2">
            <li>⏱️ Quick & Simple – Tests take just a few minutes</li>
            <li>📊 Instant Results – See your scores right away</li>
            <li>💻 Any Device – Works on phone, tablet, or desktop</li>
            <li>🚀 Motivating – Learn while testing yourself</li>
          </ul>
        </div>
        <div className="hero-image fade-in delay-2">
          <img src={studyImage} alt="Online test illustration" />
        </div>
      </section>
      <div className="cards">
        {tests.map((test, index) => {
          return (
            <Card
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
