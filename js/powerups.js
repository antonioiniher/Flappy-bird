class Powerup {

    constructor(gameScreen, gameSize) {
        this.gameScreen = gameScreen
        this.gameSize = gameSize

        this.powerupSize = {

            width: 80,
            height: 60

        }

        this.powerupPos = {

            left: gameSize.width + 400,
            top: Math.floor(Math.random() * (500 - 100) + 100)

        }

        this.powerupVel = {
            left: 8
        }

        this.init()

    }

    init() {

        this.powerupEle = document.createElement('div')

        this.powerupEle.style.position = 'absolute'
        this.powerupEle.style.width = `${this.powerupSize.width}px`
        this.powerupEle.style.height = `${this.powerupSize.height}px`
        this.powerupEle.style.left = `${this.powerupPos.left}px`
        this.powerupEle.style.top = `${this.powerupPos.top}px`

        this.powerupEle.style.backgroundImage = `url(./img/Bonus_2_2.png)`
        this.powerupEle.style.backgroundSize = `${this.powerupSize.width}px ${this.powerupSize.height}px`
        this.powerupEle.style.backgroundPositionX = "0px"

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