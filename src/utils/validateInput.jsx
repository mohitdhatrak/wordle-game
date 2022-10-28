export function validateInput(e, row, column, wordGrid, setWordGrid) {
    let input = e.target.value;
    e.target.value = "";

    const regex = /[a-zA-Z]/;

    if (regex.test(input)) {
        e.target.value = input.toUpperCase();
    } else {
        input = e.target.value;
    }

    wordGrid[row][column] = input;
    setWordGrid([...wordGrid]);
}
