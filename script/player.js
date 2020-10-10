class Player {
    constructor(x, y, speed, scale) {
        this.x = x
        this.y = y
        this.speed = speed
        this.scale = scale
        rect(this.x, this.y, this.scale, this.scale)
    }

    update() {
        fill("blue")
        rect(this.x, this.y, this.scale, this.scale)
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