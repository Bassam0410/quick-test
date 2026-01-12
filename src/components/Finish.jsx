import React from "react";
import { Link } from "react-router-dom";
import Header from "./pages/Header";
export default function Finish(props) {
  // console.log(props.userAnswers);
  let correctAnswers = []
  let wrongAnswers = []
  props.userAnswers.forEach((item) => {
    if (item.value) {
    correctAnswers = [...correctAnswers , item.answer];
  }
    else {
      wrongAnswers = [...wrongAnswers, item.answer];
  }
  })
  
  let result = Math.ceil((100 / props.totalQuestions.length) * correctAnswers.length)
  
  const styleResult = {
    fontWeight: "400px",
    color: result > 50 ? "#66c266" : "red",
    fontSize: "25px",
    textAlign: "center",
  };
  const style = {
    fontSize: "15px",
    color: "blue",
  };  
  return (
    <div>
      <Header />
      <div className="finish-btn">
        <div>
          <p style={styleResult}>{result}%</p>
          <p style={style}>
            Answered {correctAnswers.length} of {""}
            {props.totalQuestions.length} correctly
          </p>
          <Link to="/my-answers">
            <button>My Answers</button>
          </Link>
          <Link to="/">
            <button>Go Back</button>
          </Link>
          <Link to="/correct-answers">
            <button>Correct Answers</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
