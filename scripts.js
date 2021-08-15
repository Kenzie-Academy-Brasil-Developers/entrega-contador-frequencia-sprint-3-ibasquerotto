const button = document.getElementById("countButton");
const letterCounts = {};
const wordCounts = {}

button.addEventListener("click", function () {
    // teu código vai aqui ... 

    let typedText = document.getElementById("textInput").value;
    // armazena o texto digitado na variável typedText

    typedText = typedText.toLowerCase();
    // Isto muda todas as letras para minúsculas

    typedText = typedText.replace(/[^a-z'\s]+/g, "");

    console.log(typedText)

    // Isso se livra de todos os caracteres exceto letras comuns, espaços e apóstrofos. 
    // Iremos aprender mais sobre como usar a função replace numa lição mais à frente.


    // divide o texto armazenado em typedText em palavras separadas por um 
    //espaçamento 



    for (let i = 0; i < typedText.length; i++) {
        let currentLetter = typedText[i];

        //percorre todo o texto digitado e armazena o caractere atual
        //na variável currentLetter

        if (letterCounts[currentLetter] === undefined) {
            letterCounts[currentLetter] = 1;
            // verifica se a letra em questão não existe (undefined)
            // e atribui 1 para sua contagem

        } else {
            letterCounts[currentLetter]++;
        } // caso a etra existir aumenta 1 na sua contagem

    }


    for (let j = 0; j < typedText.length; j++) {
        let words = typedText.split(/\s/);
        let currentWord = words[j]


        if (wordCounts[currentWord] === undefined) {
            wordCounts[currentWord] = 1
        } else {
            wordCounts[currentWord]++
        }


    }



    for (let letter in letterCounts) {
        const span = document.createElement("span");
        const textContent = `"${letter}": ${letterCounts[letter]},  `;
        //armazena cada letra no array letterCount



        span.innerText = textContent
        const letters = document.getElementById("lettersDiv");
        letters.appendChild(span);

        //insere o array na Div pela DOM

    }

    for (let word in wordCounts) {
        const spanDois = document.createElement("span");
        const wordContent = `"${word}": ${wordCounts[word]}, `;


        spanDois.innerText = wordContent;
        const words = document.getElementById("wordsDiv");
        words.appendChild(spanDois);

    }



});