/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Maxim Malik
 * Created on: Oct 2025
 * This program makes a traffic light using a neopixel strip
*/

let neopixelStrip: neopixel.Strip = null

// cleanup
basic.clearScreen()
neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.show()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
    // Button A Pressed
    basic.showIcon(IconNames.Happy)
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
    basic.pause(3000)
    neopixelStrip.show()
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
    basic.pause(2000)
    neopixelStrip.show()
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    basic.pause(1000)
    neopixelStrip.show()
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
    basic.pause(1000)
    neopixelStrip.show()
})
