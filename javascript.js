
let ataqueJugador 
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

window.addEventListener("load", beginGame)

function beginGame() {
    
    
    let sectionSeleccAtaque = document.getElementById("attack_selection")
    sectionSeleccAtaque.style.display = "none"
    
    let sectionLives = document.getElementById("lives")
    sectionLives.style.display = "none"

    let bttnsAttack = document.getElementById("attack_buttons")
    bttnsAttack.style.display = "none"

    let resultadoCombate = document.getElementById("resultado-combate")
    resultadoCombate.style.display = "none"

    let botonArcher = document.getElementById("btn-archer")
    let botonKnight = document.getElementById("btn-knight")
    let botonSpear = document.getElementById("btn-spear")
    
    let nombreMascota = document.getElementById("nombre_mascota_jugador")
    
    let imgArcher = document.getElementById("img-archer")
    let imgKnight = document.getElementById("img-knight")
    let imgSpear = document.getElementById("img-spear")
    
    let botonFuego = document.getElementById("fire_button")
    botonFuego.addEventListener("click", ataqueFuego)
    
    let botonAgua = document.getElementById("water_button")
    botonAgua.addEventListener("click", ataqueAgua)
    
    let botonTierra = document.getElementById("earth_button")
    botonTierra.addEventListener("click", ataqueTierra)

    let botonReiniciar = document.getElementById("restart_button")
    botonReiniciar.addEventListener("click", reiniciarJuego)

    imgArcher.addEventListener("click", imageArcher)
    function imageArcher(){
        alert("You chose JUANA!")
        nombreMascota.innerHTML = "JUANA"
        let CharEnemigo = SeleccCharEnemigo()
        alert("Your opponent is: " + CharEnemigo)
        botonKnight.disabled = true
        botonSpear.disabled = true
    }

    imgKnight.addEventListener("click", imageKnight)
    function imageKnight(){
        alert("You chose ARTHUR!")
        nombreMascota.innerHTML = "ARTHUR"
        let CharEnemigo = SeleccCharEnemigo()
        alert("Your opponent is: " + CharEnemigo)
        botonArcher.disabled = true
        botonSpear.disabled = true
    }

    imgSpear.addEventListener("click", imageSpear)
    function imageSpear(){
        alert("You chose ROSE!")
        nombreMascota.innerHTML = "ROSE"
        let CharEnemigo = SeleccCharEnemigo()
        alert("Your opponent is: " + CharEnemigo)
        botonArcher.disabled = true
        botonKnight.disabled = true
    }


    botonArcher.addEventListener("click", Archer)
    function Archer() {
        alert("You chose JUANA!")
        nombreMascota.innerHTML = "JUANA"
        let CharEnemigo = SeleccCharEnemigo()
        alert("Your opponent is: " + CharEnemigo)
        botonKnight.disabled = true
        botonSpear.disabled = true
    }
    botonKnight.addEventListener("click", Knight)
    function Knight() {
        alert("You chose ARTHUR!")
        nombreMascota.innerHTML = "ARTHUR"
        let CharEnemigo = SeleccCharEnemigo()
        alert("Your opponent is: " + CharEnemigo)
        botonArcher.disabled = true
        botonSpear.disabled = true
    }
    botonSpear.addEventListener("click", Spear)
    function Spear() {
        alert("You chose ROSE!")
        nombreMascota.innerHTML = "ROSE"
        let CharEnemigo = SeleccCharEnemigo()
        alert("Your opponent is: " + CharEnemigo)
        botonArcher.disabled = true
        botonKnight.disabled = true
    }
}


