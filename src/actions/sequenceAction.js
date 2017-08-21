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

export function equalSequence() {

    return {
        type: 'EQUAL_SEQUENCES',
        payload: true,
    }
}
export function notEqualSequence() {

    return {
        type: 'NOT_EQUAL_SEQUENCES',
        payload: false,
    }
}

export function finishSequence() {

    return {
        type: 'FINISH_SEQUENCE',
        payload: true,
    }
}

export function notFinishSequence() {

    return {
        type: 'NOT_FINISH_SEQUENCE',
        payload: false,
    }
}