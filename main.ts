let demonBlasts: Sprite = null
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999444444444444444449999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999944444444444444444444449999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999994444444444444444444444444449999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999944444444444444444444444444444499999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999994444444444444444444444444444444449999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999944444444444444444444444444444444444999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999944444444444444444444444444444444444449999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999944444444444444444444444444444444444449999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999944444444444444444444444444444444444444999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999444444444444444444444444444444444444444444449999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999444444444444444444444444444444444444444444449999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999444eeeee4444444444444444444444444444444444444999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999444eeeee4444444444444444444444444444444444444499999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999444eeeee4444444444444444444444444444444444444499999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999444eeeee4222224444444444444444444444444444444499999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999444eeeee4222225222224444444444444444444444444499999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999444444444222225222224444444444444444444444444444499999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999944444442222252222244444444eeeee444444444444444449999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999444442222252222255555444eeeee444444444444444444999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999444444444452222252222244eeeee444444444444444444449999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999444444444444444452222244eeeee444422222444444444444999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999444444444444444452222244eeeee444422222444444444444499999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999444444444444444452222244444444444222224455555444eeeee999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999994444444444444422222244444444444222224455555444eeeee999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999994444444222224422222444444222224222224455555444eeeee999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999994444444222224422222455555222224444442222255444eeeee999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999994444444222224444444455555222224444442222255444eeeee999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999444444422222444444445555522222444444222224444444499999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999444444422222444444445555522222444444222224444444499999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999994444444444444eeeee45555544444444444222224444444999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999944444444444eeeee44444444455522222442222244444999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999994444444eeeee44444444455522222442222255449999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999944444eeeee44444444455522222442222255444999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999944444eeeee44444444455522222442222255444999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999994444444444444444455522222442222255444999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999eeeeeee44444444444444444455555444999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999eeeeeeeeee44444444444444444444444999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999eeeeeeeeeeee994444444444444444499999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999eeeeeeeeeee9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999eeeeeeeeee99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999eeeeeeeeee99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999eeeeeeeeee99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999eeeeeeeeee99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999eeeeeeeeee99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999eeeeeeeeee99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999eeeeeeeeee99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999eeeeeeeeee99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999eeeeeeeeee99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999eeeeeeeeee99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999eeeeeeeeeee9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999eeeeeeeeeee9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999eeeeeeeeeeee9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999eeeeeeeeeeee9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999eeeeeeeeeeee9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999eeeeeeeeeeeee9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999eeeeeeeeeeeee9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999eeeeeeeeeeeee9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999eeeeeeeeeeeee9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999997777777777777777777777777eeeeeeeeeeeeee9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    977777777777777777777777777777eeeeeeeeeeeeeee9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    77777777777777777777777777777eeeeeeeeeeeeeeeee779999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    77777777777777777777777777777eeeeeeeeeeeeeeeee777799999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    7777777777777777777777777777eeeeeeeeeeeeeeeeee777777999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    77777777777777777777777777eeeeeeeeeeeeeeeeeeee777777779999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    777777777777777777777777eeeeeeeeeeeeeeeeeeeeee777777777779999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    7777777777777777777777eeeeeeeeeeeeeeeeeeeeeeee777777777777799999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    7777777777777777777eeeeeeeeeeeeeeeeeeeeeeeeeee777777777777777999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    7777777777777777777eeeeeeeeeeeeeeeeeeeeeeeeeee777777777777777779999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    7777777777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeee7777777777777777779999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    7777777777777777777eeeeeeeeeeeeeee77eeeeeeeeeeeee777777777777777777779999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    7777777777777777777eeeeeee77eeeee777eeeeeeeeeeeee777777777777777777777799999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    777777777777777777777777777777777777eeeeeeeeeeeee777777777777777777777777799999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    777777777777777777777777777777777777eeeeeeeeeeeee777777777777777777777777777799999999999999999999999999999999999999999999999999999999999999999999999999999999999
    777777777777777777777777777777777777eeeee77eeeeee777777777777777777777777777777799999999999999999999999999999999999999999999999999999999999999999999999999999999
    777777777777777777777777777777777777eeeee777eeeee777777777777777777777777777777777779999999999999999999999999999999999999999999999999999999999999999999999999999
    777777777777777777777777777777777777eeeee77777777777777777777777777777777777777777777779999999999999999999999999999999999999999999999999999999999999999999999999
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777999999999999999999999999999999999999999999999999999999999999999999999
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777799999999999999999999999999999999999999999999999999999999999777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777779999999999999999999999999999999999999999777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777779999999999999999999999999999999977777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777999999999999999999997777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777799999777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777977777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    `)
let joeSprite = sprites.create(img`
    . . . . . . . . . . . . . 
    . . . f f f f f f . . . . 
    . f f f f f f f f f . . . 
    . f f f f f f c f f f . . 
    f f f f c f f f c f f f . 
    f c f f c c f f f c c f f 
    f c c f f f f e f f f f f 
    f f f f f f f e e f f f . 
    f f e e f b f e e f f f . 
    f f e 4 e 1 f 4 4 f f . . 
    . f f f e 4 4 4 4 f . . . 
    . 4 4 4 e e e e f f . . . 
    . e 4 4 e 7 7 7 7 f . . . 
    . f e e f 6 6 6 6 f f . . 
    . f f f f f f f f f f . . 
    . . f f . . . f f f . . . 
    `, SpriteKind.Player)
joeSprite.setPosition(48, 85)
for (let index = 0; index < 20; index++) {
    joeSprite.setImage(img`
        . . . f f f f f . . . . . 
        . f f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f c f f f c f f . . 
        f c f f c c f f f c c f f 
        f c c f f f f e f f f f f 
        f f f f f f f e e f f f . 
        f f e e f b f e e f f . . 
        . f e 4 e 1 f 4 4 f . . . 
        . f f f e 4 4 4 4 f . . . 
        . . f e e e e e f f . . . 
        . . e 4 4 e 7 7 7 f . . . 
        . . e 4 4 e 7 7 7 f . . . 
        . . f e e f 6 6 6 f . . . 
        . . . f f f f f f . . . . 
        . . . . f f f . . . . . . 
        `)
    pause(100)
    joeSprite.setImage(img`
        . . . . . . . . . . . . . 
        . . . f f f f f f . . . . 
        . f f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f c f f f c f f f . 
        f c f f c c f f f c c f f 
        f c c f f f f e f f f f f 
        f f f f f f f e e f f f . 
        f f e e f b f e e f f . . 
        . f e 4 e 1 f 4 4 f f . . 
        . f f f e e 4 4 4 f . . . 
        . . f e 4 4 e e f f . . . 
        . . f e 4 4 e 7 7 f . . . 
        . f f f e e f 6 6 f f . . 
        . f f f f f f f f f f . . 
        . . f f . . . f f f . . . 
        `)
    pause(100)
    joeSprite.setImage(img`
        . . . . . . . . . . . . . 
        . . . f f f f f f . . . . 
        . f f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f c f f f c f f f . 
        f c f f c c f f f c c f f 
        f c c f f f f e f f f f f 
        f f f f f f f e e f f f . 
        f f e e f b f e e f f f . 
        f f e 4 e 1 f 4 4 f f . . 
        . f f f e 4 4 4 4 f . . . 
        . 4 4 4 e e e e f f . . . 
        . e 4 4 e 7 7 7 7 f . . . 
        . f e e f 6 6 6 6 f f . . 
        . f f f f f f f f f f . . 
        . . f f . . . f f f . . . 
        `)
    pause(100)
    joeSprite.setImage(img`
        . . . . . . . . . . . . . 
        . . . f f f f f f . . . . 
        . f f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f c f f f c f f f . 
        f c f f c c f f f c c f f 
        f c c f f f f e f f f f f 
        f f f f f f f e e f f f . 
        f f e e f b f e e f f . . 
        . f e 4 e 1 f 4 4 f f . . 
        . f f f e e 4 4 4 f . . . 
        . . f e 4 4 e e f f . . . 
        . . f e 4 4 e 7 7 f . . . 
        . f f f e e f 6 6 f f . . 
        . f f f f f f f f f f . . 
        . . f f . . . f f f . . . 
        `)
    pause(500)
}
joeSprite.say("Bri? Are you here?", 2000)
pause(2000)
let briSprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . f 2 f e e e e f f . . . 
    . . . f 2 2 2 f e e e e f f . . 
    . . . f e e e e f f e e e f . . 
    . . f e 2 2 2 2 e e f f f f . . 
    . . f 2 e f f f f 2 2 2 e f . . 
    . . f f f e e e f f f f f f f . 
    . . f e e 4 4 f b e 4 4 e f f . 
    . . . f e d d f 1 4 d 4 e e f . 
    . . . . f d d d e e e e e f . . 
    . . . . f e 4 e d d 4 f . . . . 
    . . . . f 2 2 e d d e f . . . . 
    . . . f f 5 5 f e e f f f . . . 
    . . . f f f f f f f f f f . . . 
    . . . . f f f . . . f f . . . . 
    `, SpriteKind.Player)
