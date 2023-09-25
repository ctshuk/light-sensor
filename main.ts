let light2 = 0
basic.forever(function () {
    basic.showNumber(light2)
    light2 = Math.round(pins.map(
    input.lightLevel(),
    255,
    0,
    0,
    100
    ))
    edubitRgbBit.setBrightness(light2)
    edubitRgbBit.showColor(0xff0000)
})
