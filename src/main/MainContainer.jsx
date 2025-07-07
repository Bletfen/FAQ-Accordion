import "./maincontainer.css";
import Questions from "./questions/QuestionContainer";
export default function Main() {
  return (
    <div className="outer-wrapper">
      <div className="box-wrapper">
        <img
          className="box"
          src="images/illustration-box-desktop.svg"
          alt="box-img"
        />
      </div>
      <div className="container">
        <div className="img-wrapper"></div>
        <div className="desktop-image">
          <img
            className="hero"
            src="images/illustration-woman-online-desktop.svg"
            alt="hero-img"
          />
          <img
            className="bg"
            src="images/bg-pattern-desktop.svg"
            alt="bg-img"
          />
        </div>
        <Questions />
      </div>
    </div>
  );
}
