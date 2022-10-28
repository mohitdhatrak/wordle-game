export function displayResult(
    word,
    answerWord,
    attemptNum,
    letterColour,
    setLetterColour,
    setFeedback
) {
    const charColour = [];

    for (let i = 0; i < 5; i++) {
        if (word[i] === answerWord[i]) {
            charColour[i] = "green";
        } else if (answerWord.includes(word[i])) {
            charColour[i] = "yellow";
        } else {
            charColour[i] = "grey";
        }
    }

    letterColour.push(charColour);
    setLetterColour([...letterColour]);

    if (word === answerWord) {
        setFeedback("Congrats, word guessed correctly!");
    } else if (attemptNum === 5) {
        setFeedback(`Game over! Correct answer is ${answerWord}`);
        console.log(`Correct answer is ${answerWord}`);
    } else {
        setFeedback(`You have ${5 - attemptNum} attempts left!`);
    }
}
