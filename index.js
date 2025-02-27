const morseCode = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....',
    'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.',
    'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
    'Y': '-.--', 'Z': '--..', '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-',
    '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.', ' ': '/', ',':'/'
};
const textInput = document.getElementById("textInput");
const hehe = {
    "DANANG":"YOTT",
    "SHATRIA": "ANJING",
    "SATRIA": "BABI"
}
textInput.addEventListener("input", function () {
    this.style.height = "auto";
    this.style.height = this.scrollHeight + "px";
});

function textToMorse(text) {
    return text.toUpperCase().split(' ').map(word=>{
        let yoww = hehe[word] || word;
        return yoww.split('').map(char => morseCode[char] || '').join(' ');
    }).join(' / ')}

document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("textInput");
    const outputDiv = document.getElementById("output");
    const convertButton = document.getElementById("convertButton");

    convertButton.addEventListener("click", () => {
        const userInput = inputField.value;
        const morseResult = textToMorse(userInput);
        outputDiv.textContent = morseResult;
    });
});

