export function addPlayerStep(color) {
    return (dispatch, getState) => {
        let isEqualSequense = null;
        let { playerSequence, computerSequence, isFinish, lengthSequence } = getState().sequenceState
        if (isFinish || computerSequence.length !== lengthSequence) {
            color = []
        }
        else if (color === computerSequence[playerSequence.length]) {
            if (checkFinish(playerSequence, computerSequence)) {
                isFinish = true;
                isEqualSequense = true;
            }
        }
        else {
            isFinish = true;
            isEqualSequense = false;
        }
        dispatch({
            type: 'ADD_PLAYER_STEP',
            payload: {
                playerSequence: color,
                isFinish: isFinish,
                isEqualSequense: isEqualSequense
            }
        })
    }
}

function checkFinish(playerSequence, computerSequence) {
    return (playerSequence.length === computerSequence.length - 1)
}

export function resetSequence() {
    return {
        type: 'RESET_SEQUENCE',
    }
}

export const addComputerStepInterval = () => (dispatch, getState) => {
    let { lengthSequence, RGYBlight } = getState().sequenceState
    let i = 1;
    let timerId = setInterval(() => {
        dispatch(addComputerStep(RGYBlight))
        if (i === lengthSequence) clearInterval(timerId);
        i++;
    }, 700);
    dispatch({ type: 'ADD_COMPUTER_STEP_INTERVAL' });
}

export function addComputerStep(RGYBlight) {
    const arrColor = ['redButton', 'greenButton', 'yellowButton', 'blueButton']
    const colorId = Math.floor(Math.random() * 4);
    console.log(colorId)
    for(let i = 0; i<4; i++){
        RGYBlight[i] = false
    }
    RGYBlight[colorId] = true;
    return {
        type: 'ADD_COMPUTER_STEP',
        payload: {
            computerSequence: arrColor[colorId],
            RGYBlight: RGYBlight,
        }
    }
}

