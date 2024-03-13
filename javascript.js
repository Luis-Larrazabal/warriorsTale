
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

const ContainerFoChars = document.getElementById("CharsContainer")
const showAttacks = document.getElementById("buttons")
                
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

                    //canvas
const sectionVerMapa = document.getElementById('ver-mapa')
const mapa = document.getElementById('mapa')

                       // lets generales

let botonFuego 
let botonAgua 
let botonTierra 
let botones = {}
let warriorAttacks
let warriors = []
let warriorsOption 
let ataqueEnemigo = []
let vidasJugador = 3
let vidasEnemigo = 3
let playerWarrior 
let playerAttack = []
let enemyAttacks 
let indexAtaqueJugador
let indexAtaqueEnemigo 
let playerVictories = 0
let enemyVictories = 0
let canva = mapa.getContext('2d')

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
    sectionVerMapa.style.display = 

    
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
    mostrarAtaques(ataques)
}

function mostrarAtaques(attacks) {
    attacks.forEach((attack) => {
        warriorAttacks = `
        <button class = "atack_bttns attackB" id =${attack.id}>${attack.attackName}</button>
        `
        attack_buttons.innerHTML += warriorAttacks
    })
    
    botonFuego = document.getElementById("fire_button")
    botonAgua = document.getElementById("water_button")
    botonTierra = document.getElementById("earth_button")
    botones = document.querySelectorAll('.attackB')
    
    attackSequence()
}

function attackSequence(){
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            if (e.target.textContent === '🏹') {
                playerAttack.push('BOW')
                console.log(playerAttack)
                boton.style.background = '#000000'
                boton.disabled = true
            } else if (e.target.textContent === '🗡️') {
                playerAttack.push('SWORD')
                console.log(playerAttack)
                boton.style.background = '#000000'
                boton.disabled = true
            } else {
                playerAttack.push('SPEAR')
                console.log(playerAttack)
                boton.style.background = 'rgba(0, 0, 0, 0.9)'
                boton.disabled = true
            }
            ataqueAleatorioEnemigo()
        })
    })
}

function SeleccCharEnemigo() {

    header2.style.display = "none"
    sectionCharButtons.style.display = "none"
    sectionSeleccChar.style.display = "none"
    //resultadoCombate.style.display = "flex"
    //sectionSeleccAtaque.style.display = "flex"
    //bttnsAttack.style.display = "flex"
    //sectionLives.style.display = "grid"
    //restartBttn.style.display = "none"
    sectionVerMapa.style.display = 'flex'

    let warriorImage = new Image()
    warriorImage.src = juana.image
    canva.drawImage(
        warriorImage,
        20,
        40,
        100,
        100,
    )

    let randomChar = aleatorio(0, warriors.length -1)
     
    characterEnemigo.innerHTML = warriors[randomChar].name

    enemyAttacks = warriors[randomChar].attacks
    
    return characterEnemigo.innerHTML
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio= aleatorio(0,enemyAttacks.length -1)

    if (ataqueAleatorio === 0 || ataqueAleatorio === 1) {
        ataqueEnemigo.push('BOW')
    } else if (ataqueAleatorio === 3 || ataqueAleatorio === 4){
        ataqueEnemigo.push('SWORD')
    }else 
        ataqueEnemigo.push('SPEAR')

    console.log(ataqueEnemigo)
    iniciarPelea()
}

function iniciarPelea() {
    if (playerAttack.length === 5) {
        combate()
    }
}

function indexAtaques(jugador,enemigo) {
    indexAtaqueJugador = playerAttack[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function combate(){

    for (let index = 0; index < playerAttack.length; index++) {
        if (playerAttack[index] === ataqueEnemigo[index]) {
            indexAtaques(index,index)
            crearMensaje("IT'S A TIE!")
        } else if (playerAttack[index] === "BOW" && ataqueEnemigo[index] == "SPEAR") {
            indexAtaques(index,index)
            crearMensaje("YOU WON!")
            playerVictories++
            spanVidasJugador.innerHTML = playerVictories
        } else if (playerAttack[index] === "SWORD" && ataqueEnemigo[index] === "BOW") {
            indexAtaques(index,index)
            crearMensaje("YOU WON!")
            playerVictories++
            spanVidasJugador.innerHTML = playerVictories
        } else if (playerAttack[index] === "SPEAR" && ataqueEnemigo[index] === "SWORD") {
            indexAtaques(index,index)
            crearMensaje("YOU WON!")
            playerVictories++
            spanVidasJugador.innerHTML = playerVictories
        } else {
            indexAtaques(index,index)
            crearMensaje("YOU LOST!")
            enemyVictories++
            spanVidasEnemigo.innerHTML = enemyVictories
        }
        checkVictories()
    }
}

function checkVictories(){
    // DRY = don't repeat yourself
    if (playerVictories === enemyVictories){
        crearMensajeFinal('This time is a tie!')
    } else if (playerVictories > enemyVictories){
        crearMensajeFinal("¡Victory! You won the battle!")
    } else {
    crearMensajeFinal("¡Defeated! Try again.")
    }
}

function crearMensaje(resultado){
    
    let NuevoAtaqueJugador = document.createElement("p")
    let NuevoAtaqueEnemigo = document.createElement("p")

    sectMensaje.innerHTML = resultado
    NuevoAtaqueJugador.innerHTML = indexAtaqueJugador
    NuevoAtaqueEnemigo.innerHTML = indexAtaqueEnemigo
    
    sectAtaqueJugador.appendChild(NuevoAtaqueJugador)
    sectAtaqueEnemigo.appendChild(NuevoAtaqueEnemigo)
}

function crearMensajeFinal(resultadoFinal){
    
    sectMensajeFinal.innerHTML = resultadoFinal
    restartBttn.style.display = "flex"
    restartBttn.addEventListener('click', reiniciarJuego)
}


function aleatorio(min,max) {
    return Math.floor(Math.random()* (max - min +1) + min)
}

function reiniciarJuego(){
    location.reload()
}

