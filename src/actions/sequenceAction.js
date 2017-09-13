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
    const { computerSequence } = getState().sequenceState;
    computerSequence.map((button, index) => {
        setTimeout(() => dispatch(buttonBlink(button, index)), index * 1000)
    })
}

export const buttonBlink = (button, index) => (dispatch, getState) => {
    const { computerSequence } = getState().sequenceState;
    const urlSound = {
        redButton: require('../assets/sounds/simonSound1.mp3'),
        greenButton: require('../assets/sounds/simonSound2.mp3'),
        yellowButton: require('../assets/sounds/simonSound3.mp3'),
        blueButton: require('../assets/sounds/simonSound4.mp3'),
    }
    const buttonSound = new Audio;
    buttonSound.src = urlSound[button];
    buttonSound.play();
    setTimeout(() => dispatch(resetBlink()), 700)
    if (index === computerSequence.length - 1)
        setTimeout(() => dispatch(finishBlink()), 600)
    dispatch({
        type: 'BUTTON_BLINK',
        payload: button
    })
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



