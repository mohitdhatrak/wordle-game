export function Keyboard() {
    const keysLayout = [
        ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
        ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
        ["Enter", "Z", "X", "C", "V", "B", "N", "M", "Backspace"],
    ];

    return (
        <>
            {keysLayout.map((keysRow, index) => (
                <div key={index}>
                    {keysRow.map((key) => (
                        <span key={key}>{key}</span>
                    ))}
                </div>
            ))}
        </>
    );
}
