import Button from "../Button/Button"; //importing my child component 
import React, { useState } from "react";
import QuizQuestion1 from "../QuizQuestions/QuizQuestion1";
import QuizQuestion2 from "../QuizQuestions/QuizQuestion2";
import QuizQuestion3 from "../QuizQuestions/QuizQuestion3";
import QuizQuestion4 from "../QuizQuestions/QuizQuestion4";
import QuizQuestion5 from "../QuizQuestions/QuizQuestion5";
import QuizQuestion6 from "../QuizQuestions/QuizQuestion6";
import "../Certificate/Certificate.css";
import ShowResult from "./ShowResult";
import Login from "./Login";
import Video from "./Video";

//my main parent component which controls the entire course flow.
function CourseVideo() {

  //tracking which page is currently active. 0=login, 1=video, 2-7=quiz questions and 8=result
  const [changePages, setChangePages] = useState(0);

  //tracking user score and increase by 1 for every correct quiz answer. 
  const [score, setScore] = useState(0);

  const [errorMessage, setErrorMessage] = useState(null);

  //Tracking whether the login step and each quiz are completed
  const [flagLoginDone, setFlagLoginDone] = useState(false);
  const [flagQuiz1Done, setFlagQuiz1Done] = useState(false);
  const [flagQuiz2Done, setFlagQuiz2Done] = useState(false);
  const [flagQuiz3Done, setFlagQuiz3Done] = useState(false);
  const [flagQuiz4Done, setFlagQuiz4Done] = useState(false);
  const [flagQuiz5Done, setFlagQuiz5Done] = useState(false);
  const [flagQuiz6Done, setFlagQuiz6Done] = useState(false);

  //tracking whether the selected answer is correct.
  const [flagQuiz1Correct, setFlagQuiz1Correct] = useState(false);
  const [flagQuiz2Correct, setFlagQuiz2Correct] = useState(false);
  const [flagQuiz3Correct, setFlagQuiz3Correct] = useState(false);
  const [flagQuiz4Correct, setFlagQuiz4Correct] = useState(false);
  const [flagQuiz5Correct, setFlagQuiz5Correct] = useState(false);
  const [flagQuiz6Correct, setFlagQuiz6Correct] = useState(false);

  //function callback
  //These functions are called by each quiz component when a user select an answer
  //correctFlag is true or false, depending on the answer
  //Marks the quiz as done, record correctness and clear any previous message
  function quiz1ChoiceSelected(correctFlag) {
    setFlagQuiz1Done(true);
    setFlagQuiz1Correct(correctFlag);
    setErrorMessage(null);
  }

  function quiz2ChoiceSelected(correctFlag) {
    setFlagQuiz2Done(true);
    setFlagQuiz2Correct(correctFlag);
    setErrorMessage(null);
  }

  function quiz3ChoiceSelected(correctFlag) {
    setFlagQuiz3Done(true);
    setFlagQuiz3Correct(correctFlag);
    setErrorMessage(null);
  }

  function quiz4ChoiceSelected(correctFlag) {
    setFlagQuiz4Done(true);
    setFlagQuiz4Correct(correctFlag);
    setErrorMessage(null);
  }

  function quiz5ChoiceSelected(correctFlag) {
    setFlagQuiz5Done(true);
    setFlagQuiz5Correct(correctFlag);
    setErrorMessage(null);
  }

  function quiz6ChoiceSelected(correctFlag) {
    setFlagQuiz6Done(true);
    setFlagQuiz6Correct(correctFlag);
    setErrorMessage(null);
  }

  //handles click on the next button. This function controls navigation through the pages
  const handleNext = () => {

    //handle next click on login
    if (changePages === 0) {
      if (!window.fullname || !window.email) {
        window.loginSetError("Please enter your name and email!");
        return;
      }
      setChangePages(1);
      return;

    };

    // handle next click on video 
    if (changePages === 1) {
      setChangePages(2); //going to first quiz question
      return;
    }

    // quiz 1, check if the quiz is done, if correct increase score and go to next page
    if (changePages === 2) {

      if (!flagQuiz1Done) {
        setErrorMessage("Please complete the quiz first!")
        return;
      }

      if (flagQuiz1Done) {
        if (flagQuiz1Correct) {
          setScore(score + 1);
        }

        setChangePages(3);
        return;
      }
    }

    // click on quiz 2
    if (changePages === 3) {

      if (!flagQuiz2Done) {
        setErrorMessage("Please complete the quiz first!")
        return;
      }

      if (flagQuiz2Done) {
        if (flagQuiz2Correct) {
          setScore(score + 1);
        }

        setChangePages(4);
        return;
      }
    }

    // click on quiz 3
    if (changePages === 4) {

      if (!flagQuiz3Done) {
        setErrorMessage("Please complete the quiz first!")
        return;
      }

      if (flagQuiz3Done) {

        if (flagQuiz3Correct) {
          setScore(score + 1);
        }

        setChangePages(5);
        return;
      }
    }

    // click on quiz 4
    if (changePages === 5) {

      if (!flagQuiz4Done) {
        setErrorMessage("Please complete the quiz first!")
        return;
      }

      if (flagQuiz4Done) {

        if (flagQuiz4Correct) {
          setScore(score + 1);
        }

        setChangePages(6);
        return;
      }
    }

    // click on quiz 5
    if (changePages === 6) {

      if (!flagQuiz5Done) {
        setErrorMessage("Please complete the quiz first!")
        return;
      }

      if (flagQuiz5Done) {

        if (flagQuiz5Correct) {
          setScore(score + 1);
        }

        setChangePages(7);
        return;
      }
    }

    // click on quiz 6
    if (changePages === 7) {

      if (!flagQuiz6Done) {
        setErrorMessage("Please complete the quiz first!")
        return;
      }

      if (flagQuiz6Done) {

        if (flagQuiz6Correct) {
          setScore(score + 1);
        }

        setChangePages(8);
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
            <div><Login /></div>
          }

          {changePages === 1 &&
            <div><Video /></div>
          }

          {changePages === 2 &&
            //choiceSelected prop passes callback functions to quiz components

            <div><QuizQuestion1 choiceSelected={quiz1ChoiceSelected} /></div>
          }

          {changePages === 3 &&
            <div><QuizQuestion2 choiceSelected={quiz2ChoiceSelected} /></div>
          }

          {changePages === 4 &&
            <div><QuizQuestion3 choiceSelected={quiz3ChoiceSelected} /></div>
          }

          {changePages === 5 &&
            <div><QuizQuestion4 choiceSelected={quiz4ChoiceSelected} /></div>
          }

          {changePages === 6 &&
            <div><QuizQuestion5 choiceSelected={quiz5ChoiceSelected} /></div>
          }

          {changePages === 7 &&
            <div><QuizQuestion6 choiceSelected={quiz6ChoiceSelected} /></div>
          }

          {changePages === 8 &&
            <div><ShowResult score={score} /></div>
          }

          {changePages !== 8 && (
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
