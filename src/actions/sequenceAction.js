export const addPlayerStep = (color) => (dispatch, getState) => {
    const { finishBlink } = getState().sequenceState;
    if (!finishBlink)
        color = [];
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



