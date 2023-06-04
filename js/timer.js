import Sounds from "./sounds.js"

export default function Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls,
}){

    let timerTimeOut
    let minutes = Number(minutesDisplay.textContent)
    let seconds = Number(secondsDisplay.textContent)

    function updateDisplay(newMinutes, newSeconds){
        newMinutes = newMinutes === undefined ? minutes : newMinutes
        newSeconds = newSeconds === undefined ? seconds : newSeconds
        minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
        secondsDisplay.textContent = String(newSeconds).padStart(2, "0")
    }
    
    function reset(){
        updateDisplay(minutes, seconds)
        clearTimeout(timerTimeOut)
    }
    
    function countdown(){
        timerTimeOut = setTimeout(function () {
            let seconds = Number(secondsDisplay.textContent)
            let minutes = Number(minutesDisplay.textContent)
            let isFinished = minutes <= 0 && seconds <= 0
    
            updateDisplay(minutes, 0)
            
            if (isFinished) {
                resetControls()
                updateDisplay()
                Sounds().timeEnd()
                return
            }

            if( seconds <= 0 ){
                seconds = 60
                --minutes
            }
        
            updateDisplay(minutes, String(seconds - 1))
    
            countdown()
        }, 1000)
    }

    function updateMinutesAndSecons (newMinutes, newSeconds){
        minutes = newMinutes
        seconds = newSeconds
    }

    function hold(){
        clearTimeout(timerTimeOut)
    }

    return {
        updateDisplay,
        reset,
        countdown,
        updateMinutesAndSecons,
        hold
    }

}
