const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const jugadores = []

class Jugador {
    constructor(id) {
        this.id = id;
    }

    asignarMokepon(warrior) {
        this.warrior = warrior;
    }
    
    actualizarPosicion(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Warrior {
    constructor(name) {
        this.name = name;
    }
}

app.get("/unirse", (req, res) => {
    const id = `${Math.random()}`;

    const jugador = new Jugador(id);

    jugadores.push(jugador);

    res.setHeader('Access-Control-Allow-Origin', "*");

    res.send(id);
});

app.post("/warrior/:jugadorId", (req, res) => {
    const jugadorId = req.params.jugadorId || "";
    const name = req.body.warrior || "";
    const warrior = new Warrior(name);

    const jugadorIndex = jugadores.findIndex((jugador) => jugadorId === jugador.id);

    if (jugadorIndex >= 0) {
        jugadores[jugadorIndex].asignarMokepon(warrior);
    }

    console.log(jugadores);
    console.log(jugadorId);
    res.end();
});

app.post("/warrior/:jugadorId/position", (req, res) => {
    const jugadorId = req.params.jugadorId || "";
    const x = req.body.x || 0;
    const y = req.body.y || 0;

    const jugadorIndex = jugadores.findIndex((jugador) => jugadorId === jugador.id);

    if (jugadorIndex >= 0) {
        jugadores[jugadorIndex].actualizarPosicion(x, y);
    }

    const enemigos = jugadores.filter((jugador) => jugadorId != jugador.id);

    res.send({
        enemigos
    });
});

app.listen(8080, () => {
    console.log('servidor funcionando');
});