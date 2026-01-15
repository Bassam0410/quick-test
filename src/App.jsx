import { useState } from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
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
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("language") || "En";
  });
  function handleUserQuestions(questions) {
    setUserQuestions(questions);
  }
  function handleSubmit() {}
  function handleLanguage(value) {
    localStorage.setItem("language", value);
    setLanguage(value);
  }
  function handleSubject(sub) {
    setSubject(sub);
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
    <div dir={language == "Ar" ? "rtl" : "ltr"}>
      <HashRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Welcome
                language={language}
                setLanguage={handleLanguage}
                resetValues={resetValues}
                setSubject={handleSubject}
              />
            }
          />
          <Route
            path="/about"
            element={<About setLanguage={handleLanguage} />}
          />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/correct-answers"
            element={
              <CorrectAnswers
                language={language}
                setLanguage={handleLanguage}
                subject={subject}
              />
            }
          />
          <Route
            path="/my-answers"
            element={
              <MyAnswers
                language={language}
                setLanguage={handleLanguage}
                questions={userQuestions}
                answers={userAnswers}
              />
            }
          />
          <Route
            path="/finish"
            element={
              <Finish
                language={language}
                setLanguage={handleLanguage}
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
                language={language}
                setLanguage={handleLanguage}
                addQuestions={handleUserQuestions}
                answers={handleUserAnswers}
                subject={subject}
                setUserAnswers={handleUserAnswers}
              />
            }
          />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
