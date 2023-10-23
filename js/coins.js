class Coins {
    constructor(gameScreen, gameSize, obstacleSize2) {
        this.gameScreen = gameScreen
        this.gameSize = gameSize
        this.obstacleSize2 = obstacleSize2

        this.coinsSize = {
            width: 20,
            height: 20
        }

        this.coinsPos = {
            left: gameSize.width + 50,
            top: obstacleSize2.height + 90
        }

        this.coinsVel = {
            left: 10
        }

        this.init()
    }

    init() {

        this.coinsEle = document.createElement('div')

        this.coinsEle.style.position = 'absolute'
        this.coinsEle.style.backgroundColor = 'yellow'
        this.coinsEle.style.width = `${this.coinsSize.width}px`
        this.coinsEle.style.height = `${this.coinsSize.height}px`
        this.coinsEle.style.left = `${this.coinsPos.left}px`
        this.coinsEle.style.top = `${this.coinsPos.top}px`

        this.gameScreen.appendChild(this.coinsEle)

    }

    move() {

        this.coinsPos.left -= this.coinsVel.left
        this.updatePosition()

    }

    updatePosition() {

        this.coinsEle.style.left = `${this.coinsPos.left}px`
        this.coinsEle.style.top = `${this.coinsPos.top}px`

    }
}