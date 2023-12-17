class Score {
  constructor(gameScreen, gameSize) {
    this.gameScreen = gameScreen
    this.gameSize = gameSize

    this.scoreSize = {
      width: 100,
      height: 100
    }

    this.scorePos = {
      left: gameSize.width / 2 - 50,
      top: gameSize.height / 2 - 350
    }

    this.init()
  }

  init() {
    this.scoreElm = document.createElement('h1')
    this.scoreElm.innerHTML = 0

    this.scoreElm.style.position = 'absolute'
    this.scoreElm.style.width = `${this.scoreSize.width}px`
    this.scoreElm.style.height = `${this.scoreSize.height}px`
    this.scoreElm.style.left = `${this.scorePos.left}px`
    this.scoreElm.style.top = `${this.scorePos.top}px`
    this.scoreElm.style.color = 'blue'
    this.scoreElm.style.fontWeight = 'bold'
    this.scoreElm.style.fontSize = '5em'
    this.scoreElm.style.zIndex = '5'

    this.gameScreen.appendChild(this.scoreElm)
  }

  updateScore() {
    this.scoreElm.innerHTML = Game.score
  }
}
