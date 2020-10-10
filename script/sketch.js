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

    for (let i = 0; i < points.length; i++) {
        const risultato = points[i].checkCollision(player.x, player.y)
        if (risultato.perso) {
            console.log("perso")
            noLoop()
        } else if (risultato.isCollision && !risultato.perso) {
            score++
            const xA = width / scale * floor(random(scale))
            const yB = height / scale * floor(random(scale))
            points[score] = new Point(xA, yB, scale)
        }
    }
    for (let i = 0; i < points.length; i++) {
        points[i].update()
    }
}