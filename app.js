function placeTextOnId(id, text) {
    let element = document.getElementById(id);
    element.innerText = text;
}

function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function speak(text) {
    let utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'el-GR';
    if (isMobileDevice()) {
        utterance.rate = 1.0; // Ajustar la velocidad para dispositivos móviles
    } else {
        utterance.rate = 0.7; // Velocidad para dispositivos de escritorio
    }
    window.speechSynthesis.speak(utterance);
}

let word;

const Modes = {
    Question: 1,
    Answer: 2
}

let mode = undefined;

function nextWord() {
    if (mode === Modes.Answer) {
        placeTextOnId('fonema', `/${word.fonema}/`);
        placeTextOnId('spanish', word.spanish);
        placeTextOnId('action', '↺');
        mode = Modes.Question;
    } else {
        let randomIndex = Math.floor(Math.random() * GREEK_WORDS.length);
        word = GREEK_WORDS[randomIndex];
        placeTextOnId('greek', word.greek);
        placeTextOnId('fonema', '');
        placeTextOnId('spanish', '');
        placeTextOnId('action', '?');
        mode = Modes.Answer;
    }
}

document.getElementById("action").addEventListener("click", nextWord);
document.getElementById("fonema").addEventListener("click", () => {
    if (mode === Modes.Question) {
        speak(word.greek)
    }
});

nextWord();