class Background {
    constructor(gameScreen, gameSize) {

        this.gameScreen = gameScreen
        this.gameSize = gameSize

        this.backSize = {
            width: gameSize.width,
            height: gameSize.height
        }

        this.backPos1 = {
            left: 0,
            top: 0
        }

        this.backPos2 = {
            left: gameSize.width,
            top: 0
        }


        this.backVel = {
            left: 8
        }

        this.init()
    }

    init() {
        this.backgroundElm1 = document.createElement('img')
        this.backgroundElm2 = document.createElement('img')

        this.backgroundElm1.src = './img/maxresdefault.jpg'
        this.backgroundElm2.src = './img/maxresdefault.jpg'

        this.backgroundElm1.style.position = 'absolute'
        this.backgroundElm1.style.width = `${this.backSize.width}px`
        this.backgroundElm1.style.height = `${this.backSize.height}px`
        this.backgroundElm1.style.left = `${this.backPos1.left}px`
        this.backgroundElm1.style.top = `${this.backPos1.top}px`

        this.backgroundElm2.style.position = 'absolute'
        this.backgroundElm2.style.width = `${this.backSize.width}px`
        this.backgroundElm2.style.height = `${this.backSize.height}px`
        this.backgroundElm2.style.left = `${this.backPos2.left}px`
        this.backgroundElm2.style.top = `${this.backPos2.top}px`

        this.gameScreen.appendChild(this.backgroundElm1)
        this.gameScreen.appendChild(this.backgroundElm2)
    }

    move() {
        if (this.backPos1.left <= -this.backSize.width) {
            this.restartPos()
        }

        this.backPos1.left -= this.backVel.left
        this.backPos2.left -= this.backVel.left
        this.updatePos()
    }

    restartPos() {
        this.backPos1.left = 0
        this.backPos2.left = this.backSize.width
    }
    updatePos() {
        this.backgroundElm1.style.left = `${this.backPos1.left}px`
        this.backgroundElm2.style.left = `${this.backPos2.left}px`

    }

}



