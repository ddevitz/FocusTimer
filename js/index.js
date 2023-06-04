import Controls from "./controls.js"
import {
    buttonPause,
    buttonPlay,
    buttonSet,
    buttonSoundOff,
    buttonSoundOn,
    buttonStop,
    minutesDisplay,
    secondsDisplay
} from "./elements.js"
import Sound from "./sounds.js"
import Timer from "./timer.js"


const controls = Controls({
    buttonPause,
    buttonPlay,
    buttonSet,
    buttonStop,
    buttonSoundOn,
    buttonSoundOff
})

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls: controls.reset
})

const sound = Sound()

buttonPlay.onclick = () => {
    controls.play()
    timer.countdown()
    sound.pressButton()
}

buttonPause.onclick = () => {
    controls.pause()
    timer.hold() 
}

buttonStop.onclick = () => {
    controls.reset()
    timer.reset()
}

buttonSoundOn.onclick = () => {
    controls.soundOnOff()
    sound.bgAudio.pause()
}

buttonSoundOff.onclick = () => {
    controls.soundOnOff()
    sound.bgAudio.play()
}

buttonSet.onclick = () => {
    let newMinutes = controls.getMinutes()
    let newSeconds = controls.getSeconds()

    if(!newMinutes && !newSeconds){
        timer.reset()
        return
    }

    if(newMinutes <= 0 && newSeconds <= 0){
       return alert("Você não adicionou nenhuma unidade de tempo.")
    }

    timer.updateDisplay(newMinutes, newSeconds)
    timer.updateMinutesAndSecons(newMinutes, newSeconds)
}