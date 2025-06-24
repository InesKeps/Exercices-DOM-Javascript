let btntous = document.getElementById("tous");
let btnpersonne = document.getElementById("personnes");
let btnanimal = document.getElementById("animaux");
let btnvoiture = document.getElementById("voitures");

let tous = document.getElementsByTagName("img");
let personnes = document.getElementsByClassName("person");
let animaux = document.getElementsByClassName("animal");
let voitures = document.getElementsByClassName("car");
let galerie = document.getElementsByClassName("galerie");

btntous.addEventListener("click", ()=>{
    for (let i = 0; i < tous.length; i++) {
        tous[i].style.display = "block";       
    }
});

btnpersonne.addEventListener("click", ()=>{
    for (let i = 0; i < tous.length; i++) {
        tous[i].style.display = "none";       
    }
    for (let i = 0; i < personnes.length; i++) {
        personnes[i].style.display = "block";       
    }
});

btnanimal.addEventListener("click", ()=>{
    for (let i = 0; i < tous.length; i++) {
        tous[i].style.display = "none";       
    }
    for (let i = 0; i < animaux.length; i++) {
        animaux[i].style.display = "block";       
    }
});

btnvoiture.addEventListener("click", ()=>{
    for (let i = 0; i < tous.length; i++) {
        tous[i].style.display = "none";       
    }
    for (let i = 0; i < voitures.length; i++) {
        voitures[i].style.display = "block";       
    }
});