briSprite.setPosition(74, 86)
for (let index = 0; index < 20; index++) {
    briSprite.setImage(img`
        . . . . . f f f f f f . . . . . 
        . . . . f 2 f e e e e f f . . . 
        . . . f 2 2 2 f e e e e f f . . 
        . . . f e e e e f f e e e f . . 
        . . f e 2 2 2 2 e e f f f f . . 
        . . f 2 e f f f f 2 2 2 e f . . 
        . . f f f e e e f f f f f f f . 
        . . f e e 4 4 f b e 4 4 e f f . 
        . . f f e d d f 1 4 d 4 e e f . 
        . f d d f d d d d 4 e e e f . . 
        . f b b f e e e 4 e e f f . . . 
        . f b b e d d 4 2 2 2 f . . . . 
        . . f b e d d e 2 2 2 e . . . . 
        . . . f f e e f 4 4 4 f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . . f f f . . . . . . 
        `)
    pause(100)
    briSprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f 2 f e e e e f f . . . 
        . . . f 2 2 2 f e e e e f f . . 
        . . . f e e e e f f e e e f . . 
        . . f e 2 2 2 2 e e f f f f . . 
        . . f 2 e f f f f 2 2 2 e f . . 
        . . f f f e e e f f f f f f f . 
        . . f e e 4 4 f b e 4 4 e f f . 
        . . . f e d d f 1 4 d 4 e e f . 
        . . . . f d d d e e e e e f . . 
        . . . . f e 4 e d d 4 f . . . . 
        . . . . f 2 2 e d d e f . . . . 
        . . . f f 5 5 f e e f f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . f f f . . . f f . . . . 
        `)
    pause(100)
    briSprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f 2 f e e e e f f . . . 
        . . . f 2 2 2 f e e e e f f . . 
        . . . f e e e e f f e e e f . . 
        . . f e 2 2 2 2 e e f f f f . . 
        . . f 2 e f f f f 2 2 2 e f . . 
        . . f f f e e e f f f f f f f . 
        . . f e e 4 4 f b e 4 4 e f f . 
        . . f f e d d f 1 4 d 4 e e f . 
        . f d d f d d d d 4 e e e f . . 
        . f b b f e e e 4 e e f . . . . 
        . f b b e d d 4 2 2 2 f . . . . 
        . . f b e d d e 4 4 4 f f . . . 
        . . . f f e e f f f f f f . . . 
        . . . . f f f . . . f f . . . . 
        `)
    pause(100)
    briSprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f 2 f e e e e f f . . . 
        . . . f 2 2 2 f e e e e f f . . 
        . . . f e e e e f f e e e f . . 
        . . f e 2 2 2 2 e e f f f f . . 
        . . f 2 e f f f f 2 2 2 e f . . 
        . . f f f e e e f f f f f f f . 
        . . f e e 4 4 f b e 4 4 e f f . 
        . . . f e d d f 1 4 d 4 e e f . 
        . . . . f d d d e e e e e f . . 
        . . . . f e 4 e d d 4 f . . . . 
        . . . . f 2 2 e d d e f . . . . 
        . . . f f 5 5 f e e f f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . f f f . . . f f . . . . 
        `)
    pause(500)
}
briSprite.say("Hi, Joe!. It's been a while.", 2000)
pause(2000)
joeSprite.say("I love the weather.", 2000)
pause(2000)
briSprite.say("Yeah, it's really nice out.", 2000)
pause(2000)
joeSprite.say("It's fall now.  Look at those red leaves.", 4000)
pause(6000)
briSprite.say("Wait a minute.  The Joe I know hates fall.", 4000)
pause(5000)
joeSprite.say("(She's onto me!)", 4000)
pause(5000)
briSprite.say("You're not Joe!  But then, who is?", 6000)
pause(7000)
joeSprite.say("So what you're asking is...who's Joe?  Hehe...", 7000)
pause(8000)
briSprite.say("NO! THE DAD JOKE DEMON IS BACK!", 5000)
pause(5000)
let demonSprite = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........fffff.........
    ........ff1111bff.......
    .......fb1111111bf......
    .......f111111111f......
    ......fd1111111ffff.....
    ......fd111dd1c111bf....
    ......fb11fcdf1b1bff....
    ......f11111bfbfbff.....
    ......f1b1bdfcffff......
    ......fbfbfcfcccf.......
    ......ffffffffff........
    .........ffffff.........
    .........ffffff.........
    .........fffffff..f.....
    ..........fffffffff.....
    ...........fffffff......
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Player)
joeSprite.destroy(effects.warmRadial, 500)
for (let index = 0; index < 10; index++) {
    demonSprite.setImage(img`
        ........................
        ........................
        ........................
        ........................
        ..........fffff.........
        ........ff1111bff.......
        .......fb1111111bf......
        .......f111111111f......
        ......fd1111111ffff.....
        ......fd111dd1c111bf....
        ......fb11fcdf1b1bff....
        ......f11111bfbfbff.....
        ......f1b1bdfcffff......
        ......fbfbfcfcccf.......
        ......ffffffffff........
        .........ffffff.........
        .........ffffff.........
        .........fffffff..f.....
        ..........fffffffff.....
        ...........fffffff......
        ........................
        ........................
        ........................
        ........................
        `)
    pause(100)
    demonSprite.setImage(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f1111111df.......
        ......fd1111111ddf......
        ......fd111111dddf......
        ......fd111ddddddf......
        ......fd1dfbddddbf......
        ......fbddfcdbbbcf......
        .......f11111bbcf.......
        .......f1b1fffff........
        .......fbfc111bf........
        ........ff1b1bff........
        .........fbfbfff.f......
        ..........ffffffff......
        ............fffff.......
        ........................
        ........................
        ........................
        ........................
        `)
    pause(100)
    demonSprite.setImage(img`
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f1111111dbf......
        ......fd1111111ddf......
        ......fd111111dddf......
        ......fd111ddddddf......
        ......fd111ddddddf......
        ......fd1dddddddbf......
        ......fd1dfbddbbff......
        ......fbddfcdbbcf.......
        .....ffffccddbfff.......
        ....fcb1bbbfcffff.......
        ....f1b1dcffffffff......
        ....fdfdf..ffffffffff...
        .....f.f.....ffffff.....
        ........................
        ........................
        ........................
        ........................
        ........................
        `)
    pause(100)
    demonSprite.setImage(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f1111111df.......
        ......fd1111111ddf......
        ......fd111111dddf......
        ......fd111ddddddf......
        ......fd1dfbddddbf......
        ......fbddfcdbbbcf......
        .......f11111bbcf.......
        .......f1b1fffff........
        .......fbfc111bf........
        ........ff1b1bff........
        .........fbfbfff.f......
        ..........ffffffff......
        ............fffff.......
        ........................
        ........................
        ........................
        ........................
        `)
    pause(500)
}
demonSprite.say("J O E  M A M A", 500)
pause(500)
for (let index = 0; index < 4; index++) {
    demonBlasts = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . c c c c c c c c c . . . 
        . . . c 7 7 7 7 7 7 7 7 c c . . 
        . . . . c c 7 7 7 7 7 7 7 c . . 
        . . . . . c c c 7 7 7 7 7 c . . 
        . . . . . . . c c c c 7 7 c . . 
        . . . . . . . . . . c c c c . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, 74, -50)
}
briSprite.destroy(effects.fire, 5000)
briSprite.say("AAAAAAAAAAUUUGGHH", 2000)
pause(2000)
demonSprite.say("She used to be a friend...", 3000)
pause(3500)
demonSprite.say("The conquest continues, then...", 6000)
