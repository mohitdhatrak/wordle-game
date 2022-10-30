import { assignColours } from "./assignColours";

export function displayResult(
    word,
    answer,
    attemptNum,
    setAttemptNum,
    letterColour,
    setLetterColour,
    setFeedback
) {
    // destructuring state variables
    const { answerWord } = answer;
    const { keyboardColour } = letterColour;

    // to get number of occurences of each letter in answer word
    const answerLetterObj = {};
    for (let i = 0; i < 5; i++) {
        if (answerLetterObj[answerWord[i]] === undefined) {
            answerLetterObj[answerWord[i]] = 1;
        } else {
            answerLetterObj[answerWord[i]]++;
        }
    }

    // to get number of occurences of each letter in user guess word
    const userWordObj = {};
    for (let i = 0; i < 5; i++) {
        if (userWordObj[word[i]] === undefined) {
            userWordObj[word[i]] = 1;
        } else {
            userWordObj[word[i]]++;
        }
    }

    const charColour = assignColours(
        word,
        answerWord,
        keyboardColour,
        answerLetterObj,
        userWordObj
    );

    // reminder for myself: check later if attemptNum used here is correct or wrong
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
