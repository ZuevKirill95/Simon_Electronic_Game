export const addPlayerStep = (color) => (dispatch, getState) => {
    const { playerSequence, computerSequence, isFinish, lengthSequence } = getState().sequenceState
    let isEqualSequense = null;
    let finish = isFinish;
    if (isFinish || computerSequence.length !== lengthSequence) {
        color = []
    }
    else if (color === computerSequence[playerSequence.length]) {
        if (playerSequence.length === computerSequence.length - 1) {
            finish = true;
            isEqualSequense = true;
        }
    }
    else {
        finish = true;
        isEqualSequense = false;
    }
    dispatch({
        type: 'ADD_PLAYER_STEP',
        payload: {
            playerSequence: color,
            isFinish: finish,
            isEqualSequense: isEqualSequense
        }
    })
}

export const resetSequence = () => {
    return {
        type: 'RESET_SEQUENCE',
    }
}

export const addComputerStepInterval = () => (dispatch, getState) => {
    const { lengthSequence } = getState().sequenceState;
    for (let i = 0; i < lengthSequence; i++)
        setTimeout(() => {
            dispatch(addComputerStep())
        }, i * 1000);
    dispatch({ type: 'ADD_COMPUTER_STEP_INTERVAL' });
}

export const addComputerStep = () => (dispatch) => {
    const arrColor = ['redButton', 'greenButton', 'yellowButton', 'blueButton']
    const colorId = Math.floor(Math.random() * 4);
    setTimeout(() => dispatch(resetBlink()), 700)
    dispatch({
        type: 'ADD_COMPUTER_STEP',
        payload: {
            computerSequence: arrColor[colorId],
            lighten: arrColor[colorId],
        }
    })
}

export const resetBlink = () => {
    return {
        type: 'RESET_BLINK'
    }
}

