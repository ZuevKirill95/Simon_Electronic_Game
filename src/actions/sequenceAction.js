
export const addPlayerStep = (color) => (dispatch, getState) => {
    const { finishBlink, isEqualSequense } = getState().sequenceState;
    if (finishBlink && isEqualSequense)
        dispatch({
            type: 'ADD_PLAYER_STEP',
            payload: color,
        })
}

export const resetSequence = () => {
    return {
        type: 'RESET_SEQUENCE',
    }
}


export const addComputerStep = () => (dispatch) => {

    const arrColor = ['redButton', 'greenButton', 'yellowButton', 'blueButton']
    const colorId = Math.floor(Math.random() * 4);
    dispatch({
        type: 'ADD_COMPUTER_STEP',
        payload: arrColor[colorId],
    })
}

export const displaySequence = () => (dispatch, getState) => {
    const seq = [...getState().sequenceState.computerSequence] //можно взять просто computerSequence, но я люблю иммутабельность
    const chain = Promise.resolve() //делаем пустой промис

    seq.map(
        (step, index) => chain.then(() => dispatch(buttonBlink(step, index))) //добавляем к нему в цепочку миллион наших экшенов, которые будут выполняться асинхронно
    )

    chain // пора бы нашей цепочке выполниться
}

export const buttonBlink = (button, index) => (dispatch, getState) => {

    const length = getState().sequenceState.computerSequence.length
    const urlSound = {
        redButton: require('../assets/sounds/simonSound1.mp3'),
        greenButton: require('../assets/sounds/simonSound2.mp3'),
        yellowButton: require('../assets/sounds/simonSound3.mp3'),
        blueButton: require('../assets/sounds/simonSound4.mp3'),
    }
    const buttonSound = new Audio
    buttonSound.src = urlSound[button]
    buttonSound.play()

    Promise.resolve()
    .then(() => dispatch({ type: 'BUTTON_BLINK', payload: button }))
    .then(() => dispatch(resetBlink()))
    .then(() => ++index === length && dispatch(finishBlink()))

}

export const resetBlink = () => {
    return {
        type: 'RESET_BLINK'
    }
}

export const finishBlink = () => {
    return {
        type: 'FINISH_BLINK'
    }
}
