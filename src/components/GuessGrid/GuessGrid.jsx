import { Word } from "./Word";

export function GuessGrid({ wordGrid, setWordGrid, attemptNum, letterColour }) {
    return (
        <div>
            <Word
                wordGrid={wordGrid}
                setWordGrid={setWordGrid}
                attemptNum={attemptNum}
                letterColour={letterColour}
                guessNum="0"
            />
            <Word
                wordGrid={wordGrid}
                setWordGrid={setWordGrid}
                attemptNum={attemptNum}
                letterColour={letterColour}
                guessNum="1"
            />
            <Word
                wordGrid={wordGrid}
                setWordGrid={setWordGrid}
                attemptNum={attemptNum}
                letterColour={letterColour}
                guessNum="2"
            />
            <Word
                wordGrid={wordGrid}
                setWordGrid={setWordGrid}
                attemptNum={attemptNum}
                letterColour={letterColour}
                guessNum="3"
            />
            <Word
                wordGrid={wordGrid}
                setWordGrid={setWordGrid}
                attemptNum={attemptNum}
                letterColour={letterColour}
                guessNum="4"
            />
            <Word
                wordGrid={wordGrid}
                setWordGrid={setWordGrid}
                attemptNum={attemptNum}
                letterColour={letterColour}
                guessNum="5"
            />
        </div>
    );
}
