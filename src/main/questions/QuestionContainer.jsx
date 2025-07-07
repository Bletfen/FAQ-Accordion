import "./questions.css";
import Question from "./Question";
import { useState } from "react";
import questions from "./questions.json";
export default function Questions() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  return (
    <div className="question-wrapper">
      <h1>FAQ</h1>
      {questions.map((q, index) => {
        return (
          <Question
            question={q.question}
            answer={q.answer}
            isSelected={selectedIndex === index}
            onClick={() =>
              setSelectedIndex((prev) => (prev === index ? null : index))
            }
          />
        );
      })}
    </div>
  );
}