function SeleccCharEnemigo() {

    let header2 = document.getElementById("header2")
    header2.style.display = "none"
    
    let sectionCharButtons = document.getElementById("buttons")
    sectionCharButtons.style.display = "none"
    
    let sectionSeleccChar = document.getElementById("char_selection")
    sectionSeleccChar.style.display = "none"

    let resultadoCombate = document.getElementById("resultado-combate")
    resultadoCombate.style.display = "flex"
    
    let sectionSeleccAtaque = document.getElementById("attack_selection")
    sectionSeleccAtaque.style.display = "flex"

    let bttnsAttack = document.getElementById("attack_buttons")
    bttnsAttack.style.display = "flex"

    let sectionLives = document.getElementById("lives")
    sectionLives.style.display = "grid"

    let restartBttn = document.getElementById("boton-reiniciar")
    restartBttn.style.display = "none"


    let charEnemigo = aleatorio(1,3)
    let characterEnemigo = document.getElementById("nombre_mascota_enemigo")

    if (charEnemigo === 1) {
        //Archer
        characterEnemigo.innerHTML = "JUANA"
    } else if (charEnemigo === 2) {
        //Knight
        characterEnemigo.innerHTML = "ARTHUR"
    } else if (charEnemigo === 3) {
        //Spear
        characterEnemigo.innerHTML = "ROSE"
    }
    return characterEnemigo.innerHTML
}

function aleatorio(min,max) {
    return Math.floor(Math.random()* (max - min +1) + min)
}

function ataqueFuego(){
    ataqueJugador= "BOW 🏹"
    ataqueAleatorioEnemigo()
}

function ataqueAgua(){
    ataqueJugador= "SWORD 🗡️"
    ataqueAleatorioEnemigo()
}

function ataqueTierra(){
    ataqueJugador= "SPEAR 🦯"
    ataqueAleatorioEnemigo()
} 

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio= aleatorio(1,3)

    if (ataqueAleatorio === 1) {
        ataqueEnemigo= "BOW 🏹"
    } else if (ataqueAleatorio === 2){
        ataqueEnemigo= "SWORD 🗡️"
    }else if (ataqueAleatorio === 3){
        ataqueEnemigo = "SPEAR 🦯"
    }

    combate()
}

function crearMensaje(resultado){
    
    let sectMensaje = document.getElementById("resultado")
    let sectAtaqueJugador = document.getElementById("ataque-jugador")
    let sectAtaqueEnemigo = document.getElementById("ataque-enemigo")

    let NuevoAtaqueJugador = document.createElement("p")
    let NuevoAtaqueEnemigo = document.createElement("p")

    sectMensaje.innerHTML = resultado
    NuevoAtaqueJugador.innerHTML = ataqueJugador
    NuevoAtaqueEnemigo.innerHTML = ataqueEnemigo
    
    sectAtaqueJugador.appendChild(NuevoAtaqueJugador)
    sectAtaqueEnemigo.appendChild(NuevoAtaqueEnemigo)
}

function crearMensajeFinal(resultadoFinal){
    
    let sectMensajeFinal = document.getElementById("resultado")
    sectMensajeFinal.innerHTML = resultadoFinal

    let botonFuego = document.getElementById("fire_button")
    botonFuego.disabled = true
    
    let botonAgua = document.getElementById("water_button")
    botonAgua.disabled = true
    
    let botonTierra = document.getElementById("earth_button")
    botonTierra.disabled = true

    let restartBttn = document.getElementById("boton-reiniciar")
    restartBttn.style.display = "flex"
    
}


function combate(){

    let spanVidasJugador = document.getElementById("vidas_jugador")
    let spanVidasEnemigo = document.getElementById("vidas_enemigo")
    
    if ( ataqueJugador === ataqueEnemigo) {
        crearMensaje("IT'S A TIE!")
    } else if (ataqueJugador == "BOW 🏹" && ataqueEnemigo == "SPEAR 🦯") {
        crearMensaje("YOU WON!")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == "SWORD 🗡️" && ataqueEnemigo == "BOW 🏹") {
        crearMensaje("YOU WON!")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == "SPEAR 🦯" && ataqueEnemigo == "SWORD 🗡️") {
        crearMensaje("YOU WON!")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje("YOU LOST!")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }
    revisarVidas()
}

function revisarVidas(){
    // DRY = don't repeat yourself
    if (vidasEnemigo === 0){
        crearMensajeFinal("¡Victory! You won the battle!")
    } else if (vidasJugador === 0){
        crearMensajeFinal("¡Defeated! Try again.")
    }

}

function reiniciarJuego(){
    location.reload()
}

