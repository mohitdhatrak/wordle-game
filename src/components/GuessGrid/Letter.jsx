import { validateInput } from "../../utils/validateInput";

export function Letter({
    guessNum,
    letterNum,
    wordGrid,
    setWordGrid,
    attemptNum,
    letterColour,
}) {
    const row = guessNum;
    const column = letterNum;

    return (
        <input
            type="text"
            className={`letterGuess ${
                letterColour[row] ? letterColour[row][column] : ""
            }`}
            maxLength="1"
            disabled={attemptNum !== Number(guessNum)}
            onChange={(e) =>
                validateInput(e, row, column, wordGrid, setWordGrid)
            }
        />
    );
}
