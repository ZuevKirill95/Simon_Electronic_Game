export function addPlayerStep(playerSequence, computerSequence, id, isFinish, lengthSequence) {

    let isEqualSequense = null;
    if (isFinish || computerSequence.length !== lengthSequence)
        id = []
    else if (checkFinish(playerSequence, computerSequence)) {
        isFinish = true;
        isEqualSequense = checkEqualSequence(playerSequence, computerSequence, id);
    }
    return {
        type: 'ADD_PLAYER_STEP',
        payload: {
            playerSequence: id,
            isFinish: isFinish,
            isEqualSequense: isEqualSequense
        }
    }
}

function checkFinish(playerSequence, computerSequence) {
    return (playerSequence.length === computerSequence.length - 1)
}
function checkEqualSequence(playerSequence, computerSequence, lastColor) {
    for (let i = 0; i < playerSequence.length; i++) {
        if (playerSequence[i] !== computerSequence[i]) {
            return false;
        }
    }
    if (lastColor !== computerSequence[computerSequence.length - 1])
        return false;
    return true;
}

export function resetSequence() {
    return {
        type: 'RESET_SEQUENCE',
        payload: {
            playerSequence: [],
            computerSequence: [],
            isFinish: false,
            isEqualSequense: false,
        }
    }
}

export function addComputerStep() {

    const arrColor = ['red', 'green', 'yellow', 'blue']
    const colorId = Math.floor(Math.random() * 4);
    console.log(arrColor[colorId])
    return {
        type: 'ADD_COMPUTER_STEP',
        payload: arrColor[colorId]
    }
}