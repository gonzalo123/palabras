const GREEK_LETTERS = [
    {"lower": "α", "upper": "Α", "name": "alfa", "afi": "/a/"},
    {"lower": "β", "upper": "Β", "name": "beta", "afi": "/b/"},
    {"lower": "γ", "upper": "Γ", "name": "gamma", "afi": "/g/"},
    {"lower": "δ", "upper": "Δ", "name": "delta", "afi": "/d/"},
    {"lower": "ε", "upper": "Ε", "name": "épsilon", "afi": "/e/ breve"},
    {"lower": "ζ", "upper": "Ζ", "name": "dseta", "afi": "/ds/"},
    {"lower": "η", "upper": "Η", "name": "eta", "afi": "/e/ larga"},
    {"lower": "θ", "upper": "Θ", "name": "theta", "afi": "/θ/"},
    {"lower": "ι", "upper": "Ι", "name": "iota", "afi": "/i/"},
    {"lower": "κ", "upper": "Κ", "name": "kappa", "afi": "/k/"},
    {"lower": "λ", "upper": "Λ", "name": "lambda", "afi": "/l/"},
    {"lower": "μ", "upper": "Μ", "name": "mu", "afi": "/m/"},
    {"lower": "ν", "upper": "Ν", "name": "nu", "afi": "/n/"},
    {"lower": "ξ", "upper": "Ξ", "name": "xi", "afi": "/ks/"},
    {"lower": "ο", "upper": "Ο", "name": "ómicron", "afi": "/o/ breve"},
    {"lower": "π", "upper": "Π", "name": "pi", "fonema": "p", "afi": "/p/"},
    {"lower": "ρ", "upper": "Ρ", "name": "rho", "afi": "/ɾ/"},
    {"lower": "σ", "upper": "Σ", "name": "sigma", "afi": "/s/"},
    {"lower": "ς", "upper": "Σ", "name": "sigma", "afi": "/s/"},
    {"lower": "τ", "upper": "Τ", "name": "tau", "afi": "/t/"},
    {"lower": "υ", "upper": "Υ", "name": "upsilon", "afi": "/y/"},
    {"lower": "φ", "upper": "Φ", "name": "phi", "afi": "/f/"},
    {"lower": "χ", "upper": "Χ", "name": "chi", "afi": "/x/"},
    {"lower": "ψ", "upper": "Ψ", "name": "psi", "afi": "/ps/"},
    {"lower": "ω", "upper": "Ω", "name": "omega", "afi": "/o/ larga"}
];


function placeTextOnId(id, text) {
    let element = document.getElementById(id);
    element.innerText = text;
}

function speak(text) {
    let utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'el-GR';
    utterance.rate = 0.7;
    window.speechSynthesis.speak(utterance);
}

let word;

const Modes = {
    Question: 1,
    Answer: 2
}

const Character = {
    Upper: 1,
    lower: 2
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

// Thanks to ChatGPT
function identifyLetters(word) {
    const diacritics = {
        768: 'espíritus grave',  // ` (U+0300)
        769: 'espíritus agudo',  // ´ (U+0301)
        834: 'diéresis',        // ¨ (U+030A)
    };

    const letters = [];

    for (const char of word.normalize('NFD')) {
        const code = char.charCodeAt(0);

        if (code >= 945 && code <= 969) {
            let type = Character.lower;

            if (code === 949 || code === 951 || code === 953) {
                const combiningCode = char.normalize('NFC').charCodeAt(1);
                if (combiningCode in diacritics) {
                    type = diacritics[combiningCode];
                }
            }

            letters.push({
                character: char,
                type: type,
            });
        } else if (code >= 913 && code <= 937) {
            let type = Character.Upper;

            if (code === 917 || code === 919 || code === 921) {
                const combiningCode = char.normalize('NFC').charCodeAt(1);
                if (combiningCode in diacritics) {
                    type = diacritics[combiningCode];
                }
            }

            letters.push({
                character: char,
                type: type,
            });
        }
    }

    return letters;
}

const lettersList = document.getElementById('lettersList');
const popup = document.getElementById('popup');

function findGreekLetter(letter) {
    const foundIndex = GREEK_LETTERS.findIndex(l => letter.type === Character.Upper ? l.upper === letter.character : l.lower === letter.character);
    if (foundIndex !== -1) {
        return GREEK_LETTERS[foundIndex];
    }
    return null;
}

function showPopup() {
    const letters = identifyLetters(word.greek);
    lettersList.innerHTML = '';
    placeTextOnId('greek2', word.greek);
    letters.forEach(letter => {
        const listItem = document.createElement('li');
        let greekLetter = findGreekLetter(letter);
        let lower = letter.character === 'sigma' ? "σ/ς" : greekLetter.lower;
        let upper = greekLetter.upper;

        listItem.textContent = `${letter.character}: ${greekLetter.name} [${lower} ${upper}] ${greekLetter.afi}`;
        lettersList.appendChild(listItem);
    });
    popup.style.display = 'flex';
}

document.getElementById("action").addEventListener("click", nextWord);
document.getElementById("greek").addEventListener("click", () => {
    showPopup();
});
document.getElementById("fonema").addEventListener("click", () => {
    if (mode === Modes.Question) {
        speak(word.greek)
    }
});
document.getElementById('popup').addEventListener('click', () => {
    popup.style.display = 'none';
});
nextWord();