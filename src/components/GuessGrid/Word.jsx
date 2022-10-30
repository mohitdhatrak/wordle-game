import { Letter } from "./Letter";

export function Word({
    guessNum,
    wordGrid,
    setWordGrid,
    letterNum,
    attemptNum,
    letterColour,
}) {
    return (
        <div className="wordGuess">
            <Letter
                guessNum={guessNum}
                wordGrid={wordGrid}
                setWordGrid={setWordGrid}
                letterNum={letterNum}
                attemptNum={attemptNum}
                letterColour={letterColour}
                letterIndex="0"
            />
            <Letter
                guessNum={guessNum}
                wordGrid={wordGrid}
                setWordGrid={setWordGrid}
                letterNum={letterNum}
                attemptNum={attemptNum}
                letterColour={letterColour}
                letterIndex="1"
            />
            <Letter
                guessNum={guessNum}
                wordGrid={wordGrid}
                setWordGrid={setWordGrid}
                letterNum={letterNum}
                attemptNum={attemptNum}
                letterColour={letterColour}
                letterIndex="2"
            />
            <Letter
                guessNum={guessNum}
                wordGrid={wordGrid}
                setWordGrid={setWordGrid}
                letterNum={letterNum}
                attemptNum={attemptNum}
                letterColour={letterColour}
                letterIndex="3"
            />
            <Letter
                guessNum={guessNum}
                wordGrid={wordGrid}
                setWordGrid={setWordGrid}
                letterNum={letterNum}
                attemptNum={attemptNum}
                letterColour={letterColour}
                letterIndex="4"
            />
        </div>
    );
}
