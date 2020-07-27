import React, { useState, useEffect, Fragment } from "react";
import {
  FaArrowLeft,
  FaRecycle,
  FaSpinner,
  FaArrowRight,
} from "react-icons/fa";
import "./style/style.css";
import Rock from "./assets/rock.png";
import Paper from "./assets/paper.png";
import Scissor from "./assets/scissor.png";

const App = () => {
  let [waiting, setWaiting] = useState(true);
  let [gameLoading, setGameLoading] = useState(false);
  let [myChoice, setMyChoice] = useState("");
  let [robotChoice, setRobotChoice] = useState("");
  let [isLoading, setIsLoading] = useState(false);
  let [result, setResult] = useState("");
  let [smallSpin, setSmallSpin] = useState(false);
  const choices = ["Paper", "Rock", "Scissor"];

  const challenge = (choice) => {
    result = "";
    setResult(result);
    let random = Math.floor(Math.random() * choices.length);
    robotChoice = "";
    setRobotChoice(robotChoice);
    isLoading = true;
    setIsLoading(isLoading);
    setTimeout(() => {
      myChoice = choice;
      setMyChoice(myChoice);
      robotChoice = choices[random];
      setRobotChoice(robotChoice);
      isLoading = false;
      setIsLoading(isLoading);
      arbiter();
    }, 1000);
  };

  const arbiter = () => {
    // SAME CHOICES

    if (myChoice === "Scissor" && robotChoice === "Scissor") {
      result = "Draw";
      setResult(result);
    }
    if (myChoice === "Rock" && robotChoice === "Rock") {
      result = "Draw";
      setResult(result);
    }
    if (myChoice === "Paper" && robotChoice === "Paper") {
      result = "Draw";
      setResult(result);
    }

    if (myChoice === "Scissor" && robotChoice === "Rock") {
      result = "Robot";
      setResult(result);
    }
    if (myChoice === "Rock" && robotChoice === "Scissor") {
      result = "Player";
      setResult(result);
    }
    if (myChoice === "Scissor" && robotChoice === "Paper") {
      result = "Player";
      setResult(result);
    }
    if (myChoice === "Paper" && robotChoice === "Scissor") {
      result = "Robot";
      setResult(result);
    }
    if (myChoice === "Paper" && robotChoice === "Rock") {
      result = "Player";
      setResult(result);
    }
    if (myChoice === "Rock" && robotChoice === "Paper") {
      result = "Robot";
      setResult(result);
    }
  };

  const reset = () => {
    smallSpin = true;
    setSmallSpin(smallSpin);
    setTimeout(() => {
      myChoice = "";
      setMyChoice(myChoice);
      robotChoice = "";
      setRobotChoice(robotChoice);
      result = "";
      setResult(result);
      smallSpin = false;
      setSmallSpin(smallSpin);
    }, 500);
  };

  const loadGame = () => {
    gameLoading = true;
    setGameLoading(gameLoading);
    setTimeout(() => {
      waiting = false;
      setWaiting(waiting);
      gameLoading = false;
      setGameLoading(gameLoading);
    }, 500);
  };

  const quitGame = () => {
    myChoice = "";
    setMyChoice(myChoice);
    robotChoice = "";
    setRobotChoice(robotChoice);
    result = "";
    setResult(result);
    waiting = true 
    setWaiting(waiting)
  }
  return (
    <div className="main">
      <div className="header">
        <div className="rock">ROCK.</div>
        <div className="paper">PAPER.</div>
        <div className="scissor">SCISSOR.</div>
      </div>
      <div className="subHeader">Made by : Kim Fajardo</div>
      <div className={waiting ? "body" : "bodyPlaying"}>
        {waiting ? (
          <div className="wait">
            <div className="sprite-holder">
              <img className="sprite rck" src={Rock} />
              <img className="sprite ppr" src={Paper} />
              <img className="sprite scr" src={Scissor} />
            </div>
            <button onClick={loadGame}>
              {" "}
              {gameLoading ? (
                <FaSpinner className="spinner-small" />
              ) : (
                "PLAY NOW"
              )}{" "}
            </button>
          </div>
        ) : (
          <Fragment>
            <div className="playBox">
              <div className="left">
                {myChoice !== "" ? (
                  <img
                    className={myChoice !== "" && "choice-sprite"}
                    src={
                      myChoice === "Rock"
                        ? Rock
                        : myChoice === "Paper"
                        ? Paper
                        : myChoice === "Scissor" && Scissor
                    }
                  />
                ) : (
                  ""
                )}
              </div>
              <div className="referee">
                {isLoading ? (
                  <Fragment>
                    <h3>3,2,1... SHOW</h3>
                    <FaSpinner className="spinner" />
                  </Fragment>
                ) : (
                  <Fragment>
                    {result === "" ? (
                      ""
                    ) : result !== "Draw" ? (
                      <Fragment>
                        <h3>The winner is</h3>
                        <h1>
                          {result === "Player" ? (
                            <FaArrowLeft />
                          ) : (
                            result === "Robot" && <FaArrowRight />
                          )}
                        </h1>
                      </Fragment>
                    ) : (
                      <h1>DRAW</h1>
                    )}
                  </Fragment>
                )}
              </div>
              <div className="right">
                {robotChoice !== "" ? (
                  <img
                    className={robotChoice !== "" && "choice-sprite"}
                    src={
                      robotChoice === "Rock"
                        ? Rock
                        : robotChoice === "Paper"
                        ? Paper
                        : robotChoice === "Scissor" && Scissor
                    }
                  />
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="choices">
              {result === "" ? (
                <Fragment>
                  <button
                    onClick={() => challenge("Rock")}
                    className="choiceBtn"
                  >
                    ROCK
                  </button>
                  <button
                    onClick={() => challenge("Paper")}
                    className="choiceBtn"
                  >
                    PAPER
                  </button>
                  <button
                    onClick={() => challenge("Scissor")}
                    className="choiceBtn"
                  >
                    SCISSOR
                  </button>
                </Fragment>
              ) : (
                <Fragment className='endscreen'>
                <button onClick={reset} className="choiceBtn again">
                  {smallSpin ? (
                    <FaSpinner className="spinner-small" />
                  ) : (
                    "AGAIN?"
                  )}
                </button>
                <button onClick={quitGame} className='quit'>QUIT</button>
                </Fragment>
              )}
            </div>
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default App;
