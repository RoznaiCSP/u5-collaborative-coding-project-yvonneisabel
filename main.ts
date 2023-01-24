scene.setBackgroundColor(3)
game.splash("How to make a pizza!")
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . d d d d . . . . . . 
    . . . . d d d d d d d d . . . . 
    . . . d d d d d d d d d d . . . 
    . . . d d d d d d d d d d . . . 
    . . d d d d d d d d d d d d . . 
    . . d d d d d d d d d d d d . . 
    . . d d d d d d d d d d d d . . 
    . . d d d d d d d d d d d d . . 
    . . . d d d d d d d d d d . . . 
    . . . . d d d d d d d d . . . . 
    . . . . . d d d d d d . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
