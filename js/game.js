const Game = {

    gameScreen: document.querySelector('#game-screen'),

    gameSize: {
        width: window.innerWidth,
        height: window.innerHeight
    },

    background: undefined,
    player: undefined,
    obstacles: [],

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

        this.collision() && this.finish()

        window.requestAnimationFrame(() => this.loop())

    },

    movement() {

        this.background.move()
        this.player.move()
        this.obstacles.forEach(obs => obs.move())

    },

    newElement() {

        this.background = new Background(this.gameScreen, this.gameSize)
        this.player = new Player(this.gameScreen, this.gameSize)
        this.obstacles = []
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

        alert('Has perdido mostro')

    },

    collision() {

        if (this.player.playerPos.top + this.player.playerSize.height > this.gameSize.height ||
            this.player.playerPos.top < 0
        ) {
            return true
        }

    },

    newObs() {

        if (this.newFrames % this.obstaclesDensity === 0) {
            this.obstacles.push(new Obstacle(this.gameScreen, this.gameSize))
        }

    },

    clearObs() {

        this.obstacles.forEach((eachObs, idx) => {
            if (eachObs.obstaclePos1.left && eachObs.obstaclePos2.left <= 0 - 120) {
                eachObs.obstacleEle1.remove()
                eachObs.obstacleEle2.remove()
                this.obstacles.splice(idx, 1)
            }
        })

    }

}




