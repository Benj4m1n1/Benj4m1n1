document.addEventListener("DOMContentLoader", onkoKirjautunut);

function onkoKirjautunut() {
    let kirjautunut = 'kylla';
    if (kirjautunut === 'kylla'){
        document.getElementById('Tervetulo_teksti').textContent += ' Eelis!';
    }
}