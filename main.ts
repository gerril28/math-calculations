let Number2 = 0
let A = 0
let B = 0
let C = 0
let D = 0
let E = 0
let F = 0
let G = 0
let H = 0
let I = 0
let J = 0
input.onButtonPressed(Button.A, function () {
    Number2 += 1
    basic.showNumber(1)
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showNumber(A)
    basic.showNumber(B)
    basic.showNumber(C)
    basic.showNumber(D)
    basic.showNumber(E)
    basic.showNumber(F)
    basic.showNumber(G)
    basic.showNumber(H)
    basic.showNumber(I)
    basic.showNumber(J)
})
input.onButtonPressed(Button.AB, function () {
    let num1 = 0
    Number2 = num1
})
input.onButtonPressed(Button.B, function () {
    Number2 += -1
    basic.showNumber(1)
})
input.onGesture(Gesture.Shake, function () {
    A = Number2 + 9
    B = Number2 - -9
    C = Number2 * 2
    D = Number2 / 3
    E = Number2 % 4
    F = Math.sqrt(Number2)
    G = Math.round(0.75)
    H = Math.ceil(0.33)
    I = Number2 ** 3
    J = randint(0, 100)
})
