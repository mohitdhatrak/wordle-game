import { resetGrid } from "../../utils/resetGrid";

function newRound(
    roundNumber,
    setRoundNumber,
    setButtonsVisible,
    setWordGrid,
    setLetterNum,
    setAttemptNum,
    setAnswer,
    setLetterColour,
    setFeedback
) {
    setRoundNumber(Number(roundNumber) + 1);

    resetGrid(
        setButtonsVisible,
        setWordGrid,
        setLetterNum,
        setAttemptNum,
        setAnswer,
        setLetterColour,
        setFeedback
    );
}

function resetGame(
    roundNumber,
    setRoundNumber,
    setScore,
    setButtonsVisible,
    setWordGrid,
    setLetterNum,
    setAttemptNum,
    setAnswer,
    setLetterColour,
    setFeedback
) {
    roundNumber === 1 ? setRoundNumber("1") : setRoundNumber(1); // did this to handle case if user resets game at start itself, since roundNumber remains 1 only state doesn't update, hence useEffect dependency array doesn't execute useEffect on reset in this case
    setScore(0);

    resetGrid(
        setButtonsVisible,
        setWordGrid,
        setLetterNum,
        setAttemptNum,
        setAnswer,
        setLetterColour,
        setFeedback
    );
}

export default function NewGameReset({
    roundNumber,
    setRoundNumber,
    score,
    setScore,
    setButtonsVisible,
    setWordGrid,
    setLetterNum,
    setAttemptNum,
    setAnswer,
    setLetterColour,
    setFeedback,
}) {
    return (
        <div>
            <div className="feedback">{`Current game score: You have guessed ${score} ${
                score === 1 ? "word" : "words"
            } correctly out of ${roundNumber} ${
                roundNumber === 1 ? "round" : "rounds"
            }`}</div>
            <button
                className="btn"
                onClick={() =>
                    newRound(
                        roundNumber,
                        setRoundNumber,
                        setButtonsVisible,
                        setWordGrid,
                        setLetterNum,
                        setAttemptNum,
                        setAnswer,
                        setLetterColour,
                        setFeedback
                    )
                }
            >
                Play another round
            </button>
            <button
                className="btn"
                onClick={() =>
                    resetGame(
                        roundNumber,
                        setRoundNumber,
                        setScore,
                        setButtonsVisible,
                        setWordGrid,
                        setLetterNum,
                        setAttemptNum,
                        setAnswer,
                        setLetterColour,
                        setFeedback
                    )
                }
            >
                Reset game
            </button>
        </div>
    );
}
