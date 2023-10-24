class Player {
    constructor(gameScreen, gameSize) {

        this.gameScreen = gameScreen
        this.gameSize = gameSize

        this.playerSize = {
            width: 57,
            height: 57
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
        this.playerEle.style.height = `${this.playerSize.height + 15}px`
        this.playerEle.style.width = `${this.playerSize.width + 15}px`
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
        this.playerPos.top -= 20
        this.playerVel.top -= 6

    }

    normalSize() {

        this.playerSize.width = 57
        this.playerSize.height = 57
        this.playerEle.style.height = `${this.playerSize.height + 15}px`
        this.playerEle.style.width = `${this.playerSize.width + 15}px`

    }

    smallSize() {

        this.playerSize.width = 30
        this.playerSize.height = 30
        this.playerEle.style.height = `${this.playerSize.height + 7}px`
        this.playerEle.style.width = `${this.playerSize.width + 7}px`

    }



    bigSize() {

        this.playerSize.width = 80
        this.playerSize.height = 80
        this.playerEle.style.height = `${this.playerSize.height + 15}px`
        this.playerEle.style.width = `${this.playerSize.width + 15}px`

    }


}



