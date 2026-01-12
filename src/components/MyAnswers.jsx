import React from "react";
import Header from "./pages/Header";
export default function MyAnswers(props) {
  const answers = props.answers;
  const questions = props.questions;
  return (
    <div>
      <Header />
      {questions.map((question, qIndex) => {
        return (
          <div
            key={qIndex}
            className="answer anim-show"
            style={{
              border: "   2px solid ",
              borderColor: answers[qIndex + 1].value ? "rgb(52 253 52)" : "red",
            }}
          >
            <h3>{question}</h3>
            <p>{answers[qIndex + 1].answer}</p>
          </div>
        );
      })}
    </div>
  );
}
