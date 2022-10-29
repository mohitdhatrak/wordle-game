export function Letter({
    guessNum,
    letterIndex,
    wordGrid,
    setWordGrid,
    letterNum,
    attemptNum,
    letterColour,
}) {
    return (
        <span
            className={`letterGuess ${
                wordGrid[guessNum][letterIndex] === ""
                    ? "letterGuess-blank"
                    : "letterGuess-filled"
            } ${
                letterColour[guessNum]
                    ? letterColour[guessNum][letterIndex]
                    : ""
            }`}
        >
            {wordGrid[guessNum][letterIndex]}
        </span>
    );
}
