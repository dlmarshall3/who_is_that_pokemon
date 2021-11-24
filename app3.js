let mon;
let monArr = [];
let guessInput = document.querySelector('#guessInput');
let cryBtn = document.querySelector('#cry')
let monImg = document.querySelector('#imgReplace')
let typeOneImg = document.querySelector('#type1')
let typeTwoImg = document.querySelector('#type2')



//generates random number which is associated with the pokemon image, cry, types, etc.
let randomNumber = function(){
    let num = Math.floor(Math.random()*50)+1;
    return num;
}

//takes that random number and replaces the src in the image to the appropriate pokemon
function chooseMon(){
    mon = randomNumber();
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
function nameGuess(){
    let userGuess = guessInput.value;
    let userGuessLC = userGuess.toLowerCase();
    if(userGuessLC === monArr[0].name){
        monImg.classList.toggle('hidden');
        let audio = new Audio(`cries/${mon}.wav`);
        audio.play();
        setTimeout(function(){
            alert('Congrats!');
        }, 350)
        
        setTimeout(function(){
            monArr = [];
            chooseMon();
            getPokemonInfo();
            monImg.classList.toggle('hidden');
            guessInput.value = "";
            typeOneImg.src = "";
            typeTwoImg.src = "";
        }, 1000);
    }
    else {
        alert('Try again!')
    }
}

function weirdNames(name){
    if(name === "nidoran-f"){
        return "nidoran"
    }
    else if(name === "nidoran-m"){
        return "nidoran"
    }
    return name;
}

//plays the associated cry
function monCry(){
    let audio = new Audio(`cries/${mon}.wav`);
    audio.play();
}

function revealTypes(){
    typeOneImg.src = `img/types/${type1}.png`;
}


chooseMon()
getPokemonInfo()

function revealTypes(){
    let type1 = monArr[0].type;
    let type2 = monArr[0].type2;
    if(monArr[0].type2 != null){
    typeOneImg.src = `img/types/${type1}.png`;
    typeTwoImg.src = `img/types/${type2}.png`;
} else {
    typeOneImg.src = `img/types/${type1}.png`;
}}

