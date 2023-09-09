
let search = document.querySelector(".main__block_input-button")
let word = document.querySelector(".main_block_input")
let dict = document.querySelector(".main__block_transcription-text")
let wordName = document.querySelector(".main__block_transcription-word")
let soundButton = document.querySelector(".main__block-transcription-word")
let trans = document.querySelector(".main__block_transcription-word--text")


let urlOne = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart"
let urlTwo = "https://api.quotable.io/random"
let urlThree = "https://api.dictionaryapi.dev/api/v2/entries/en/"


let sound = new Audio()
let getWord = () => {
    fetch(urlThree + word.value)
    .then(data => data.json())
    .then(item => {
        console.log(item)
        dict.textContent = item[0].meanings[0].definitions[0].definition
        trans.textContent =  item[0].phonetics[0].text
        trans.textContent =  item[0].phonetics[1].text
        wordName.textContent = item[0].word
    });
}
let getSound = () => {
    fetch(urlThree + word.value)
    .then(data => data.json())
    .then(item => {
        sound.src = item[0].phonetics[0].audio
        sound.play()
    });
}
soundButton.addEventListener("click", getSound)
search.addEventListener("click", getWord)