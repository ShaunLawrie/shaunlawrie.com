let template = "hsl(_HUE_, _SATURATION_, _LIGHTNESS_)"
let s = getComputedStyle(document.documentElement).getPropertyValue('--theme-base-saturation')
let l = getComputedStyle(document.documentElement).getPropertyValue('--theme-base-lightness')
let r = parseInt(Math.random() * 360)
function colorRotate() {
    r = (r + 5) % 360
    document.documentElement.style.setProperty('--theme-tint-color',
        "hsl(_HUE_, _SATURATION_, _LIGHTNESS_)"
            .replace("_HUE_", r)
            .replace("_SATURATION_", s)
            .replace("_LIGHTNESS_", l)
    )
    document.documentElement.style.setProperty('--theme-tint-color-fade',
        "hsla(_HUE_, _SATURATION_, _LIGHTNESS_, 0.2)"
            .replace("_HUE_", r)
            .replace("_SATURATION_", s)
            .replace("_LIGHTNESS_", l)
    )
    document.documentElement.style.setProperty('--theme-mono-hue-rotation', `${(r + 280) % 360}deg`)
}

function disco() {
    console.log("party time")
    setInterval(colorRotate, 20)
}