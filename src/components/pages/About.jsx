import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function About() {
  return (
    <div>
      <Header />
      <div className="hero">
        <div className="hero-text">
          <h1 className="fade-in">About Quiz Web</h1>

          <p>
            Hey there! Welcome to <strong>Quiz Web</strong> — a fun little place
            where you can test your knowledge, challenge yourself, and maybe
            even learn a few new things along the way. Whether you’re killing
            time, brushing up on facts, or just love a good challenge, we’ve got
            quizzes for you.
          </p>

          <p>
            You can play quizzes on all sorts of topics — from science and
            history to random fun stuff. Just pick a quiz, answer the questions,
            and see how you do. No stress, no pressure, just some brain exercise
            and a bit of fun.
          </p>

          <p>
            Got friends? Challenge them and see who’s the quiz master. Got
            suggestions? We’re all ears — send us a message anytime!
          </p>
        </div>
          </div>
    </div>
  );
}
