import React from "react";
import { Link } from "react-router-dom";
export default function Card({
  heading,
  image,
  description,
  title,
  setSubject,
  resetValues,
}) {
  return (
    <div className="card">
      <div className="card-text">
        <h2 className="fade-in">{heading} </h2>
        <p className="fade-in delay-1">{description}</p>
        <img
          className=" hero-image fade-in delay-2"
          src={image}
          alt={`${heading} image`}
        />
        <Link to={`/start-quiz?id=${heading}`}>
          <button
            value={title}
            onClick={( ) => {
              setSubject(title);
              resetValues();
            }}
          >
            Take a Test
          </button>
        </Link>
      </div>
    </div>
  );
}
