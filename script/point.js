class Point {
    constructor(x, y, scale, colorP) {
        this.x = x
        this.y = y
        this.giaPassatoSopra = false
        this.scale = scale
        this.colorP = colorP
        rect(this.x, this.y, this.scale, this.scale)
    }

    update() {
        fill("red")
        rect(this.x, this.y, this.scale, this.scale)
    }

    checkCollision(xA, yA) {
        if (this.x == xA && this.y == yA) {
            if (!this.giaPassatoSopra) {
                this.giaPassatoSopra = true
                return {
                    perso: false,
                    isCollision: true
                }
            } else {
                return {
                    perso: true,
                    isCollision: true
                }
            }
        }
        return { perso: false, isCollision: false }
    }
    getPassatoSopra() {
        return this.giaPassatoSopra
    }

}