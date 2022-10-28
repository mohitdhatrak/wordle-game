import { Letter } from "./Letter";

export function Word({
    guessNum,
    wordGrid,
    setWordGrid,
    attemptNum,
    letterColour,
}) {
    return (
        <div className="wordGuess">
            <Letter
                guessNum={guessNum}
                wordGrid={wordGrid}
                setWordGrid={setWordGrid}
                attemptNum={attemptNum}
                letterColour={letterColour}
                letterNum="0"
            />
            <Letter
                guessNum={guessNum}
                wordGrid={wordGrid}
                setWordGrid={setWordGrid}
                attemptNum={attemptNum}
                letterColour={letterColour}
                letterNum="1"
            />
            <Letter
                guessNum={guessNum}
                wordGrid={wordGrid}
                setWordGrid={setWordGrid}
                attemptNum={attemptNum}
                letterColour={letterColour}
                letterNum="2"
            />
            <Letter
                guessNum={guessNum}
                wordGrid={wordGrid}
                setWordGrid={setWordGrid}
                attemptNum={attemptNum}
                letterColour={letterColour}
                letterNum="3"
            />
            <Letter
                guessNum={guessNum}
                wordGrid={wordGrid}
                setWordGrid={setWordGrid}
                attemptNum={attemptNum}
                letterColour={letterColour}
                letterNum="4"
            />
        </div>
    );
}
