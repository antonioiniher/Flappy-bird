class Bee {
    constructor(gameScreen, gameSize) {
        this.gameScreen = gameScreen
        this.gameSize = gameSize
        this.beeSize = {
            width: 50,
            height: 50
        }
        this.beePos = {
            left: this.gameSize.width,
            top: Math.floor(Math.random() * (500 - 300) + 300)
        }
        this.beeVel = {
            top: 10,
            left: 5,
            gravity: 10

        }
        this.init()
    }
    init() {
        this.beeEle = document.createElement('div')
        this.beeEle.style.position = 'absolute'
        this.beeEle.style.height = `${this.beeSize.height}px`
        this.beeEle.style.width = `${this.beeSize.width}px`
        this.beeEle.style.left = `${this.beePos.left}px`
        this.beeEle.style.top = `${this.beePos.top}px`
        this.beeEle.style.backgroundColor = 'orange'
        this.beeEle.style.borderRadius = '50%'
        this.gameScreen.appendChild(this.beeEle)
    }
    move() {

        this.beePos.left -= this.beeVel.left
        this.beePos.top += this.beeVel.gravity


        if (this.beePos.top >= this.gameSize.height - 200) {
            this.beePos.top -= this.beeVel.top
            this.beeVel.gravity -= 10
        } else if (this.beePos.top < 200) {
            this.beePos.top += this.beeVel.top
            this.beeVel.gravity -= 10
        }


        // if (this.beePos.top >= this.gameSize.height - 100) {
        //     this.beePos.top -= this.beeVel.top
        //     this.beeVel.gravity -= 10


        // } else if (this.beePos.top < 0) {
        //     this.beePos.top += this.beeVel.top
        //     this.beeVel.gravity -= 10

        // }

        this.updatePosition()
    }
    updatePosition() {
        this.beeEle.style.left = `${this.beePos.left}px`
        this.beeEle.style.top = `${this.beePos.top}px`
    }
}


























