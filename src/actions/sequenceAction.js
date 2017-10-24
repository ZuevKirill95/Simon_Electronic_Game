
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

    const chain = async () => {
        for (let i = 0; i < seq.length; ++i) {
            await dispatch(buttonBlink(seq[i], i))
        }
    }

    chain()
}

export const buttonBlink = (button, index) => async (dispatch, getState) => {

    await setTimeout(() => {
        console.log('button click')
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

        const blink = async () => {
            await dispatch({ type: 'BUTTON_BLINK', payload: button })
            await dispatch(resetBlink())
            await (++index === length && dispatch(finishBlink()))
        }
        blink();
    }, 1000)
}


export const resetBlink = () => async (dispatch) => {
    await setTimeout(() => {
        console.log('button reset')
        dispatch({ type: 'RESET_BLINK' })
    }, 700)
}

export const finishBlink = () => (dispatch) => {
    dispatch({ type: 'FINISH_BLINK' })
    console.log('finishBlink')
}
