input.onButtonPressed(Button.A, function () {
    second = 0
})
let second = 0
second = 0
basic.forever(function () {
    if (second <= 9) {
        second += 1
        basic.showNumber(second)
    }
    if (second > 9) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    basic.pause(1000)
})
