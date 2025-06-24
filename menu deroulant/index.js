let dropdownbtn = document.getElementById("dropdownbtn");
let dropdownmenu = document.getElementById("dropdownmenu");
let dropdownbtn2 = document.getElementById("dropdownbtn2");

dropdownbtn.addEventListener("click", ()=>{
    dropdownmenu.style.display= "flex";
    dropdownbtn.style.display= "none";
    dropdownbtn2.style.display= "block"
});

dropdownbtn2.addEventListener("click", ()=>{
    dropdownmenu.style.display= "none";
    dropdownbtn.style.display= "block";
    dropdownbtn2.style.display= "none"
});