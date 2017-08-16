export function addSequenceStep(gameSequence) {

    return {
        type: 'ADD_SEQUENCE_STEP',
        payload: gameSequence
    }
}

export function resetSequence() {

    return {
        type: 'RESET_SEQUENCE',
        payload: []
    }
}