const initialState = {
    playerSequence: [],
    computerSequence: [],
    isEqualSequense: null,
    isFinish: null
}

export default function sequenceState(state = initialState, action) {

    switch (action.type) {
        case 'ADD_SEQUENCE_STEP':
            return {
                ...state,
                playerSequence: state.playerSequence.concat(action.payload)
            }
        case 'RESET_SEQUENCE':
            return {
                ...state,
                playerSequence: action.payload,
                computerSequence: action.payload
            }
        case 'ADD_COMPUTER_STEP':
            return {
                ...state,
                computerSequence: state.computerSequence.concat(action.payload)
            }
        case 'EQUAL_SEQUENCES':
            return {
                ...state,
                isEqualSequense: action.payload
            }

        case 'NOT_EQUAL_SEQUENCES':
            return {
                ...state,
                isEqualSequense: action.payload
            }
        case 'FINISH_SEQUENCE':
            return {
                ...state,
                isFinish: action.payload
            }
        case 'NOT_FINISH_SEQUENCE':
            return {
                ...state,
                isFinish: action.payload
            }
        default:
            return state;
    }
}