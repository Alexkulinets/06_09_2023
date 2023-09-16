
let search = document.querySelector(".main__block_input-button")
let word = document.querySelector(".main_block_input")
let dict = document.querySelector(".main__block_transcription-text")
let wordName = document.querySelector(".main__block_transcription-word")
let soundButton = document.querySelector(".svg")
let trans = document.querySelector(".main__block_transcription-word--text")
let mainBlock = document.querySelector(".main__block")


let urlOne = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart"
let urlTwo = "https://api.quotable.io/random"
let urlThree = "https://api.dictionaryapi.dev/api/v2/entries/en/"


let sound = new Audio()
let getWord = () => {
    fetch(urlThree + word.value)
    .then(data => data.json())
    .then(item => {
        console.log(item)
        for( let i = 0; i < item[0].meanings.length; i++){
            let element = document.createElement("div") 
            element.textContent = item[0].meanings[i].partOfSpeech
            element.classList.add("main__block_transcription-text")
            mainBlock.appendChild(element)

            let elementText = document.createElement("div") 
            elementText.textContent = item[0].meanings[i].synonyms
            elementText.classList.add("main__block_transcription-word--text")
            mainBlock.appendChild(elementText)


        }
            let elementName = document.createElement("div")
            elementName.textContent = item[0].word
            elementName.classList.add("main__block_transcription-word")
            mainBlock.appendChild(elementName)
        

    });
        /*dict.textContent = item[0].meanings[0].definitions[0].definition
        trans.textContent =  item[0].phonetics[0].text
        wordName.textContent = item[0].word*/

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