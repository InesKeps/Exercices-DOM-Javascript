let email = document.getElementById("email");
let numtel = document.getElementById("numtel");
let pwd = document.getElementById("pwd");
let pwd2 = document.getElementById("pwd2");
let checkbox = document.getElementById("check");
let emailMsg = document.getElementById("emailMsg");
let telMsg = document.getElementById("telMsg");
let pwdMsg = document.getElementById("pwdMsg");
let pwdMsg2 = document.getElementById("pwdMsg2");
let formMsg = document.getElementById("formMsg");
let save = document.getElementById("save");
let etat = false;

document.getElementById("studentform").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        console.log(
            'enter keydown'
        );
        
        event.preventDefault(); 
    }
});

save.addEventListener("click", (e)=>{

    e.preventDefault();

    // let isEmailOk = verifiermail();
    // let isTelOk = verifiertel();
    // let isPasswordsOk = verifierpassword();
    
    if (etat) {
        formMsg.textContent = "Formulaire valide";
        formMsg.className = "success";
    } else {
        formMsg.textContent = "Veuillez bien remplir le formulaire";
        formMsg.className = "";
    }
})

email.addEventListener("input", (event) => {
    verifiermail();
})

numtel.addEventListener("input", (event) => {
    verifiertel();
})

pwd.addEventListener("input", (event) => {
    verifierpassword();
})

pwd2.addEventListener("input", (event) => {
    verifierpassword();
})

function verifiermail() {
    const emailregex = /^[a-z0-9._-]+@[a-z0-9]+\.[a-z]{2,3}$/;
    emailMsg.textContent = emailregex.test(email.value)? "Email valide" : "Email invalide";
    emailMsg.className = emailregex.test(email.value)? "success" : ""; 

    return emailregex.test(email.value);
}
function verifiertel() {
    const telregex = /^\+237[6][2-9]\d{7}$/;
    telMsg.textContent = telregex.test(numtel.value)? "Numero valide" : "Numero invalide";
    telMsg.className = telregex.test(numtel.value)? "success" : "";   
    
    return telregex.test(numtel.value);
}
function verifierpassword() {
    const passwordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&*_-]).{8,}$/;
    pwdMsg.textContent = passwordregex.test(pwd.value)? "Mot de passe fort" : "Mot de passe faible";
    pwdMsg.className = passwordregex.test(pwd.value)? "success" : "";

    if (passwordregex.test(pwd.value) === false) {
        pwd2.value = "";
    }
    if (pwd2.value === ""||pwd2.value !== pwd.value){
        pwdMsg2.textContent = "repetez correctement le mot de passe";
        pwdMsg2.className = "";
        etat = false;
    } else {
        pwdMsg2.textContent = "Mot de passe valide";
        pwdMsg2.className = "success";
        etat = passwordregex.test(pwd.value);
    }
    return etat;
}


