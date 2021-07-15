//Get the submit button element
let buttonSubmit = document.querySelector('#submit-button'); 

//Adds an event listener to the submit button
buttonSubmit.addEventListener('click', function () {

    //Get the translator input.
    const translator = document.querySelector('#translator-input');
    //Shows translator value
    let translatorValue = translator.value;
    //Get the results H1 Element
    const results = document.querySelector('#results');
    //Check which radio button was clicked on.
    const checkedRadio = document.querySelector('input[type=radio]:checked');
    //Get the encode input.
    let encodeID = document.querySelector('#encode');
    //Get the translate input.
    let translateID = document.querySelector('#translate');
    //Get the madlib input.
    let madlibID = document.querySelector('#madlib');
    //Get all  the array/object for search input.
    let searchID = document.querySelector('#search');
    let randomID = document.querySelector('#random');

    //if nothing is clicked it will display this message.
    if (checkedRadio === null) {
        console.log('No radio selected');
        
    } 
    //If encode radio button was checked, display its function to the user.
    else if(checkedRadio === encodeID) {
        results.innerText = encode(translatorValue);
        console.log(checkedRadio.value);
    }
    //If translate radio button was checked, display its function to the user.
    else if(checkedRadio === translateID){
        results.innerText = translate(translatorValue);
    }
    //If madlib radio button was checked, display its function to the user.
    else if(checkedRadio === madlibID){
        results.innerText = madlib(translatorValue);
    }
    //When search radio button is checked it will return an array of objects that each contain an emoji that matches our search criteria
    else if(checkedRadio === searchID){
        results.innerHTML = '';
        let emojiSearch = search(translatorValue);
        for(i = 0; i < emojiSearch.length; i++){
            let newParaElement = document.createElement('p');
            newParaElement.innerText = emojiSearch[i].symbol;
            results.appendChild(newParaElement);
        }
    }
    else if(checkedRadio === randomID){
        let functionArray = [newSearch(translatorValue)]; 
        results.innerHTML = randomElement(functionArray);
    }
    
});

function newSearch(String){
    results.innerHTML = '';
    let newDiv= document.createElement('div');
        let emojiSearch = search(String);
        for(i = 0; i < emojiSearch.length; i++){
            let newParaElement = document.createElement('p');
            newParaElement.innerText = emojiSearch[i].symbol;
            newDiv.appendChild(newParaElement);
    }
    return  newDiv;
}