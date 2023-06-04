export default function Controls({
    buttonPause,
    buttonPlay,
    buttonSet,
    buttonStop,
    buttonSoundOn,
    buttonSoundOff
}){
    
    function play(){
        buttonPlay.classList.add('hide')
        buttonPause.classList.remove('hide')
        buttonSet.classList.add('hide')
        buttonStop.classList.remove('hide')
    }

    function pause(){
        buttonPlay.classList.remove('hide')
        buttonPause.classList.add('hide')
    }

    function reset(){
        buttonStop.classList.add('hide')
        buttonPlay.classList.remove('hide')
        buttonPause.classList.add('hide')
        buttonSet.classList.remove('hide')
    }

    function getMinutes(){
        let newMinutes = prompt(`Digite os minutos`)
    
        if(!newMinutes){
            return 0
        }

        if(newMinutes > 500){
            alert("Você adicionou um valor inválido")
            newMinutes = prompt(`Digite os minutos novamente (máx até 500 minutos)`)
            return 0
        }

        return newMinutes
    }

    function getSeconds(){
        let newSeconds = prompt(`Digite os segundos (máx até 60 segundos)`)
    
        if(!newSeconds){
            return 0
        }

        if(newSeconds > 60){
            alert("Você adicionou um valor maior que o máximo permitido")
            return 60
        }
    
        return newSeconds
    }
    
    
    function soundOnOff (){
        buttonSoundOn.classList.toggle('hide')
        buttonSoundOff.classList.toggle('hide')
    }

    return{
        reset,
        play,
        pause,
        getMinutes,
        getSeconds,
        soundOnOff
    }
}


