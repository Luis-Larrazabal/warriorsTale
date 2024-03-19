
                            // BeginGame    
const sectionSeleccAtaque = document.getElementById("attack_selection")
const sectionLives = document.getElementById("lives")
const bttnsAttack = document.getElementById("attack_buttons")
const resultadoCombate = document.getElementById("resultado-combate")
const nombreMascota = document.getElementById("nombre_mascota_jugador")
const imgArcher = document.getElementById("Juana")
const imgKnight = document.getElementById("Arthur")
const imgSpear = document.getElementById("Rose")
const ContainerFoChars = document.getElementById("CharsContainer")
                
                // SeleccCharEnemigo 
const header2 = document.getElementById("header2")
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
let indexAtaqueJugador
let indexAtaqueEnemigo 
let playerVictories = 0
let enemyVictories = 0
let canva = mapa.getContext('2d')
let intervalo
let backgroundMap = new (Image)
backgroundMap.src = './Resources/map.jpg'
let warriorPlayed 
let enemyAttacks 
let ataqueAleatorio = []



class Warrior {
    constructor(name, image, lifes, mapImage, x = 10, y = 10) {
        this.name = name
        this.image = image
        this.lifes = lifes
        this.attacks = []
        this.x = x
        this.y = y
        this.ancho = 120
        this.alto = 120
        this.imageMap = new Image()
        this.imageMap.src = mapImage
        this.veloX = 0
        this.veloY = 0
    }

    drawWarrior() {
        canva.drawImage(
            this.imageMap,
            this.x,
            this.y,
            this.ancho,
            this.alto,
        )
    }
}
                    // Player Characters
let juana = new Warrior ('Juana', './Resources/890.png', 5, './Resources/890-head.png')
let arthur = new Warrior ('Arthur', './Resources/good3.png', 5, './Resources/good3-head.png')
let rose = new Warrior ('Rose', './Resources/123.png', 5, './Resources/123-head.png')

                    // Enemy Characters
let enemy1 = new Warrior ('ENEMY1', './Resources/enemy1.png', 5, './Resources/enemy1-head.png', aleatorio(30,500), aleatorio(0,500))
let enemy2 = new Warrior ('ENEMY2', './Resources/enemy2.png', 5, './Resources/enemy2-head.png', aleatorio(30,500), aleatorio(0,500))
let enemy3 = new Warrior ('ENEMY3', './Resources/enemy3.png', 5, './Resources/enemy3-head.png', aleatorio(30,500), aleatorio(0,500))


juana.attacks.push(
    { attackName: '🏹', id: 'fire_button' },
    { attackName: '🏹', id: 'fire_button' },
    { attackName: '🏹', id: 'fire_button' },
    { attackName: '🗡️', id: 'water_button' },
    { attackName: '🪓', id: 'earth_button' },
)

arthur.attacks.push(
    { attackName: '🗡️', id: 'water_button' },
    { attackName: '🗡️', id: 'water_button' },
    { attackName: '🗡️', id: 'water_button' },
    { attackName: '🏹', id: 'fire_button' },
    { attackName: '🪓', id: 'earth_button' },
)

rose.attacks.push(
    { attackName: '🪓', id: 'earth_button' },
    { attackName: '🪓', id: 'earth_button' },
    { attackName: '🪓', id: 'earth_button' },
    { attackName: '🏹', id: 'fire_button' },
    { attackName: '🗡️', id: 'water_button' },
)

enemy1.attacks.push(
    { attackName: '🏹', id: 'fire_button' },
    { attackName: '🏹', id: 'fire_button' },
    { attackName: '🏹', id: 'fire_button' },
    { attackName: '🗡️', id: 'water_button' },
    { attackName: '🪓', id: 'earth_button' },
)

enemy2.attacks.push(
    { attackName: '🗡️', id: 'water_button' },
    { attackName: '🗡️', id: 'water_button' },
    { attackName: '🗡️', id: 'water_button' },
    { attackName: '🏹', id: 'fire_button' },
    { attackName: '🪓', id: 'earth_button' },
)

enemy3.attacks.push(
    { attackName: '🪓', id: 'earth_button' },
    { attackName: '🪓', id: 'earth_button' },
    { attackName: '🪓', id: 'earth_button' },
    { attackName: '🏹', id: 'fire_button' },
    { attackName: '🗡️', id: 'water_button' },
)

warriors.push(juana, arthur, rose, enemy1, enemy2, enemy3)

window.addEventListener("load", beginGame)

function beginGame() {
    
    sectionSeleccAtaque.style.display = "none"
    sectionLives.style.display = "none"
    bttnsAttack.style.display = "none"
    resultadoCombate.style.display = "none"
    sectionVerMapa.style.display = 'none'


    unirseAlJuego() 

    imgArcher.addEventListener("click", imageArcher)
    function imageArcher(){
        playerWarrior = imgArcher.id    
        extraerImagenJugador()
        extraerAtaques(playerWarrior)
        beginMap()
    }

    imgKnight.addEventListener("click", imageKnight)
    function imageKnight(){
        playerWarrior = imgKnight.id
        extraerImagenJugador()
        extraerAtaques(playerWarrior)
        beginMap()
    }

    imgSpear.addEventListener("click", imageSpear)
    function imageSpear() {
        playerWarrior = imgSpear.id
        extraerImagenJugador()
        extraerAtaques(playerWarrior)
        beginMap()
    }
}

