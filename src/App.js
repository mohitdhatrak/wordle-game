import axios from "axios";
import React, { useEffect, useState } from "react";
import { GuessGrid } from "./components/GuessGrid/GuessGrid";
import { HeaderBar } from "./components/HeaderBar/HeaderBar";
import { Keyboard } from "./components/Keyboard/Keyboard";
import NewGameReset from "./components/NewGameReset/NewGameReset";
import wordsDictionary from "./words.json";
import { validateInput } from "./utils/validateInput";

/* App structure
        <App>
            <HeaderBar />
            <MainBody>
                <GuessGrid />
                // <submitBtn />
                // <feedbackText />
                <Keyboard />
            </MainBody>
        </App> 
*/

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
    const [attemptNum, setAttemptNum] = useState("disabled"); // at start input disabled till valid word is fetched
    const [answer, setAnswer] = useState({});
    const [letterColour, setLetterColour] = useState({ keyboardColour: {} });
    const [feedback, setFeedback] = useState("You have 6 attempts left!");
    const [roundNumber, setRoundNumber] = useState(1);
    const [score, setScore] = useState(0);
    const [buttonsVisible, setButtonsVisible] = useState(false);

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
                    // instead of doing this, add a loader, till word is loaded
                    setAttemptNum(0);
                }

                console.log(`Answer word is - ${data[0]}`);
            } catch (error) {
                // error handling pending
                // console.log(error);
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
            className="app-body"
            // onLoad={(e) => e.target.focus()}
            // autoFocus
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
