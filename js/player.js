class Player {
  constructor(gameScreen, gameSize) {
    this.gameScreen = gameScreen
    this.gameSize = gameSize

    this.playerSize = {
      width: 60,
      height: 60
    }

    this.playerPos = {
      left: 300,
      top: this.gameSize.height / 2 - this.playerSize.height
    }

    this.playerVel = {
      top: 0,
      left: 1,
      gravity: 0.4
    }

    this.playerBackgroundPos = {
      x: 0,
      y: 0
    }

    this.playerSprite = {
      backgroundPositionX: 0,
      totalFrames: 6,
      currentFrame: 1,
      frameSpeed: 6
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
    this.playerEle.style.borderRadius = '50%'

    this.playerEle.style.backgroundImage = `url(./img/Walk.png)`
    this.playerEle.style.backgroundSize = `${this.playerSize.width * 6}px ${
      this.playerSize.height
    }px`
    this.playerEle.style.backgroundRepeat = 'no-repeat'
    this.playerEle.style.backgroundPositionX = '0px'

    this.gameScreen.appendChild(this.playerEle)
  }

  move(newFrames) {
    this.playerPos.top += this.playerVel.top
    this.playerVel.top += this.playerVel.gravity

    this.animateSprite(newFrames)

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
    this.playerSize.width = 60
    this.playerSize.height = 60
    this.playerEle.style.height = `${this.playerSize.height}px`
    this.playerEle.style.width = `${this.playerSize.width}px`
    this.playerEle.style.backgroundSize = `${this.playerSize.height * 6}px ${
      this.playerSize.height
    }px`
  }

  smallSize() {
    this.playerSize.width = 30
    this.playerSize.height = 30
    this.playerEle.style.height = `${this.playerSize.height}px`
    this.playerEle.style.width = `${this.playerSize.width}px`
    this.playerEle.style.backgroundSize = `${this.playerSize.height * 6}px ${
      this.playerSize.height
    }px`
  }

  bigSize() {
    this.playerSize.width = 80
    this.playerSize.height = 80
    this.playerEle.style.height = `${this.playerSize.height}px`
    this.playerEle.style.width = `${this.playerSize.width}px`
    this.playerEle.style.backgroundSize = `${this.playerSize.height * 6}px ${
      this.playerSize.height
    }px`
  }

  animateSprite(newFrames) {
    if (newFrames % this.playerSprite.frameSpeed == 0) {
      this.playerSprite.currentFrame++
    }
    if (this.playerSprite.currentFrame >= this.playerSprite.totalFrames) {
      this.playerSprite.currentFrame = 0
    }

    this.playerSprite.backgroundPositionX =
      -this.playerSize.width * this.playerSprite.currentFrame

    this.updateSprite()
  }

  updateSprite() {
    this.playerEle.style.backgroundPositionX = `${this.playerSprite.backgroundPositionX}px`
  }
}
