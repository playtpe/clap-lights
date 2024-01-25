input.onSound(DetectedSound.Loud, function () {
    if (light2) {
        light2 = 0
    } else {
        light2 = 1
    }
})
let light2 = 0
light2 = 0
basic.forever(function () {
    if (light2) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . . . . .
            . # . . .
            # . . . .
            `)
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else {
        basic.clearScreen()
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
