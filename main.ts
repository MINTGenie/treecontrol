input.onButtonPressed(Button.A, function () {
    radio.sendValue("a", 0)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendValue("c", 0)
})
input.onButtonPressed(Button.B, function () {
    radio.sendValue("b", 0)
})
radio.setGroup(1)
basic.forever(function () {
    radio.sendValue("x", input.acceleration(Dimension.X))
    radio.sendValue("y", input.acceleration(Dimension.Y))
    radio.sendValue("z", input.acceleration(Dimension.Z))
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.SmallSquare)
})
