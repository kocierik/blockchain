class Player {
    constructor(x, y, scaleH, scaleW, speed) {
        this.x = x
        this.y = y
        this.scaleH = scaleH
        this.scaleW = scaleW
        this.speed = speed

    }
    createPlayer() {
        rect(this.x, this.y, this.scaleH, this.scaleW)
    }
    move() {
        switch (keyCode) {
            case UP_ARROW:
                this.y -= this.speed
                break
            case DOWN_ARROW:
                this.y += this.speed
                break
            case LEFT_ARROW:
                this.x -= this.speed
                break
            case RIGHT_ARROW:
                this.x += this.speed
                break
            default:
        }
    }
    overflowCanvas() {
        if (this.x > width)
            this.x = 0
        if (this.y > height)
            this.y = 0
        if (this.x < 0)
            this.x = width
        if (this.y < 0)
            this.y = height
    }
}