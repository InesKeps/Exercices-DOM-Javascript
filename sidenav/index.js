let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let menu1 = document.getElementById("menu1");
let menu2 = document.getElementById("menu2");
let menu3 = document.getElementById("menu3");
let menu4 = document.getElementById("menu4");
let menu5 = document.getElementById("menu5");
let btnclose1 = document.getElementById("close1");
let btnclose2 = document.getElementById("close2");
let btnclose3 = document.getElementById("close3");
let btnclose4 = document.getElementById("close4");
let btnclose5 = document.getElementById("close5");
let container = document.getElementById("container");
let black = document.getElementById("black");
let boutons = document.getElementsByTagName("button");


//sidenav overlay

btn1.addEventListener("click", ()=>{
    menu1.style.width ="20%";
    for (let i = 0; i < boutons.length; i++) {
        boutons[i].style.pointerEvents = "none"; 
    }
});
btnclose1.addEventListener("click", ()=>{
    menu1.style.width ="0";
    for (let i = 0; i < boutons.length; i++) {
        boutons[i].style.pointerEvents = "auto"; 
    }
});

//sidenav overlay without animation

btn2.addEventListener("click", ()=>{
    menu2.style.display = "flex";
    for (let i = 0; i < boutons.length; i++) {
        boutons[i].style.pointerEvents = "none"; 
    };
});
btnclose2.addEventListener("click", ()=>{
    menu2.style.display ="none";
    for (let i = 0; i < boutons.length; i++) {
        boutons[i].style.pointerEvents = "auto"; 
    }
});

//sidenav push (off-canvas)

btn3.addEventListener("click", ()=>{
    menu4.style.position = "absolute";
    menu3.style.width ="40%";
    for (let i = 0; i < boutons.length; i++) {
        boutons[i].style.pointerEvents = "none"; 
    }
});
btnclose3.addEventListener("click", ()=>{
    menu4.style.position = "static";
    menu3.style.width ="0";
    for (let i = 0; i < boutons.length; i++) {
        boutons[i].style.pointerEvents = "auto"; 
    }
});

//sidenav push w/opacity

btn4.addEventListener("click", ()=>{
    menu3.style.position = "absolute";
    menu4.style.width ="40%";
    black.style.display = "block";
    black.style.opacity = "0.5";
});
 btnclose4.addEventListener("click", ()=>{
    menu3.style.position = "static";
    menu4.style.width ="0";
    black.style.display = "none";
    black.style.opacity = "0";
});

//sidenav full-width

btn5.addEventListener("click", ()=>{
    menu5.style.width ="100%";
});
btnclose5.addEventListener("click", ()=>{
    menu5.style.width ="0";
});
