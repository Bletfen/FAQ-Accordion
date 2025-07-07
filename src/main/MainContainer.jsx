import "./maincontainer.css";
import Questions from "./questions/QuestionContainer";
import { useState } from "react";
export default function Main() {
  return (
    <div className="container">
      <div className="img-wrapper"></div>
      <Questions />
    </div>
  );
}
