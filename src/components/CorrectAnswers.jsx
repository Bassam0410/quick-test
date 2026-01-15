import React from "react";
import quizQuestions from "../questions";
import TestForm from "./TestForm";
import Header from "./pages/Header";
export default function CorrectAnswers(props) {
  const quizQuestionsType = quizQuestions[props.language][props.subject].questions;

  return (
    <>
      <Header setLanguage={props.setLanguage} language={props.language} />
      {quizQuestionsType.map((item, index) => {
        return (
          <div key={index} className="correct-ans">
            <div className="questions   anim-show">
              <h3>{item.question}</h3>
              <p className="crt-ans">{item.correctAnswer}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}
