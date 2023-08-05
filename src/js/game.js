import {WORDS, KEYBOARD_LETTERS} from "./consts.js";

const gameDiv = document.getElementById('game')

const createPlaceholdersHTML = () => {
    const word = sessionStorage.getItem('word')
    const wordArray = Array.from(word)
    const placeholdersHTML = wordArray.reduce((acc,curr,i) =>
        acc + `<h1 id='letter_${i}' class="letter">_</>`, '')
    return `<div id="placeholders" class="placeholders-wrapper">${placeholdersHTML}</div>`

}
export const startGame = () => {
    const randomIndex = Math.floor(Math.random() * WORDS.length)
    const wordToGuess = WORDS[randomIndex]
    sessionStorage.setItem('word', wordToGuess) // localStorage - постоянное хранилище, значения там остаются навсегда, только если оно не удаляется вручную
        // sessionStorage - хранит значение 1 сессию - 1 открытие вкладки
    gameDiv.innerHTML = createPlaceholdersHTML()
}

