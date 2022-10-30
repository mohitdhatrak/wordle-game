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
                letterColour[guessNum]
                    ? letterColour[guessNum][letterIndex]
                    : ""
            }`}
        >
            {wordGrid[guessNum][letterIndex]}
        </span>
    );
}
