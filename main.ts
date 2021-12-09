let pitch = 0
let roll = 0
let x = 2
let y = 2
led.plot(x, y)
basic.pause(1000)
basic.forever(function () {
    led.unplot(x, y)
    roll = input.rotation(Rotation.Roll)
    if (roll < 0) {
        x = x - 1
        if (x < 0) {
            x = 0
        }
    } else if (roll > 0) {
        x = x + 1
        if (x > 4) {
            x = 4
        }
    }
    led.plot(x, y)
    basic.pause(200)
})
basic.forever(function () {
    led.unplot(x, y)
    pitch = input.rotation(Rotation.Pitch)
    if (pitch < 0) {
        y = y - 1
        if (y < 0) {
            y = 0
        }
    } else if (pitch > 0) {
        y = y + 1
        if (y > 4) {
            y = 4
        }
    }
    led.plot(x, y)
    basic.pause(200)
})
