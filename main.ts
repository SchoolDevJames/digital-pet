function sad () {
    basic.showIcon(IconNames.Sad)
}
function awake () {
    basic.showLeds(`
        . . # . .
        # # # # #
        . . # . .
        . # . # .
        . # . # .
        `)
}
input.onButtonPressed(Button.A, function () {
    eat()
})
function sleep () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        # # # # #
        `)
}
input.onGesture(Gesture.ScreenDown, function () {
    sleep()
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("" + (food))
})
input.onButtonPressed(Button.B, function () {
    walkies()
})
input.onGesture(Gesture.Shake, function () {
    awake()
})
function eat () {
    food += 1
    basic.showLeds(`
        . # # . .
        # # . . .
        # . . . #
        # # . . .
        . # # . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . # # . .
        # # . . .
        # . . # .
        # # . . .
        . # # . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . # # . .
        # # . . .
        # . # . .
        # # . . .
        . # # . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . # # . .
        # # . . .
        # # . . .
        # # . . .
        . # # . .
        `)
    basic.pause(100)
    awake()
}
function walkies () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . # . .
            # # # # #
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.pause(100)
        basic.showLeds(`
            . . # . .
            # # # # #
            . . # . .
            . # . # .
            . # . # .
            `)
        basic.pause(100)
    }
    food += -1
}
let food = 0
food = 0
awake()
basic.forever(function () {
    if (food < 0) {
        sad()
    }
})
