export function displayResult(
    word,
    answerWord,
    attemptNum,
    setAttemptNum,
    letterColour,
    setLetterColour,
    setFeedback
) {
    const charColour = [];

    for (let i = 0; i < 5; i++) {
        if (word[i] === answerWord[i]) {
            charColour[i] = "green";
        } else if (answerWord.includes(word[i])) {
            // incorrect elseif condition logic, this colours all ocurrences of the letter as yellow, we only need to colour the first 2 if there are 2 occurrences of the letter
            charColour[i] = "yellow";
        } else {
            charColour[i] = "grey";
        }
    }

    letterColour.push(charColour);
    setLetterColour([...letterColour]);

    if (word === answerWord) {
        setFeedback("Congrats, word guessed correctly!");
        setAttemptNum(6); // to disable submit button
    } else if (attemptNum === 5) {
        setFeedback(`Game over! Correct answer is ${answerWord}`);
        console.log(`Correct answer is ${answerWord}`);
    } else {
        setFeedback(`You have ${5 - attemptNum} attempts left!`);
    }
}
