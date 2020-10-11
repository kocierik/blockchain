let Vframe = 20
let scale = 20
let player
let points = []
let score = 0

function setup() {
    createCanvas(400, 400);
    player = new Player(20, 20, Vframe, scale)
    points[0] = new Point(60, 60, scale)
    frameRate(10)
}

function draw() {
    background(25)
    player.update()
    player.overflowCanvas()
    player.move()
    lose()

    for (let i = 0; i < points.length; i++) {
        points[i].update()
    }
}

function lose() {
    for (let i = 0; i < points.length; i++) {
        const risultato = points[i].checkCollision(player.x, player.y)
        if (risultato.perso) {
            console.log("perso")
            document.getElementById('gamePoint').innerHTML = `You LOSE -- Total SCORE : ${score} `
            noLoop()
        } else if (risultato.isCollision && !risultato.perso) {
            score++
            document.getElementById('gamePoint').innerHTML = `SCORE : ${score} `
            const xA = width / scale * floor(random(scale))
            const yB = height / scale * floor(random(scale))
            while (points[i].x == xA && points[i].y == yB) {
                points[score] = new Point(xA, yB, scale)
            }
            points[score] = new Point(xA, yB, scale)
        }
    }
}
//controllare la collisione
//se c'è una collisione controllare se esiste un blocco nella stessa posizione 
//se c'è la collisione ed esiste già un blocco genera un'altra posizione del blocco
//se c'è la collisione e non esiste già un blocco genera il blocco nella posizione corrente