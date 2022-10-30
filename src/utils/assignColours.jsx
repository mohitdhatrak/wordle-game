function decideColours(
    letter,
    excessLetterObj,
    answerLetterObj,
    userWordObj,
    charColour
) {
    let notGreen =
        excessLetterObj?.green[letter] !== undefined
            ? userWordObj[letter] - excessLetterObj.green[letter].count
            : userWordObj[letter];

    let numOfExcessLetters = userWordObj[letter] - answerLetterObj[letter];

    if (numOfExcessLetters < notGreen) {
        for (let i = 0; notGreen - numOfExcessLetters - i > 0; i++) {
            let position = excessLetterObj.grey[letter].positions[i];
            charColour[position] = "yellow";
        }
    }
}

export function assignColours(
    word,
    answerWord,
    keyboardColour,
    answerLetterObj,
    userWordObj
) {
    // to store colour of each character
    const charColour = [];

    // objects to store values when user enters extra/excess/more letters than present in the answer
    let excessLetterObj = {};
    let tempObj = {};

    // array to store letters who are in excess
    const flag = [];

    for (let i = 0; i < 5; i++) {
        // checking and storing letter colour as green
        if (word[i] === answerWord[i]) {
            charColour[i] = "green";
            keyboardColour[word[i]] = "green";

            tempObj = { ...excessLetterObj.green };
            if (tempObj[word[i]] === undefined) {
                tempObj[word[i]] = { count: 1 };
            } else {
                tempObj[word[i]].count++;
            }
            excessLetterObj = {
                ...excessLetterObj,
                green: { ...tempObj, [word[i]]: { ...tempObj[word[i]] } },
            };
        }
        // checking and storing letter colour as yellow
        else if (
            answerLetterObj[word[i]] !== undefined &&
            userWordObj[word[i]] <= answerLetterObj[word[i]]
        ) {
            charColour[i] = "yellow";
            keyboardColour[word[i]] =
                keyboardColour[word[i]] === "green" ? "green" : "yellow";
        }
        // storing colour as grey, might change to yellow depending on excess letters
        else if (
            answerLetterObj[word[i]] !== undefined &&
            userWordObj[word[i]] > answerLetterObj[word[i]]
        ) {
            charColour[i] = "grey";

            // saving letters in excess, in this array
            flag.push(word[i]);

            tempObj = { ...excessLetterObj.grey };
            if (tempObj[word[i]] === undefined) {
                tempObj[word[i]] = { positions: [i] };
            } else {
                tempObj[word[i]].positions = [...tempObj[word[i]].positions, i];
            }
            excessLetterObj = {
                ...excessLetterObj,
                grey: { ...tempObj, [word[i]]: { ...tempObj[word[i]] } },
            };
        }
        // storing letter colour as grey after all other checks
        else {
            charColour[i] = "grey";
            keyboardColour[word[i]] = "grey";
        }

        // to decide colours when excess letters are present, after green, rest become either yellow or grey
        // this depends on number of excess letters, if all required ones are green or few green or none green
        if (i === 4 && flag.length !== 0) {
            // eslint-disable-next-line no-loop-func
            flag.forEach((letter) =>
                decideColours(
                    letter,
                    excessLetterObj,
                    answerLetterObj,
                    userWordObj,
                    charColour
                )
            );
        }
    }

    return [...charColour];
}
