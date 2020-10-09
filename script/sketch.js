let Vframe = 20
let scl = 20
let player

function setup() {
    createCanvas(windowWidth, windowHeight + 5);
    player = new Player(random(floor(windowWidth)), random(floor(windowHeight)), scl, scl, Vframe)
}

function draw() {
    background(25)
    frameRate(Vframe)
    player.createPlayer()
    player.overflowCanvas()
    player.move()

}