function unirseAlJuego() {
    fecth('http://localhost:8080/unirse')
        .then(function (res) {
            console.log(res)
        })
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


function extraerImagenJugador() {
    let imagen
    for (let i = 0; i < warriors.length; i++) {
        if (playerWarrior === warriors[i].name) {
            imagen = warriors[i].image
        }   
    }
    nombreMascota.innerHTML = `<img src=${imagen} class = 'image-player'>`
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
                boton.style.background = '#000000'
                boton.disabled = true
            } else if (e.target.textContent === '🗡️') {
                playerAttack.push('SWORD')
                boton.style.background = '#000000'
                boton.disabled = true
            } else {
                playerAttack.push('AXE')
                boton.style.background = 'rgba(0, 0, 0, 0.9)'
                boton.disabled = true
            }
            ataqueAleatorioEnemigo()
        })
    })
}

function SeleccCharEnemigo() {

    let enemyWarrior = aleatorio(0, warriors.length -1)
    characterEnemigo.innerHTML = `<img src =${warriors[enemyWarrior].image} class = 'image-enemy'>`
    
    enemyAttacks = warriors[enemyWarrior].attacks
}

function ataqueAleatorioEnemigo(){
    
    //console.log('ataques enemigo', enemyAttacks)
    let ataqueAleatorio = aleatorio(0, enemyAttacks.length -1)

    if (enemyAttacks[ataqueAleatorio].attackName === '🏹') {
        ataqueEnemigo.push('BOW')
    } else if (enemyAttacks[ataqueAleatorio].attackName === '🗡️'){
        ataqueEnemigo.push('SWORD')
    }else {
        ataqueEnemigo.push('AXE')
    }  
    enemyAttacks.splice(ataqueAleatorio, 1)

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
        } else if (playerAttack[index] === "BOW" && ataqueEnemigo[index] == "AXE") {
            indexAtaques(index,index)
            crearMensaje("YOU WON!")
            playerVictories++
            spanVidasJugador.innerHTML = playerVictories
        } else if (playerAttack[index] === "SWORD" && ataqueEnemigo[index] === "BOW") {
            indexAtaques(index,index)
            crearMensaje("YOU WON!")
            playerVictories++
            spanVidasJugador.innerHTML = playerVictories
        } else if (playerAttack[index] === "AXE" && ataqueEnemigo[index] === "SWORD") {
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

function drawImage() {
    warriorPlayed.x = warriorPlayed.x + warriorPlayed.veloX
    warriorPlayed.y = warriorPlayed.y + warriorPlayed.veloY
    canva.clearRect(0,0,mapa.width, mapa.height)
    canva.drawImage(
        backgroundMap,
        0,
        0,
        mapa.width,
        mapa.height
    )
    warriorPlayed.drawWarrior()
    enemy1.drawWarrior()
    enemy2.drawWarrior()
    enemy3.drawWarrior()

    if(warriorPlayed.veloX !== 0 || warriorPlayed.veloY !== 0) {
        colisionCheck(enemy1)
        colisionCheck(enemy2)
        colisionCheck(enemy3)
    }
}

function moveRigth() {
    warriorPlayed.veloX = 10
}

function moveLeft() {
    warriorPlayed.veloX = -10
}

function moveUp() {
    warriorPlayed.veloY = - 10
}

function moveDown() {
    warriorPlayed.veloY =  10

}

function stopMove() {
    
    warriorPlayed.veloX = 0
    warriorPlayed.veloY = 0
} 

function keyPressed(event) {
    switch (event.key) {
        case 'ArrowUp':
        case 'w':
            moveUp()
            break
        case 'ArrowDown':
        case 's':
            moveDown()
            break
        case 'ArrowLeft':
        case 'a':
            moveLeft()
            break
        case 'ArrowRight':
        case 'd':
            moveRigth()
            break;
        default:
            break;
    }
}

function beginMap() {
    
    header2.style.display = "none"
    sectionSeleccChar.style.display = "none"
    sectionVerMapa.style.display = 'flex'

    mapa.width = 1200;
    mapa.height = 700;
    warriorPlayed = getWarrior(playerWarrior)
    console.log(warriorPlayed)
    intervalo = setInterval(drawImage, 50)
    window.addEventListener('keydown', keyPressed)
    window.addEventListener('keyup', stopMove)
}

function getWarrior() {
    for (let i = 0; i < warriors.length; i++) {
        if (playerWarrior === warriors[i].name) {
            return warriors[i]
        }
    }
}

function colisionCheck(enemigo) {

    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const derechaEnemigo = enemigo.x + enemigo.ancho
    const izquierdaEenmigo = enemigo.x

    const arribaJugador = warriorPlayed.y
    const abajoJugador = warriorPlayed.y + warriorPlayed.alto
    const derechaJugador = warriorPlayed.x + warriorPlayed.ancho
    const izquierdaJugador = warriorPlayed.x
    
    if(
        abajoJugador < arribaEnemigo || 
        arribaJugador > abajoEnemigo ||
        derechaJugador < izquierdaEenmigo ||
        izquierdaJugador > derechaEnemigo
    ) {
        return
    }
    stopMove()
    resultadoCombate.style.display = "flex"
    sectionSeleccAtaque.style.display = "flex"
    bttnsAttack.style.display = "flex"
    sectionLives.style.display = "grid"
    restartBttn.style.display = "none"
    sectionVerMapa.style.display = 'none'
    SeleccCharEnemigo()
}

function reiniciarJuego(){
    location.reload()
}