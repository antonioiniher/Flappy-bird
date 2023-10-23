class Powerup {

    constructor(gameScreen, gameSize,) {
        this.gameScreen = gameScreen
        this.gameSize = gameSize

        this.powerupSize = {

            width: 30,
            height: 30

        }

        this.powerupPos = {

            left: gameSize.width + 400,
            top: Math.floor(Math.random() * (200 + (gameSize.height - 200)))

        }

        this.powerupVel = {
            left: 10
        }

        this.init()

    }

    init() {

        this.powerupEle = document.createElement('div')

        this.powerupEle.style.position = 'absolute'
        this.powerupEle.style.backgroundColor = 'blue'
        this.powerupEle.style.width = `${this.powerupSize.width}px`
        this.powerupEle.style.height = `${this.powerupSize.height}px`
        this.powerupEle.style.left = `${this.powerupPos.left}px`
        this.powerupEle.style.top = `${this.powerupPos.top}px`

        this.gameScreen.appendChild(this.powerupEle)

    }

    move() {

        this.powerupPos.left -= this.powerupVel.left
        this.updatePosition()

    }

    updatePosition() {

        this.powerupEle.style.left = `${this.powerupPos.left}px`
        this.powerupEle.style.top = `${this.powerupPos.top}px`

    }



}