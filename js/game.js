const Game = {

    gameScreen: document.querySelector('#game-screen'),

    gameSize: {
        width: window.innerWidth,
        height: window.innerHeight
    },

    background: undefined,
    player: undefined,
    obstacles: [],
    coins: [],
    powerups: [],

    score: 0,

    newFrames: 0,

    obstaclesDensity: 70,

    key: { jump: 'KeyW' },

    init() {

        this.setDimensions()
        this.eventListeners()
        this.start()

    },

    setDimensions() {

        this.gameScreen.style.width = `${this.gameSize.width}px`
        this.gameScreen.style.height = `${this.gameSize.height}px`

    },

    start() {

        this.newElement()
        this.loop()

    },

    loop() {

        this.newFrames > 5000 ? this.newFrames = 0 : this.newFrames++

        this.newObs()
        this.clearObs()

        this.movement()

        // this.collision() && this.finish()
        this.goodCollision()
        this.win()

        window.requestAnimationFrame(() => this.loop())

    },

    movement() {

        this.background.move()
        this.player.move()
        this.obstacles.forEach(obs => obs.move())
        this.coins.forEach(elm => elm.move())
        this.powerups.forEach(elm => elm.move())

    },

    newElement() {

        this.background = new Background(this.gameScreen, this.gameSize)
        this.player = new Player(this.gameScreen, this.gameSize)
        this.powerups = []

    },

    eventListeners() {

        document.addEventListener("keydown", event => {
            switch (event.code) {

                case this.key.jump:
                    this.player.jump()
                    break;
            }
        })

    },

    finish() {

        alert('Has perdido')

    },

    win() {

        if (this.score >= 3) {
            alert('Has ganado')
        }

    },

    collision() {

        if (this.player.playerPos.top + this.player.playerSize.height > this.gameSize.height ||
            this.player.playerPos.top < 0
        ) {
            return true
        }

        for (let i = 0; i < this.obstacles.length; i++) {
            if (
                ((this.player.playerPos.left + this.player.playerSize.width >= this.obstacles[i].obstaclePos1.left &&
                    this.player.playerPos.top + this.player.playerSize.height >= this.obstacles[i].obstaclePos1.top) ||
                    (this.player.playerPos.left + this.player.playerSize.width >= this.obstacles[i].obstaclePos2.left &&
                        this.player.playerPos.top <= this.obstacles[i].obstacleSize2.height)) &&
                (this.player.playerPos.left <= this.obstacles[i].obstaclePos1.left + this.obstacles[i].obstacleSize1.width ||
                    this.player.playerPos.left <= this.obstacles[i].obstaclePos2.left + this.obstacles[i].obstacleSize2.width
                )
            ) {
                return true
            }
        }

    },

    newObs() {

        if (this.newFrames % this.obstaclesDensity === 0) {
            let newObstacle = new Obstacle(this.gameScreen, this.gameSize)
            this.obstacles.push(newObstacle)
            let newCoins = new Coins(this.gameScreen, this.gameSize, newObstacle.obstacleSize2)
            this.coins.push(newCoins)
        }

        if (this.newFrames % (this.obstaclesDensity * 5) === 0) {
            this.powerups.push(new Powerup(this.gameScreen, this.gameSize))
        }

    },

    clearObs() {

        this.obstacles.forEach((eachObs, idx) => {
            if (eachObs.obstaclePos1.left <= 0 - 120) {
                eachObs.obstacleEle1.remove()
                eachObs.obstacleEle2.remove()
                this.obstacles.splice(idx, 1)
            }
        })

        this.coins.forEach((eachCoin, idx) => {
            if (
                eachCoin.coinsPos.left <= this.player.playerPos.left + this.player.playerSize.width &&
                eachCoin.coinsPos.top <= this.player.playerPos.top + this.player.playerSize.height &&
                this.player.playerPos.top <= eachCoin.coinsPos.top + eachCoin.coinsSize.height
            ) {
                eachCoin.coinsEle.remove()
                this.coins.splice(idx, 1)
            } else if (eachCoin.coinsPos.left <= 0 - 120) {
                eachCoin.coinsEle.remove()
                this.coins.splice(idx, 1)
            }
        })

        this.powerups.forEach((elm, idx) => {
            if (
                elm.powerupPos.left <= this.player.playerPos.left + this.player.playerSize.width &&
                elm.powerupPos.top <= this.player.playerPos.top + this.player.playerSize.height &&
                this.player.playerPos.top <= elm.powerupPos.top + elm.powerupSize.height
            ) {
                elm.powerupEle.remove()
                this.powerups.splice(idx, 1)
            } else if (elm.powerupPos.left <= 0 - 120) {
                elm.powerupEle.remove()
                this.powerups.splice(idx, 1)
            }
        })

    },

    goodCollision() {

        for (let i = 0; i < this.coins.length; i++) {
            if (
                this.player.playerPos.left + this.player.playerSize.width >= this.coins[i].coinsPos.left &&
                this.player.playerPos.top + this.player.playerSize.height >= this.coins[i].coinsPos.top &&
                this.player.playerPos.left <= this.coins[i].coinsPos.left + this.coins[i].coinsSize.width &&
                this.player.playerPos.top <= this.coins[i].coinsPos.top + this.coins[i].coinsSize.height
            ) {
                this.score++
            }
        }

        for (let i = 0; i < this.powerups.length; i++) {
            if (
                this.player.playerPos.left + this.player.playerSize.width >= this.powerups[i].powerupPos.left &&
                this.player.playerPos.top + this.player.playerSize.height >= this.powerups[i].powerupPos.top &&
                this.player.playerPos.left <= this.powerups[i].powerupPos.left + this.powerups[i].powerupSize.width &&
                this.player.playerPos.top <= this.powerups[i].powerupPos.top + this.powerups[i].powerupSize.height
            ) {
                this.player.newSize()
            }
        }

    }

}





