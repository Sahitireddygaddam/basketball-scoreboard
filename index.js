let home = document.getElementById("home-el")
let guest = document.getElementById("guest-el")
let homescore = 0 
let guestscore =0

function addh1(){
    homescore +=1;
    home.textContent = homescore;
}

function addh2(){
    homescore +=2;
    home.textContent = homescore;
}

function addh3(){
    homescore +=3;
    home.textContent = homescore;
}

function addg1(){
    guestscore +=1;
    guest.textContent = guestscore;
}

function addg2(){
    guestscore +=2;
    guest.textContent = guestscore;
}

function addg3(){
    guestscore +=3;
    guest.textContent = guestscore;
}