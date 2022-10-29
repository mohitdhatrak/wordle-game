import axios from "axios";
import React, { useEffect, useState } from "react";
import { GuessGrid } from "./components/GuessGrid/GuessGrid";
import { HeaderBar } from "./components/HeaderBar/HeaderBar";
import { Keyboard } from "./components/Keyboard/Keyboard";
import { checkWord } from "./utils/checkWord";
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
    const [attemptNum, setAttemptNum] = useState(0);
    const [answerWord, setAnswerWord] = useState("");
    const [letterColour, setLetterColour] = useState([]);
    const [feedback, setFeedback] = useState("You have 6 attempts left!");

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(
                    "https://random-word-api.herokuapp.com/word?length=5"
                );
                const data = await response.data;
                setAnswerWord(data[0]);
                console.log(`Answer word is - ${data[0]}`);
            } catch (error) {
                // error handling pending
                // console.log(error);
            }
        })();
    }, []);

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
                    answerWord,
                    letterColour,
                    setLetterColour,
                    setFeedback,
                    "keyPress"
                )
            }
            // onLoad={(e) => e.target.focus()}
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

            <button
                className="submitBtn"
                onClick={() =>
                    checkWord(
                        wordGrid,
                        setLetterNum,
                        attemptNum,
                        setAttemptNum,
                        answerWord,
                        letterColour,
                        setLetterColour,
                        setFeedback
                    )
                }
                disabled={attemptNum > 5}
            >
                Submit word
            </button>

            <div className="feedback">{feedback}</div>

            <Keyboard
                wordGrid={wordGrid}
                setWordGrid={setWordGrid}
                letterNum={letterNum}
                setLetterNum={setLetterNum}
                attemptNum={attemptNum}
                setAttemptNum={setAttemptNum}
                letterColour={letterColour}
                setLetterColour={setLetterColour}
                answerWord={answerWord}
                setFeedback={setFeedback}
            />
        </div>
    );
}
