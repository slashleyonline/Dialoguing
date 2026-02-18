class Title extends Phaser.Scene {
    constructor() {
        super("titleScene")
    }

    preload() {
        // load assets
        this.load.path = "./assets/"

        // load JSON (ie dialog text)
        this.load.json('dialog', 'json/dialog.json')

        // load images
        this.load.image('dialogbox', 'img/dialogbox.png')
        this.load.image('bottom', 'img/bottom.png')
        this.load.image('quince', 'img/quince.png')
        this.load.image('snout', 'img/snout.png')
        this.load.image('starveling', 'img/starveling.png')
        this.load.image('theseus', 'img/theseus.png')
        this.load.image('lysander', 'img/lysander.png')
        this.load.image('philostrate', 'img/philostrate.png')

        // load bitmap font
        this.load.bitmapFont('gem_font', 'font/gem.png', 'font/gem.xml')
        this.load.bitmapFont('y2k_font', 'font/Y2KNeophyte.png', 'font/Y2KNeophyte.xml')
    }

    create() {
        // add title text
        this.add.bitmapText(centerX, centerY - 32, 'y2k_font', 'A MIDSUMMER NIGHT\'S DREAM', 48).setOrigin(0.5)
        this.add.bitmapText(centerX, centerY + 16, 'y2k_font', 'Press SPACE to start', 32).setOrigin(0.5)

        // create input
        cursors = this.input.keyboard.createCursorKeys()
    }

    update() {
        // wait for player input
        if(Phaser.Input.Keyboard.JustDown(cursors.space)) {
            this.scene.start("talkingScene")
        }
    }
}