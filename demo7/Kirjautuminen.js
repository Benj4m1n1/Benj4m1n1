document.addEventListener("DOMContentLoader", onkoKirjautunut);

function onkoKirjautunut() {
    let kirjautunut = 'kylla';
    if (kirjautunut === 'kylla'){
        document.getElementById("tervetulo_tekti").textContent += localStorage.getItem("nimi");
    }
}

function kirjaudu(){
    localStorage.setItem("nimi", "eelis");
}