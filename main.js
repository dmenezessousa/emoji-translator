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
    //Get the search input.
    let searchID = document.querySelector('#search');
    //Get the random input.
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
        results.innerHTML = ''; //empty the Element every time it loops.
        let emojiSearch = search(translatorValue);
        for(i = 0; i < emojiSearch.length; i++){
            let newParaElement = document.createElement('p');
            newParaElement.innerText = emojiSearch[i].symbol;
            results.appendChild(newParaElement);
        }
    }
    //If random radio button was checked, display its function to the user.
    else if(checkedRadio === randomID){
        //add all the function to an array.
        let functionArray = [encode(translatorValue),translate(translatorValue),madlib(translatorValue),search(translatorValue)];

        //Variable for the randomElement function.
        let randomElem = randomElement(functionArray);

        //function to return one of the fucntions in the array above.
        if(randomElem.length === search(translatorValue).length){
        results.innerHTML = '';//empty the Element every time it loops.

        //same function used for the search funtion above.
        let emojiSearch = search(translatorValue);
            for(i = 0; i < emojiSearch.length; i++){
                let newParaElement = document.createElement('p');
                newParaElement.innerText = emojiSearch[i].symbol;
                results.appendChild(newParaElement);
            }
        }else{
            results.innerText = randomElem; //return a random function from the array above.
        }   
    }   
});