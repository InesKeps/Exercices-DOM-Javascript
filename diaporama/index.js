let slides = document.getElementsByClassName("slide");
let points = document.getElementsByClassName("pts");
let btnleft = document.getElementById("left");
let btnright = document.getElementById("right");
let numpage = document.getElementById("page");
let legend = document.getElementById("legend");
const tab = ["image1","image2","image3","image4"];
let cpt = 0;

document.addEventListener("DOMContentLoaded", ()=> {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display= "none";
    }
    slides[cpt].style.display = "block";
    points[cpt].style.backgroundColor = "#4f4f4fff";
    numpage.textContent = cpt+1;
    legend.textContent = tab[cpt];
});

btnright.addEventListener("click", ()=>{
    cpt++;
    if (cpt === slides.length){
        cpt = 0;
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display= "none";
        }
        slides[cpt].style.display = "block";
        for (let i = 0; i < points.length; i++) {
            points[i].style.backgroundColor = "#b5b3b3ff"
        }
        points[cpt].style.backgroundColor = "#4f4f4fff";
        numpage.textContent = cpt+1;
        legend.textContent = tab[cpt];
    }else{
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display= "none";
        }
        slides[cpt].style.display = "block";
        for (let i = 0; i < points.length; i++) {
            points[i].style.backgroundColor = "#b5b3b3ff"
        }
        points[cpt].style.backgroundColor = "#4f4f4fff";
        numpage.textContent = cpt+1;
        legend.textContent = tab[cpt];
    }
    console.log(cpt);
});


btnleft.addEventListener("click", ()=>{
    cpt--;
    console.log(cpt);
    if (cpt < 0){
        cpt = slides.length-1;
        console.log(slides.length);
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display= "none";
        }
        slides[cpt].style.display = "block";
        for (let i = 0; i < points.length; i++) {
            points[i].style.backgroundColor = "#b5b3b3ff"
        }
        points[cpt].style.backgroundColor = "#4f4f4fff"; 
        numpage.textContent = cpt+1;
        legend.textContent = tab[cpt];
    }else{
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display= "none";
        }
        slides[cpt].style.display = "block";
        for (let i = 0; i < points.length; i++) {
            points[i].style.backgroundColor = "#b5b3b3ff"
        }
        points[cpt].style.backgroundColor = "#4f4f4fff"; 
        numpage.textContent = cpt+1;
        legend.textContent = tab[cpt];
    }
    console.log(cpt);
});
