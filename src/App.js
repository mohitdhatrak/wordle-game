import axios from "axios";
import React, { useEffect, useState } from "react";
import { GuessGrid } from "./components/GuessGrid/GuessGrid";
import { HeaderBar } from "./components/HeaderBar/HeaderBar";
import { Keyboard } from "./components/Keyboard/Keyboard";
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
    const [answer, setAnswer] = useState({});
    const [letterColour, setLetterColour] = useState({ keyboardColour: {} });
    const [feedback, setFeedback] = useState("You have 6 attempts left!");

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(
                    "https://random-word-api.herokuapp.com/word?length=5"
                );
                const data = await response.data;
                setAnswer({ ...answer, answerWord: data[0] });
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
                    answer,
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
                answer={answer}
                setFeedback={setFeedback}
            />
        </div>
    );
}
