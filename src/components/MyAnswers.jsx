import React from "react";
import Header from "./pages/Header";
export default function MyAnswers(props) {
  const answers = props.answers;
  const questions = props.questions;
  return (
    <div>
      <Header setLanguage={props.setLanguage} language={props.language} />
      <p className="guide-answers">
        {" "}
        <span className="green">True</span> <span className="red">False</span>
      </p>
      {questions.map((question, qIndex) => {
        let answer = answers[qIndex].answer || "No Answer";
        return (
          <div
            key={qIndex}
            style={{
              border: "2px solid ",
              borderColor: answers[qIndex].value ? "rgb(52 253 52)" : "red",
            }}
            className="answer anim-show"
          >
            <h3>{question.question}</h3>
            <p>{answer}</p>
          </div>
        );
      })}
    </div>
  );
}
