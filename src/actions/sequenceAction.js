
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
    const wait = () => new Promise(resolve => setTimeout(resolve, 1000))
    const chain = async (seq) => {
        for (let i in seq) {
            await wait();
            await dispatch(buttonBlink(seq[i], i))
        }
    }
    chain(seq)
}

export const buttonBlink = (button, index) => (dispatch, getState) => {
    const length = getState().sequenceState.computerSequence.length
    if (index >= length)
        return

    const urlSound = {
        redButton: require('../assets/sounds/simonSound1.mp3'),
        greenButton: require('../assets/sounds/simonSound2.mp3'),
        yellowButton: require('../assets/sounds/simonSound3.mp3'),
        blueButton: require('../assets/sounds/simonSound4.mp3'),
    }
    const buttonSound = new Audio
    buttonSound.src = urlSound[button]
    buttonSound.play()

    const waitReset = () => new Promise(resolve => setTimeout(resolve, 700))

    const blink = async () => {
        await dispatch({ type: 'BUTTON_BLINK', payload: button })
        await waitReset();
        await dispatch(resetBlink())
        await (++index === length && dispatch(finishBlink()))
    }
    blink();
}

export const resetBlink = () => (dispatch) => {
    dispatch({ type: 'RESET_BLINK' })
}

export const finishBlink = () => (dispatch) => {
    dispatch({ type: 'FINISH_BLINK' })
}
