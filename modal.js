const typesModal = document.querySelector('#typesModal')
const typesBtn = document.querySelector('#typesBtn')
const typesSpan = document.querySelector('#typesSpan')

const lettersModal = document.querySelector('#lettersModal')
const lettersBtn = document.querySelector('#lettersBtn')
const lettersSpan = document.querySelector('#lettersSpan')

const dexModal = document.querySelector('#dexModal');
const dexBtn = document.querySelector('#dexNum')
const dexSpan = document.querySelector('#dexSpan')

const tryAgainModal = document.querySelector('#tryAgainModal')
const tryAgainSpan = document.querySelector('#tryAgainSpan')

typesBtn.onclick = function(){
    let type1 = monArr[0].type;
    let type2 = monArr[0].type2;
     if(monArr[0].type2 != null){
     typeOneImg.src = `img/types/${type1}.png`;
     typeTwoImg.src = `img/types/${type2}.png`;
 } else {
     typeOneImg.src = `img/types/${type1}.png`;
     }
    typesModal.style.display = "block";
}

typesSpan.onclick = function(){
    typesModal.style.display = "none";
}


//letterModal
lettersBtn.onclick = function(){
    let monName = monArr[0].name;
    let firstLetter = monName.substr(0,1);
    let secondLetter = monName.substr(-1,1);
    let letterHints = `${firstLetter} - ${secondLetter}`;
    let lettersHintsText = document.querySelector('#lettersText');
    lettersHintsText.innerText = letterHints.toUpperCase();
    lettersModal.style.display = "block";
}

lettersSpan.onclick = function(){
    lettersModal.style.display = "none";
}

//dexModal
dexBtn.onclick = function(){
    let dexText = document.querySelector('#dexText')
    dexText.innerText = mon;
    dexModal.style.display = "block";
}

dexSpan.onclick = function(){
    dexModal.style.display = "none";
}

//tryAgainModal
tryAgainSpan.onclick = function(){
    tryAgainModal.style.display = "none";
}


window.onclick = function(e){
    if(e.target == typesModal){
        typesModal.style.display = "none";
    }
    else if(e.target == lettersModal){
        lettersModal.style.display = "none";
    } 
    else if(e.target == dexModal){
        dexModal.style.display = "none";
    }
    else if(e.target == tryAgainModal){
        tryAgainModal.style.display = "none";
    }
}








