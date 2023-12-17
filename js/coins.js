class Coins {
  constructor(gameScreen, gameSize, obstacleSize2) {
    this.gameScreen = gameScreen
    this.gameSize = gameSize
    this.obstacleSize2 = obstacleSize2

    this.coinsSize = {
      width: 40,
      height: 40
    }

    this.coinsPos = {
      left: gameSize.width + 40,
      top: obstacleSize2.height + 80
    }

    this.coinsVel = {
      left: 8
    }

    this.init()
  }

  init() {
    this.coinsEle = document.createElement('div')

    this.coinsEle.style.position = 'absolute'
    this.coinsEle.style.width = `${this.coinsSize.width}px`
    this.coinsEle.style.height = `${this.coinsSize.height}px`
    this.coinsEle.style.left = `${this.coinsPos.left}px`
    this.coinsEle.style.top = `${this.coinsPos.top}px`

    this.coinsEle.style.backgroundImage = `url(./img/Coin_A.png)`
    this.coinsEle.style.backgroundSize = `${this.coinsSize.height}px ${this.coinsSize.height}px`
    this.coinsEle.style.backgroundPositionX = '0px'

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
