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
            left: 9,
            gravity: 10

        }

        this.beeBackgroundPos = {
            x: 0,
            y: 0
        }

        this.beeSprite = {
            backgroundPositionX: 0,
            totalFrames: 6,
            currentFrame: 1,
            frameSpeed: 6
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

        this.beeEle.style.backgroundImage = `url(./img/bee2.png)`
        this.beeEle.style.backgroundSize = `${this.beeSize.width * 4}px ${this.beeSize.height}px`
        this.beeEle.style.backgroundRepeat = "no-repeat"
        this.beeEle.style.backgroundPositionX = "0px"

        this.gameScreen.appendChild(this.beeEle)
    }
    move(newFrames) {

        this.beePos.left -= this.beeVel.left
        this.beePos.top += this.beeVel.gravity

        if (this.beePos.top >= this.gameSize.height - 200) {
            this.beePos.top -= this.beeVel.top
            this.beeVel.gravity -= 8


        } else if (this.beePos.top < 100) {
            this.beePos.top += this.beeVel.top
            this.beeVel.gravity += 8

        }

        this.animateSprite(newFrames)

        this.updatePosition()
    }
    updatePosition() {
        this.beeEle.style.left = `${this.beePos.left}px`
        this.beeEle.style.top = `${this.beePos.top}px`
    }

    animateSprite(newFrames) {

        if (newFrames % this.beeSprite.frameSpeed == 0) {
            this.beeSprite.currentFrame++
        }
        if (this.beeSprite.currentFrame >= this.beeSprite.totalFrames) {
            this.beeSprite.currentFrame = 0
        }

        this.beeSprite.backgroundPositionX = -this.beeSize.width * this.beeSprite.currentFrame

        this.updateSprite()
    }

    updateSprite() {
        this.beeEle.style.backgroundPositionX = `${this.beeSprite.backgroundPositionX}px`
    }
}


























