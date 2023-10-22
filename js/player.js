class Player {
    constructor(gameScreen, gameSize) {

        this.gameScreen = gameScreen
        this.gameSize = gameSize

        this.playerSize = {
            width: 70,
            height: 70
        }

        this.playerPos = {

            left: 300,
            top: this.gameSize.height / 2 - this.playerSize.height,

        }

        this.playerVel = {
            top: 0,
            left: 1,
            gravity: 0.4
        }

        this.init()

    }

    init() {

        this.playerEle = document.createElement('div')
        this.playerEle.style.position = 'absolute'
        this.playerEle.style.height = `${this.playerSize.height}px`
        this.playerEle.style.width = `${this.playerSize.width}px`
        this.playerEle.style.left = `${this.playerPos.left}px`
        this.playerEle.style.top = `${this.playerPos.top}px`
        this.playerEle.style.backgroundColor = 'black'
        this.playerEle.style.borderRadius = '50%'

        this.gameScreen.appendChild(this.playerEle)

    }

    move() {

        this.playerPos.top += this.playerVel.top
        this.playerVel.top += this.playerVel.gravity

        this.updatePosition()

    }

    updatePosition() {

        this.playerEle.style.left = `${this.playerPos.left}px`
        this.playerEle.style.top = `${this.playerPos.top}px`

    }

    jump() {

        if (this.playerVel.top > 0) {
            this.playerVel.top = 0
        }
        this.playerPos.top -= 20;
        this.playerVel.top -= 6;

    }





}



