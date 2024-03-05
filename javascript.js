
                // BeginGame 
const sectionSeleccAtaque = document.getElementById("attack_selection")
const sectionLives = document.getElementById("lives")
const bttnsAttack = document.getElementById("attack_buttons")
const resultadoCombate = document.getElementById("resultado-combate")
const botonArcher = document.getElementById("btn-archer")
const botonKnight = document.getElementById("btn-knight")
const botonSpear = document.getElementById("btn-spear")
const nombreMascota = document.getElementById("nombre_mascota_jugador")
const imgArcher = document.getElementById("img-archer")
const imgKnight = document.getElementById("img-knight")
const imgSpear = document.getElementById("img-spear")
const botonFuego = document.getElementById("fire_button")
const botonAgua = document.getElementById("water_button")
const botonTierra = document.getElementById("earth_button")
const botonReiniciar = document.getElementById("restart_button")
                
                // SeleccCharEnemigo 
const header2 = document.getElementById("header2")
const sectionCharButtons = document.getElementById("buttons")
const sectionSeleccChar = document.getElementById("char_selection")
const restartBttn = document.getElementById("boton-reiniciar")
const characterEnemigo = document.getElementById("nombre_mascota_enemigo")

                     // combate 
const spanVidasJugador = document.getElementById("vidas_jugador")
const spanVidasEnemigo = document.getElementById("vidas_enemigo")

                   // crearMensaje 
const sectMensaje = document.getElementById("resultado")
const sectAtaqueJugador = document.getElementById("ataque-jugador")
const sectAtaqueEnemigo = document.getElementById("ataque-enemigo")

                    //crearMensajeFinal 
const sectMensajeFinal = document.getElementById("resultado")

                       // lets generales
let ataqueJugador 
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

window.addEventListener("load", beginGame)

function beginGame() {
    
    sectionSeleccAtaque.style.display = "none"
    sectionLives.style.display = "none"
    bttnsAttack.style.display = "none"
    resultadoCombate.style.display = "none"
    botonFuego.addEventListener("click", ataqueFuego)
    botonAgua.addEventListener("click", ataqueAgua)
    botonTierra.addEventListener("click", ataqueTierra)
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

    header2.style.display = "none"
    sectionCharButtons.style.display = "none"
    sectionSeleccChar.style.display = "none"
    resultadoCombate.style.display = "flex"
    sectionSeleccAtaque.style.display = "flex"
    bttnsAttack.style.display = "flex"
    sectionLives.style.display = "grid"
    restartBttn.style.display = "none"

    let charEnemigo = aleatorio(1,3)

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

function combate(){
    
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

function crearMensaje(resultado){
    
    let NuevoAtaqueJugador = document.createElement("p")
    let NuevoAtaqueEnemigo = document.createElement("p")

    sectMensaje.innerHTML = resultado
    NuevoAtaqueJugador.innerHTML = ataqueJugador
    NuevoAtaqueEnemigo.innerHTML = ataqueEnemigo
    
    sectAtaqueJugador.appendChild(NuevoAtaqueJugador)
    sectAtaqueEnemigo.appendChild(NuevoAtaqueEnemigo)
}

function crearMensajeFinal(resultadoFinal){
    
    sectMensajeFinal.innerHTML = resultadoFinal
    botonFuego.disabled = true
    botonAgua.disabled = true
    botonTierra.disabled = true
    restartBttn.style.display = "flex"
}


function aleatorio(min,max) {
    return Math.floor(Math.random()* (max - min +1) + min)
}

function reiniciarJuego(){
    location.reload()
}

