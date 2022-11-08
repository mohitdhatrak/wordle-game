import { validateInput } from "../../utils/validateInput";
import backspaceKey from "../../assets/backspaceKey.png";

export function Keyboard({
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
    score,
    setScore,
    setButtonsVisible,
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
                            className={`eachKey
                             ${
                                 letterColour.keyboardColour[key.toLowerCase()]
                                     ? letterColour.keyboardColour[
                                           key.toLowerCase()
                                       ]
                                     : ""
                             }`}
                            onClick={(e) =>
                                validateInput(
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
                                    "click",
                                    score,
                                    setScore,
                                    setButtonsVisible
                                )
                            }
                        >
                            {key === "Backspace" ? (
                                <img
                                    className="backspace-icon"
                                    src={backspaceKey}
                                    alt="Backspace"
                                />
                            ) : (
                                key
                            )}
                        </span>
                    ))}
                </div>
            ))}
        </div>
    );
}
