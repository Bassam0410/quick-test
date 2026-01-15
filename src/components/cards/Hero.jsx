import React from "react";
import heroContent from "../../assets/welcome";
export default function Hero(props) {
    let welcome = heroContent[props.language];
  {
      return (
        <div className="hero-text">
          <h1 className="fade-in">{welcome.title}</h1>
          <p className="fade-in delay-1">{welcome.description}</p>
          <ul className="features fade-in delay-2">{welcome.features.map((item, index) => {
            return (
              <li  key={index}>{ item}</li>
            )
          }) }</ul>
        </div>
      );
  }
}
