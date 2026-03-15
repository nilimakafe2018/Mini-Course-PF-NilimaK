import Button from "../Button/Button";
import React, { useState, useEffect } from "react";
import QuizQuestion from "../QuizQuestions/QuizQuestion";
import quizData from "../QuizQuestions/quizData.json";
import "../Certificate/Certificate.css";
import ShowResult from "./ShowResult";
import Login from "./Login";
import Video from "./Video";
import CertificateCreator from "../Certificate/CertificateCreator";

function CourseVideo() {
  //state to track which page the user is currently on
  const [changePages, setChangePages] = useState(() => {
    const savedPage = localStorage.getItem("changePages");
    return savedPage !== null ? Number(savedPage) : 0;
  });

  //state to track quiz score
  const [score, setScore] = useState(() => {
    const savedScore = localStorage.getItem("score");
    return savedScore !== null ? Number(savedScore) : 0;
  });

  const [errorMessage, setErrorMessage] = useState(null);

  //saving current page to local storage whenever changesPages state change
  useEffect(() => {
    localStorage.setItem("changePages", changePages);
  }, [changePages]);

  //saving current score to local storage whenever score state change
  useEffect(() => {
    localStorage.setItem("score", score);
  }, [score]);

  const flagQuizzesDone = [];
  const flagQuizCorrect = [];

  //function to called by QuizQuestion component after user selects answer
  function quizScoreObtained(correctFlag) {
    flagQuizzesDone[changePages - 2] = true;            // Mark current quiz complete
    flagQuizCorrect[changePages - 2] = correctFlag;     //storing whether the answer is correct
    setErrorMessage(null);
  }

  //function to handle moving to next page
  const handleNext = () => {
    if (changePages === 1) {
      setChangePages(2);
      return;
    }

    //checking if the user is currently on quiz page
    //prevent moving forward without selecting answer
    if (changePages >= 2 && changePages < quizData.length + 2) {
      if (!flagQuizzesDone[changePages - 2]) {
        setErrorMessage("Please complete the quiz first!");
        return;
      }

      //if answer is selected, check answer and move to next pahe
      if (flagQuizzesDone[changePages - 2]) {
        if (flagQuizCorrect[changePages - 2]) {       //increasing score if the answer is correct
          setScore(score + 1);
        }

        setChangePages(changePages + 1);
        return;
      }
    }
  };

  return (
    <>
      <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "30px", marginTop: "0px", paddingBottom: "20px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "5px",
          }}
        >
          {changePages === 0 &&
            <div>
              <Login
                onLoginSuccess={(hasCertificate) => {
                  if (hasCertificate) {
                    setChangePages(quizData.length + 3);
                  } else {
                    setChangePages(1);
                  }
                }}
              />
            </div>
          }

          {changePages === 1 &&
            <div><Video /></div>
          }

          {changePages >= 2 && changePages < quizData.length + 2 &&
            <div>
              <QuizQuestion
                data={quizData[changePages - 2]}
                choiceSelected={quizScoreObtained}
              />
            </div>
          }

          {/* result page after all quizzes are done */}
          {changePages === quizData.length + 2 && (
            <div>
              <ShowResult
                score={score}
                restartCourse={() => {
                  setScore(0);                
                  setChangePages(1);
                  localStorage.setItem("score", 0);
                  localStorage.setItem("changePages", 1);
                }}
              />
            </div>
          )}

          {/* final page, certificate creator*/}
          {changePages === quizData.length + 3 &&
            <div><CertificateCreator /></div>
          }

          {/* showing Next button in all pages except login page, result page and certificate page */}
          {changePages !== 8 && changePages !== 0 && changePages !== quizData.length + 3 && (
            <>
              {errorMessage &&
                <div style={{ color: "red" }}>
                  {errorMessage}
                </div>
              }
              <Button text="Next" onClick={handleNext} />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default CourseVideo;