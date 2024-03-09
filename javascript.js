
                // BeginGame 
const sectionSeleccAtaque = document.getElementById("attack_selection")
const sectionLives = document.getElementById("lives")
const bttnsAttack = document.getElementById("attack_buttons")
const resultadoCombate = document.getElementById("resultado-combate")
const botonArcher = document.getElementById("btn-archer")
const botonKnight = document.getElementById("btn-knight")
const botonSpear = document.getElementById("btn-spear")
const nombreMascota = document.getElementById("nombre_mascota_jugador")
const imgArcher = document.getElementById("Juana")
const imgKnight = document.getElementById("Arthur")
const imgSpear = document.getElementById("Rose")
const botonFuego = document.getElementById("fire_button")
const botonAgua = document.getElementById("water_button")
const botonTierra = document.getElementById("earth_button")
const botonReiniciar = document.getElementById("restart_button")
const ContainerFoChars = document.getElementById("CharsContainer")
                
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


let warriors = []
let warriorsOption 
let ataqueJugador 
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3
let playerWarrior 

class Warrior {
    constructor(name, image, lifes) {
        this.name = name
        this.image = image
        this.lifes = lifes
        this.attacks = []
    }
}

let juana = new Warrior ('Juana', './Resources/archer.png', 5)
let arthur = new Warrior ('Arthur', './Resources/knight.png', 5)
let rose = new Warrior ('Rose', './Resources/spear.png', 5)

juana.attacks.push(
    { attackName: '🏹', id: 'fire_button' },
    { attackName: '🏹', id: 'fire_button' },
    { attackName: '🏹', id: 'fire_button' },
    { attackName: '🗡️', id: 'water_button' },
    { attackName: '🦯', id: 'earth_button' },
)

arthur.attacks.push(
    { attackName: '🗡️', id: 'water_button' },
    { attackName: '🗡️', id: 'water_button' },
    { attackName: '🗡️', id: 'water_button' },
    { attackName: '🏹', id: 'fire_button' },
    { attackName: '🦯', id: 'earth_button' },
)

rose.attacks.push(
    { attackName: '🦯', id: 'earth_button' },
    { attackName: '🦯', id: 'earth_button' },
    { attackName: '🦯', id: 'earth_button' },
    { attackName: '🏹', id: 'fire_button' },
    { attackName: '🗡️', id: 'water_button' },
)

warriors.push(juana, arthur, rose)

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
        let CharEnemigo = SeleccCharEnemigo()
        alert("You chose Juana! " + "Your opponent is: " + CharEnemigo)
        nombreMascota.innerHTML = imgArcher.id
        playerWarrior = imgArcher.id
        extraerAtaques(playerWarrior)
    }

    imgKnight.addEventListener("click", imageKnight)
    function imageKnight(){
        let CharEnemigo = SeleccCharEnemigo()
        alert("You chose Arthur! " + "Your opponent is: " + CharEnemigo)
        nombreMascota.innerHTML = imgKnight.id
        playerWarrior = imgKnight.id
        extraerAtaques(playerWarrior)
    }

    imgSpear.addEventListener("click", imageSpear)
    function imageSpear(){
        let CharEnemigo = SeleccCharEnemigo()
        alert("You chose Rose! " + "Your opponent is: " + CharEnemigo)
        nombreMascota.innerHTML = imgSpear.id
        playerWarrior = imgSpear.id
        extraerAtaques(playerWarrior)
    }

    botonArcher.addEventListener("click", Archer)
    function Archer() {
        let CharEnemigo = SeleccCharEnemigo()
        alert("You chose Juana! " + "Your opponent is: " + CharEnemigo)
        nombreMascota.innerHTML = imgArcher.id
        playerWarrior = imgArcher.id
        extraerAtaques(playerWarrior)
    }
    
    botonKnight.addEventListener("click", Knight)
    function Knight() {
        let CharEnemigo = SeleccCharEnemigo()
        alert("You chose Arthur! " + "Your opponent is: " + CharEnemigo)
        nombreMascota.innerHTML = imgKnight.id
        playerWarrior = imgKnight.id
        extraerAtaques(playerWarrior)
    }
    
    botonSpear.addEventListener("click", Spear)
    function Spear() {
        let CharEnemigo = SeleccCharEnemigo()
        alert("You chose Rose!" + " Your opponent is: " + CharEnemigo)
        nombreMascota.innerHTML = imgSpear.id
        playerWarrior = imgSpear.id
        extraerAtaques(playerWarrior)
    }
}

function extraerAtaques(playerWarrior) {
    let ataques 
    for (let i = 0; i < warriors.length; i++) {
        if (playerWarrior === warriors[i].name) {
            ataques = warriors[i].attacks
        }
    }
    console.log( ataques)
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

    let randomChar = aleatorio(0, warriors.length -1)
     
    characterEnemigo.innerHTML = warriors[randomChar].name
    
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

