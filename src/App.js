import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { GuessGrid } from "./components/GuessGrid/GuessGrid";
import { HeaderBar } from "./components/HeaderBar/HeaderBar";
import { Keyboard } from "./components/Keyboard/Keyboard";
import NewGameReset from "./components/NewGameReset/NewGameReset";
import wordsDictionary from "./words.json";
import { validateInput } from "./utils/validateInput";

export function App() {
    const [wordGrid, setWordGrid] = useState([
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
    ]);
    const [letterNum, setLetterNum] = useState(0);
    const [attemptNum, setAttemptNum] = useState("disabled"); // at start input is disabled till valid word is fetched
    const [answer, setAnswer] = useState({});
    const [letterColour, setLetterColour] = useState({ keyboardColour: {} });
    const [feedback, setFeedback] = useState(
        "You have 6 attempts left to guess this word!"
    );
    const [roundNumber, setRoundNumber] = useState(1);
    const [score, setScore] = useState(0);
    const [buttonsVisible, setButtonsVisible] = useState(false);

    // used to focus on required element when page renders
    const divReference = useRef(null);

    useEffect(() => {
        (async () => {
            try {
                let data;

                // loop to ensure word fetched is a valid word
                do {
                    const response = await axios.get(
                        "https://random-word-api.herokuapp.com/word?length=5"
                    );
                    data = await response.data;
                } while (wordsDictionary[data[0]] === undefined);

                setAnswer({ ...answer, answerWord: data[0] });

                if (attemptNum === "disabled") {
                    // input enabled once word fetched
                    setAttemptNum(0);
                }

                // to focus on the required element
                divReference.current.focus();

                console.log(`Answer word is - ${data[0]}`);
            } catch (error) {
                // console.log(error);
                // error handling pending
            }
        })();
    }, [roundNumber]);

    return (
        <div
            tabIndex={0} // to get focus on div for onKeyDown event
            onKeyDown={(e) =>
                validateInput(
                    e,
                    wordGrid,
                    setWordGrid,
                    letterNum,
                    setLetterNum,
                    attemptNum,
                    setAttemptNum,
                    answer,
                    letterColour,
                    setLetterColour,
                    setFeedback,
                    "keyPress",
                    score,
                    setScore,
                    setButtonsVisible
                )
            }
            className={`app-body ${
                attemptNum === "disabled" ? "loader-container" : ""
            }`}
            ref={divReference} // used to reference the element to be focused on render
        >
            <HeaderBar />

            <GuessGrid
                wordGrid={wordGrid}
                setWordGrid={setWordGrid}
                letterNum={letterNum}
                attemptNum={attemptNum}
                letterColour={letterColour}
                setLetterColour={setLetterColour}
            />

            <div className="feedback">{feedback}</div>

            {buttonsVisible ? (
                <NewGameReset
                    roundNumber={roundNumber}
                    setRoundNumber={setRoundNumber}
                    score={score}
                    setScore={setScore}
                    setButtonsVisible={setButtonsVisible}
                    setWordGrid={setWordGrid}
                    setLetterNum={setLetterNum}
                    setAttemptNum={setAttemptNum}
                    setAnswer={setAnswer}
                    setLetterColour={setLetterColour}
                    setFeedback={setFeedback}
                />
            ) : (
                ""
            )}

            <Keyboard
                wordGrid={wordGrid}
                setWordGrid={setWordGrid}
                letterNum={letterNum}
                setLetterNum={setLetterNum}
                attemptNum={attemptNum}
                setAttemptNum={setAttemptNum}
                letterColour={letterColour}
                setLetterColour={setLetterColour}
                answer={answer}
                setFeedback={setFeedback}
                score={score}
                setScore={setScore}
                setButtonsVisible={setButtonsVisible}
            />
        </div>
    );
}
