let btnopen = document.getElementById("open");
let btnclose = document.getElementById("close");
let box = document.getElementById("box");
let black = document.getElementById("black");

btnopen.addEventListener("click", ()=>{
    box.style.transform = "translateY(0)";
    black.style.display = "block";
})

btnclose.addEventListener("click", ()=>{
    box.style.transform = "translateY(-200%)";
    black.style.display = "none";
})

black.addEventListener("click", ()=>{
    box.style.transform = "translateY(-200%)";
    black.style.display = "none";
})
