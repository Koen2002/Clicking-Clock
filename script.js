setInterval(setKlok, 1000)

const uurWijzer = document.querySelector('[data-uur-wijzer]')
const minuutWijzer = document.querySelector('[data-minuut-wijzer]')
const secondeWijzer = document.querySelector('[data-seconde-wijzer]')

function setKlok() {
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
    setRotation(secondeWijzer, secondsRatio)
    setRotation(minuutWijzer, minutesRatio)
    setRotation(uurWijzer, hoursRatio)
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setKlok()