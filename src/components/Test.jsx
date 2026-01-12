import React, { useState } from "react";
import quizQuestions from "../questions";
import { Link } from "react-router-dom";
import Header from "./pages/Header";
import TestForm from "./TestForm";
import shuffle from "../utils/shuffle";
export default function Test(props) {
  const [qNumber, setQNumber] = useState(0);
  const [finish, setFinish] = useState(true);
  const quizQuestionsType = shuffle(quizQuestions[props.subject].questions);
    let question = quizQuestionsType[qNumber];
    console.log('question number ' + qNumber );
    
  function handleInputChange() {
    setFinish(false);
  }
  //  handle next question
  function nextQuestion() {
    setFinish(true);
    const input = document.querySelector(
      `input[name= ${question.name}]:checked`
    );
      const value = input.value;
      if (value === question.correctAnswer) {
        props.setUserAnswers({ answer: value, value: true });
      } else {
        props.setUserAnswers({ answer: value, value: false });
      } if (qNumber  <= quizQuestionsType.length ) {
          console.log('added');
          setQNumber((pre) => pre + 1);
      }

    const unCheck = document.querySelectorAll(`input[name= ${question.name}]`);
    unCheck.forEach((radio) => {
      radio.checked = false;
    });
  }
  return (
    <>
      <Header />
      <div className="form-container">
        <TestForm
          qNumber={qNumber}
          totalQuestions={quizQuestionsType}
          question={question}
          handleInputChange={handleInputChange}
        />
        <div className="buttons">
          {qNumber === quizQuestionsType.length - 1 ? (
            <Link onClick={nextQuestion} to="/finish">
              <button
                disabled={finish ? true : false}
                style={{ cursor: finish && "not-allowed" }}
              >
                {!finish && props.addQuestions(quizQuestionsType)}
                Finish
              </button>
            </Link>
          ) : (
            <button
              type="button"
              onClick={() => {
                nextQuestion();
              }}
              disabled={finish ? true : false}
              style={{ cursor: finish && "not-allowed" }}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </>
  );
}
