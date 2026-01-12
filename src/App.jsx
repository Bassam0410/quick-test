import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test from "./components/Test";
import Welcome from "./components/pages/Welcome";
import Finish from "./components/Finish";
import CorrectAnswers from "./components/CorrectAnswers";
import MyAnswers from "./components/MyAnswers";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
function App() {
  const [userQuestions, setUserQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState([{}]);
  const [subject, setSubject] = useState("Networking");
  function handleUserQuestions(questions) {
    setUserQuestions((preValue) => {
      const update = [...preValue, questions.question];
      return update;
    });
  }
  function handleSubmit() {
  
  }
  function handleSubject(sub) {
    const value = sub.target.value;
    setSubject(value);
  }
  function handleUserAnswers(ipt) {
    setUserAnswers((pre) => {
      return [...pre, ipt];
    });
  }
  function resetValues() {
    setUserAnswers([]);
    setUserQuestions([]);
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Welcome resetValues={resetValues} setSubject={handleSubject} />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/correct-answers"
            element={<CorrectAnswers subject={subject} />}
          />
          <Route
            path="/my-answers"
            element={
              <MyAnswers questions={userQuestions} answers={userAnswers} />
            }
          />
          <Route
            path="/finish"
            element={
              <Finish
                totalQuestions={userQuestions}
                userAnswers={userAnswers}
                handleSubmit={handleSubmit}
              />
            }
          />
          <Route
            path={`/start-quiz`}
            element={
              <Test
                addQuestions={handleUserQuestions}
                answers={handleUserAnswers}
                subject={subject}
                setUserAnswers={handleUserAnswers}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
