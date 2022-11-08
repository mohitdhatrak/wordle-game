export function resetGrid(
    setButtonsVisible,
    setWordGrid,
    setLetterNum,
    setAttemptNum,
    setAnswer,
    setLetterColour,
    setFeedback
) {
    setButtonsVisible(false);
    setWordGrid([
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
    ]);
    setLetterNum(0);
    setAttemptNum("disabled");
    setAnswer({});
    setLetterColour({ keyboardColour: {} });
    setFeedback("You have 6 attempts left to guess this word!");
}
