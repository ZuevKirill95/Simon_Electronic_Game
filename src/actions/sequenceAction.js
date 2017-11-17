
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

export const continueOrRestart = () => async (dispatch, getState) => {
    const { isEqualSequense, isFinish, computerSequence } = getState().sequenceState;
    if (isFinish && isEqualSequense || computerSequence.length === 0) {
        await wait(1000)
        dispatch(addComputerStep())
        dispatch(displaySequence())
    }
    else if (!isEqualSequense) {
        dispatch(resetSequence());
        await wait(1000)
        dispatch(addComputerStep())
        dispatch(displaySequence())
    }
}

const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export const displaySequence = () => (dispatch, getState) => {
    const seq = [...getState().sequenceState.computerSequence]
    const chain = async (seq) => {
        for (let i in seq) {
            await wait(500);
            dispatch(buttonBlink(seq[i], i))
            sound(seq[i])
            await wait(500);
            dispatch(resetBlink());
            (++i === seq.length && dispatch(finishBlink()))
        }
    }
    chain(seq)
}

const buttonBlink = (button) => {
    return { type: 'BUTTON_BLINK', payload: button }
}

const sound = (button) => {
    const urlSound = {
        redButton: require('../assets/sounds/simonSound1.mp3'),
        greenButton: require('../assets/sounds/simonSound2.mp3'),
        yellowButton: require('../assets/sounds/simonSound3.mp3'),
        blueButton: require('../assets/sounds/simonSound4.mp3'),
    }
    const buttonSound = new Audio
    buttonSound.src = urlSound[button]
    buttonSound.play()
}

export const resetBlink = () => {
    return { type: 'RESET_BLINK' }
}

const finishBlink = () => {
    return { type: 'FINISH_BLINK' }
}

export const switchCheatMode = () => {
    return { type: 'SWITCH_CHEAT_MODE' }
}
