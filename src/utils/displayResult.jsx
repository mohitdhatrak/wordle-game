export function displayResult(
    word,
    answer,
    attemptNum,
    setAttemptNum,
    letterColour,
    setLetterColour,
    setFeedback
) {
    // destructuring
    const { answerWord } = answer;
    const { keyboardColour } = letterColour;

    const charColour = [];
    const answerLetterObj = {};
    const userWordObj = {};

    // to get number of occurences of letter in answer word
    for (let i = 0; i < 5; i++) {
        if (answerLetterObj[answerWord[i]] === undefined) {
            answerLetterObj[answerWord[i]] = 1;
        } else {
            answerLetterObj[answerWord[i]]++;
        }
    }

    // to get number of occurences of letter in user guess word
    for (let i = 0; i < 5; i++) {
        if (userWordObj[word[i]] === undefined) {
            userWordObj[word[i]] = 1;
        } else {
            userWordObj[word[i]]++;
        }
    }

    // extract logic to another function and export
    for (let i = 0; i < 5; i++) {
        if (word[i] === answerWord[i]) {
            charColour[i] = "green";
            keyboardColour[word[i]] = "green";
            // userWordObj[word[i]]--;
        } else if (
            answerLetterObj[word[i]] !== undefined
            // && userWordObj[word[i]] > 0
        ) {
            if (
                // answerLetterObj[word[i]] === 1 ||
                userWordObj[word[i]] <= answerLetterObj[word[i]]
            ) {
                charColour[i] = "yellow";
                keyboardColour[word[i]] =
                    keyboardColour[word[i]] === "green" ? "green" : "yellow";
                // userWordObj[word[i]]--;
            } else if (userWordObj[word[i]] > answerLetterObj[word[i]]) {
                // charColour[i] = "yellow";
            }
        } else {
            charColour[i] = "grey";
            keyboardColour[word[i]] = "grey";
        }
    }

    // check later if attemptNum is correct or wrong
    setLetterColour({
        ...letterColour,
        [attemptNum]: charColour,
        keyboardColour: { ...keyboardColour },
    });

    if (word === answerWord) {
        setFeedback("Congrats, word guessed correctly!");
        setAttemptNum(6); // to stop input once word guessed correctly
    } else if (attemptNum === 5) {
        setFeedback(`Game over! Correct answer is ${answerWord}`);
        console.log(`Correct answer is ${answerWord}`);
    } else {
        setFeedback(`You have ${5 - attemptNum} attempts left!`);
    }
}
