export default function(){

    const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
    const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
    const bgAudio = new Audio("./music/One Piece Ambient_ Music mix & ambiance (64 kbps).mp3")

    bgAudio.loop = true

    function pressButton(){
        buttonPressAudio.play()
    }

    function timeEnd(){
        kitchenTimer.play()
    }

    return{
        pressButton,
        timeEnd,
        bgAudio
    }
}
