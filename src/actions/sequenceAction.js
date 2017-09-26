
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
    const seq = [...getState().sequenceState.computerSequence]
    const chain = Promise.resolve()

    seq.map(
        (step, index) => chain.then(() => dispatch(buttonBlink(step, index)))
    )

    chain
}

export const buttonBlink = (button, index) => (dispatch, getState) => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const length = getState().sequenceState.computerSequence.length
            if (index > length - 1) reject();
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
                .then(() => (++index === length && dispatch(finishBlink())))


        }, 1000 * index)

    })
}

export const resetBlink = () => (dispatch) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            dispatch({ type: 'RESET_BLINK' })
            resolve()
        }, 700

        )
    })
}

export const finishBlink = () => (dispatch) => {
    return new Promise((resolve, reject) => {
        dispatch({ type: 'FINISH_BLINK' })
        resolve()
    })
}
