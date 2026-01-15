import React from "react";
import LanguageIcon from "@mui/icons-material/Language";
import { Link } from "react-router-dom";
import Logo from "/public/logo.png";
import header from "../../assets/header";
export default function Header(props) {
  const language = props.language;
  const linkHeader = header[language];
  return (
    <nav>
      <img className="logo" src={Logo} alt="logo-image" />
      <ul>
        {linkHeader.map(([title, path], index) => {
          return (
            <Link key={index} to={path} style={{ textDecoration: "none" }}>
              <li className="link">{title}</li>
            </Link>
          );
        })}
        {/* 
        <Link to="/" style={{ textDecoration: "none" }}>
          <li className="link">Home</li>
        </Link>
        <Link to="/start-quiz" style={{ textDecoration: "none" }}>
          <li className="link">Start a Quiz</li>
        </Link>
        <Link to="/Contact" disabled={true} style={{ textDecoration: "none" }}>
          <li className="link">Contact</li>
        </Link> */}
      </ul>
      <button
        title="Select a language"
        name="language"
        id=""
        value={language === "Ar" ? "En" : "Ar"}
        onClick={(evt) => {
          props.setLanguage(evt.target.value);
        }}
      >
        {language == "Ar" ? "English" : " العربية"}
      </button>
    </nav>
  );
}
