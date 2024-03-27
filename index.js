const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.static('public'))
app.use(cors());
app.use(express.json());

const jugadores = []

class Jugador {
    constructor(id) {
        this.id = id;
    }

    asignarWarrior(warrior) {
        this.warrior = warrior;
    }
    
    actualizarPosicion(x, y) {
        this.x = x;
        this.y = y;
    }

    asignarAtaques(ataques) {
        this.ataques = ataques
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
    console.log("app.post_name",name)
    const warrior = new Warrior(name);
    

    const jugadorIndex = jugadores.findIndex((jugador) => jugadorId === jugador.id);

    if (jugadorIndex >= 0) {
        jugadores[jugadorIndex].asignarWarrior(warrior);
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
    console.log("enemigos ",enemigos)
    console.log("jugadores ", jugadores)
    res.send({
        enemigos
    });
});

app.post("/warrior/:jugadorId/ataques", (req, res) => {
    const jugadorId = req.params.jugadorId || "";
    const ataques = req.body.ataques || [];
   
    

    const jugadorIndex = jugadores.findIndex((jugador) => jugadorId === jugador.id);

    if (jugadorIndex >= 0) {
        jugadores[jugadorIndex].asignarAtaques(ataques);
    }
    res.end();
});

app.get("/warrior/:jugadorId/ataques", (req, res) => {
    const jugadorId = req.params.jugadorId || "";
    const jugador = jugadores.find((jugador) => jugador.id === jugadorId)
    res.send({
        ataques: jugador.ataques || "no attacks"
    })
})

app.listen(8080, () => {
    console.log('servidor funcionando');
});