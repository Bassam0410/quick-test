import React from "react";
import Header from "./pages/Header";
export default function MyAnswers(props) {
  const answers = props.answers;
  const questions = props.questions;
  console.log(answers.length);
  console.log(questions.length);
  return (
    <div>
      <Header />
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
