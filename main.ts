basic.forever(function () {
    for (let i = 0; i <= 4; i++) {
        led.plot(i, 2)
        basic.pause(200)
    }
    for (let j = 0; j <= 4; j++) {
        led.plot(2, j)
        basic.pause(200)
    }
    basic.clearScreen()
})
