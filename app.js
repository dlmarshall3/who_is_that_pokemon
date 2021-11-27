let mon;
let score = 0;
let monArr = [];
let monPrevDupeArr = [];
let guessInput = document.querySelector('#guessInput');
let guessBtn = document.querySelector('#guessBtn')
let cryBtn = document.querySelector('#cry')
let monImg = document.querySelector('#imgReplace')
let typeOneImg = document.querySelector('#type1')
let typeTwoImg = document.querySelector('#type2')
let scoreText = document.querySelector('#counterScore');
let $guessInput = $('#guessInput');
let hintsDiv = document.querySelector('#hintsDiv')
let lettersH3 = document.querySelector('#lettersH3');
let dexH3 = document.querySelector('#dexNumH3')




//generates random number which is associated with the pokemon image, cry, types, etc.
let randomNumber = function(){
    let num = Math.floor(Math.random()*151)+1;
    if(!monPrevDupeArr.includes(num)){
        return num;
    }
    return randomNumber();
}

//takes that random number and replaces the src in the image to the appropriate pokemon
function chooseMon(){
    mon = randomNumber();
    monPrevDupeArr.push(mon);
    console.log(monPrevDupeArr)
    let img = document.querySelector('#imgReplace');
    img.src = `img/dex/${mon}.png`;
}

//pulls from the API to get the pokemon name and type(s)
async function getPokemonInfo(){
    const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${mon}`);
    if(result.data.types.length === 1){
        monArr.push({
            name: weirdNames(result.data.name), 
            type: result.data.types[0].type.name
        });
    } else {
        monArr.push(
            {name: weirdNames(result.data.name), 
            type: result.data.types[0].type.name,
            type2: result.data.types[1].type.name});
    }
}

//checks to see if name typed in input matches the name
guessBtn.addEventListener('click', function(e){
    e.preventDefault();
    let userGuess = guessInput.value;
    let userGuessLC = userGuess.toLowerCase();
    if(userGuessLC === monArr[0].name){
        score++;
        scoreText.innerHTML = score;
        let audio = new Audio(`cries/${mon}.wav`);
        audio.volume = 0.1;
        audio.play();
        monImg.classList.toggle('hidden');
        guessInput.value = "";
        $('#guessInput').focus();
        setTimeout(function(){
            monArr = [];
            chooseMon();
            getPokemonInfo();
            hintsDiv.classList.add('hints')
            monImg.classList.toggle('hidden');
            typeOneImg.src = "";
            typeTwoImg.src = "";
        }, 1750);
    }
    else {
        tryAgainModal.style.display = "block";
        setTimeout(function(){
            hintsDiv.classList.remove('hints')
            $('#guessInput').focus();
            
        }, 1000)
    }
})

function weirdNames(name){
    if(name === "nidoran-f"){
        return "nidoran"
    }
    else if(name === "nidoran-m"){
        return "nidoran"
    }
    else if(name === "mr-mime"){
        return "mr. mime"
    }
    return name;
}

function winningScore(){
    if(score === 151){
        alert('Congrats! You have won!')
    }
}


chooseMon()
getPokemonInfo()
winningScore()


