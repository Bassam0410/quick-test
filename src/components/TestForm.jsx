import React from "react";
import shuffle from "../utils/shuffle";
export default function TestForm(props) {
  let answers = shuffle(props.question.answers);
  return (
    <>
      <p className="total">
        Question <span>{props.qNumber  +1}</span> of 
        <span> { props.totalQuestions.length }</span> 
      </p>
      <h3>{props.question.question}</h3>
      <form className="options-container">
        {answers.map((answer, index) => {
          return (
            <div className="option-card" key={index}>
              <input
                required
                type="radio"
                name={props.question.name}
                value={answer}
                id={index}
                onChange={props.handleInputChange}
              />
              <label htmlFor={index}>{answer}</label>
            </div>
          );
        })}
      </form>
    </>
  );
}
