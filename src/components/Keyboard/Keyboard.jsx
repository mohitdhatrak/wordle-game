import { validateInput } from "../../utils/validateInput";

export function Keyboard({
    wordGrid,
    setWordGrid,
    letterNum,
    setLetterNum,
    attemptNum,
    setAttemptNum,
    answerWord,
    letterColour,
    setLetterColour,
    setFeedback,
}) {
    const keysLayout = [
        ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
        ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
        ["Enter", "Z", "X", "C", "V", "B", "N", "M", "Backspace"],
    ];

    return (
        <div className="disable-select">
            {keysLayout.map((keysRow, index) => (
                <div key={index} className="keysRow">
                    {keysRow.map((key) => (
                        <span
                            key={key}
                            className="eachKey"
                            onClick={(e) =>
                                validateInput(
                                    e,
                                    wordGrid,
                                    setWordGrid,
                                    letterNum,
                                    setLetterNum,
                                    attemptNum,
                                    setAttemptNum,
                                    answerWord,
                                    letterColour,
                                    setLetterColour,
                                    setFeedback,
                                    "click"
                                )
                            }
                        >
                            {key}
                        </span>
                    ))}
                </div>
            ))}
        </div>
    );
}
