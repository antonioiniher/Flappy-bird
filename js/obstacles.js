class Obstacle {
  constructor(gameScreen, gameSize) {
    this.gameScreen = gameScreen
    this.gameSize = gameSize

    this.obstacleSize1 = {
      width: 120,
      height: Math.floor(Math.random() * (500 - 50) + 50)
    }

    this.obstacleSize2 = {
      width: 120,
      height: this.gameSize.height - this.obstacleSize1.height - 200
    }

    this.obstaclePos1 = {
      left: gameSize.width,
      top: this.gameSize.height - this.obstacleSize1.height
    }

    this.obstaclePos2 = {
      left: gameSize.width,
      top: 0
    }

    this.obstacleVel = {
      left: 8
    }

    this.init()
  }

  init() {
    this.obstacleEle1 = document.createElement('div')
    this.obstacleEle2 = document.createElement('div')

    this.obstacleEle1.style.position = 'absolute'
    this.obstacleEle1.style.width = `${this.obstacleSize1.width}px`
    this.obstacleEle1.style.height = `${this.obstacleSize1.height + 10}px`
    this.obstacleEle1.style.left = `${this.obstaclePos1.left}px`
    this.obstacleEle1.style.top = `${this.obstaclePos1.top}px`

    this.obstacleEle2.style.position = 'absolute'
    this.obstacleEle2.style.width = `${this.obstacleSize2.width}px`
    this.obstacleEle2.style.height = `${this.obstacleSize2.height + 10}px`
    this.obstacleEle2.style.left = `${this.obstaclePos2.left}px`
    this.obstacleEle2.style.top = `${this.obstaclePos2.top}px`

    this.obstacleEle1.style.backgroundImage = `url(./img/pipeA.png)`
    this.obstacleEle1.style.backgroundSize = `${this.obstacleSize1.width * 2}px ${
      this.obstacleSize1.height
    }px`
    this.obstacleEle1.style.backgroundPositionX = '180px'

    this.obstacleEle2.style.backgroundImage = `url(./img/PipeB.png)`
    this.obstacleEle2.style.backgroundSize = `${this.obstacleSize2.width * 2}px ${
      this.obstacleSize2.height
    }px`
    this.obstacleEle2.style.backgroundPositionX = '180px'

    this.gameScreen.appendChild(this.obstacleEle1)
    this.gameScreen.appendChild(this.obstacleEle2)
  }

  move() {
    this.obstaclePos1.left -= this.obstacleVel.left
    this.obstaclePos2.left -= this.obstacleVel.left
    this.updatePosition()
  }

  updatePosition() {
    this.obstacleEle1.style.left = `${this.obstaclePos1.left}px`
    this.obstacleEle1.style.top = `${this.obstaclePos1.top}px`

    this.obstacleEle2.style.left = `${this.obstaclePos2.left}px`
    this.obstacleEle2.style.top = `${this.obstaclePos2.top}px`
  }
}
