import { checkWord } from "./checkWord";

export function validateInput(
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
    inputEvent
) {
    if (attemptNum < 6) {
        let input;
        if (inputEvent === "keyPress") {
            input = e.key;
        } else {
            input = e.target.innerText;
        }

        const regex = /[a-zA-Z]/;

        if (regex.test(input) && input.length === 1) {
            if (letterNum < 5) {
                wordGrid[attemptNum][letterNum] = input.toUpperCase();
                setWordGrid([...wordGrid]);
                setLetterNum(letterNum + 1);
            }
        } else if (input === "Enter") {
            checkWord(
                wordGrid,
                setLetterNum,
                attemptNum,
                setAttemptNum,
                answer,
                letterColour,
                setLetterColour,
                setFeedback
            );
        } else if (input === "Backspace") {
            wordGrid[attemptNum][letterNum - 1] = "";
            setWordGrid([...wordGrid]);
            if (letterNum > 0) {
                setLetterNum(letterNum - 1);
            }
        }
    } else {
        return;
    }
}
