radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    radio.sendString("DUCK")
})
radio.setGroup(43)
basic.showIcon(IconNames.Heart)
