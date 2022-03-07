document.addEventListener("DOMContentLoaded", onkoKirjautunut);

function onkoKirjautunut() {
    if (localStorage.getIem("kirjautunut") === 'kylla') {
        document.getElementById('tervetulo_tekti').textContent += localStorage.getItem("nimi");
    }
}
function kirjaudu() {
    localStorage.setItem("nimi", document.getElementById("nimi").value);
    localStorage.setItem("kirjautunut", "kylla");
}