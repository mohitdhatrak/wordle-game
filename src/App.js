import axios from "axios";
import React, { useEffect, useState } from "react";
import { GuessGrid } from "./components/GuessGrid/GuessGrid";
import { HeaderBar } from "./components/HeaderBar/HeaderBar";
import { Keyboard } from "./components/Keyboard/Keyboard";
import { checkWord } from "./utils/checkWord";

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
        <div>
            <HeaderBar />

            <GuessGrid
                wordGrid={wordGrid}
                setWordGrid={setWordGrid}
                attemptNum={attemptNum}
                letterColour={letterColour}
                setLetterColour={setLetterColour}
            />

            <button
                className="submitBtn"
                onClick={() =>
                    checkWord(
                        wordGrid,
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

            <Keyboard />
        </div>
    );
}
