import Button from "../Button/Button"; //importing my child component 
import React, { useState } from "react";
import QuizQuestion from "../QuizQuestions/QuizQuestion";
import quizData from "../QuizQuestions/quizData.json";
import "../Certificate/Certificate.css";
import ShowResult from "./ShowResult";
import Login from "./Login";
import Video from "./Video";
import CertificateCreator from "../Certificate/CertificateCreator";

//my main parent component which controls the entire course flow.
function CourseVideo() {

  const [changePages, setChangePages] = useState(0);

  //tracking user score and increase by 1 for every correct quiz answer. 
  const [score, setScore] = useState(0);

  const [errorMessage, setErrorMessage] = useState(null);

  //Tracking whether each quiz are completed
  const flagQuizzesDone = []

  //tracking whether the selected answer is correct.
  const flagQuizCorrect = [];

  //function that runs when a user select answer
  //Marks the quiz as done, record correctness and clear any previous message
  function quizScoreObtained(correctFlag) {
    flagQuizzesDone[changePages - 2] = true;
    flagQuizCorrect[changePages - 2] = correctFlag;
    setErrorMessage(null);
  }

  //handles click on the next button, function to controls navigation through the pages
  const handleNext = () => {

    // handle next click on video 
    if (changePages === 1) {
      setChangePages(2); //going to first quiz question
      return;
    }

    // quiz 1 to 6, check if the quiz is done, if correct increase score and go to next page
    if (changePages >= 2 && changePages < quizData.length + 2) {

      if (!flagQuizzesDone[changePages - 2]) {
        setErrorMessage("Please complete the quiz first!")
        return;
      }

      //if user answerd, check if the answer is correct and update socre
      if (flagQuizzesDone[changePages - 2]) {
        if (flagQuizCorrect[changePages - 2]) {
          setScore(score + 1);
        }

        setChangePages(changePages + 1);
        return;
      }
    }
  };

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "30px", marginTop: "0px", paddingBottom: "20px" }}>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "5px",

          }}
        >

          {/* conditional rendering of each component and displaying the right component for the current page*/}
          {changePages === 0 &&
            <div><Login onLoginSuccess={(hasCertificate) =>{
              if (hasCertificate) {
                setChangePages(quizData.length+3); //go directly to certificate page
              } else {setChangePages(1); //go to video page
              }
            }}
            /> </div>
          }

          {changePages === 1 &&
            <div><Video /></div>
          }

          {changePages >= 2 && changePages < quizData.length + 2 &&
            //passing question from json and passing callback function
            <div><QuizQuestion data={quizData[changePages - 2]} choiceSelected={quizScoreObtained} /></div>
          }

          {changePages === quizData.length + 2 && (
            <div>
              <ShowResult
                score={score}
                restartCourse={() => {
                  setScore(0);
                  setChangePages(1);}}
              />
            </div>
          )
            
          }

          {changePages === quizData.length + 3 &&
            <div><CertificateCreator /></div>
          }

          {changePages !== 8 && changePages !== 0 && changePages !== quizData.length + 3 && (
            <>
              {errorMessage &&
                <div style={{ color: "red" }}>
                  {errorMessage}
                </div>
              }
              <Button text="Next" onClick={handleNext} /> {/*I use my reusable button here only */}
            </>
          )}

        </div>
      </div>
    </>
  );
}
export default CourseVideo;
