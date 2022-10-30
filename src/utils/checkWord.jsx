import wordsDictionary from "../words.json";
import { displayResult } from "./displayResult";

export function checkWord(
    wordGrid,
    setLetterNum,
    attemptNum,
    setAttemptNum,
    answer,
    letterColour,
    setLetterColour,
    setFeedback
) {
    let word = "";

    // to check if word is complete
    for (const char of wordGrid[attemptNum]) {
        if (char === "") {
            setFeedback("Word doesn't have enough letters!");
            return;
        } else {
            word += char.toLowerCase();
        }
    }

    console.log(`User guessed word - ${word}`);

    if (wordsDictionary[word]) {
        setAttemptNum(attemptNum + 1);
        setLetterNum(0);

        displayResult(
            word,
            answer,
            attemptNum,
            setAttemptNum,
            letterColour,
            setLetterColour,
            setFeedback
        );
    } else {
        setFeedback("Word not in list!");
    }
}
