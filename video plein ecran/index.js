let video = document.getElementById("video");
let btnPause = document.getElementById("pause");
let etat = true;


btnPause.addEventListener("click", ()=>{
    if(etat){
        video.pause();
        btnPause.textContent= "Play";
        etat = false;
    }else{
        video.play()
        btnPause.textContent= "Pause";
        etat = true;
    }
})