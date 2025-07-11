import "./questions.css";
import { useState } from "react";
export default function Question({ question, answer, isSelected, onClick }) {
  return (
    <div className="question-container">
      <div className="question" onClick={onClick}>
        <div className="question-text-wrapper">
          <p
            className="question-text"
            style={{ fontWeight: isSelected ? "700" : "" }}
          >
            {question}
          </p>
          {!isSelected ? (
            <svg
              width="9"
              height="7"
              viewBox="0 0 9 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 0.798645L5 4.79865L9 0.798645"
                stroke="#F47B56"
                strokeWidth="2"
              />
            </svg>
          ) : (
            <svg
              width="9"
              height="7"
              viewBox="0 0 9 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 5.79865L5 1.79865L9 5.79865"
                stroke="#F47B56"
                strokeWidth="2"
              />
            </svg>
          )}
        </div>
        {isSelected ? (
          <div>
            <p className="answer">{answer}</p>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
