// // input
// var username = prompt("Give me your username")

// // processing
// var welcomeMessage = "This script is work!" + username;

// //  output
// alert(welcomeMessage);

var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/pirate.json"

function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input
};

function errorHandler(error) {
    console.log("error occured", error)
    alert("something happen in our serverURL. kindly try after sometime");
};

// This also right syntax to written this programme.
// btnTranslate.addEventListener("click", function clickEventHandler(){
//     console.log("Clicked!")
// })

function clickHandler() {
    
    var inputText = txtInput.value;  // taking input part

    // calling server for processing
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
    })
    .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler);
