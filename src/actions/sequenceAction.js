export function addSequenceStep(sequenceStep) {

    return {
        type: 'ADD_SEQUENCE_STEP',
        payload: sequenceStep
    }
}

export function resetSequence() {

    return {
        type: 'RESET_SEQUENCE',
        payload: []
    }
}

export function addComputerStep(sequenceStep) {

    return {
        type: 'ADD_COMPUTER_STEP',
        payload: sequenceStep
    }
}

export function equalSequence(TrueOrFalse) {

    return {
        type: 'EQUAL_SEQUENCES',
        payload: TrueOrFalse,
    }
}

export function checkSequence(playerSequence, computerSequence,lastColor) {
    return {
        type: 'CHECK_SEQUENCE',
        payload:{
            playerSequence:playerSequence,
            computerSequence: computerSequence,
            lastColor: lastColor
        }
        
    }
}

export function finishSequence(TrueOrFalse) {

    return {
        type: 'FINISH_SEQUENCE',
        payload: TrueOrFalse,
    }
}
