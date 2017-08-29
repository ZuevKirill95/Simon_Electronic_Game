const initialState = {
    playerSequence: [],
    computerSequence: [],
    isEqualSequense: null,
    isFinish: null,
    lengthSequence: 5,
    RGYBlight: [false, false, false, false],
}

export default function sequenceState(state = initialState, action) {

    switch (action.type) {
        case 'ADD_PLAYER_STEP':
            return {
                ...state,
                playerSequence: state.playerSequence.concat(action.payload.playerSequence),
                isFinish: action.payload.isFinish,
                isEqualSequense: (action.payload.isEqualSequense == null) ? state.isEqualSequense : action.payload.isEqualSequense
            }

        case 'RESET_SEQUENCE':
            return {
                ...state,
                playerSequence: [],
                computerSequence: [],
                isFinish: false,
                isEqualSequense: false,
            }

        case 'ADD_COMPUTER_STEP':
            return {
                ...state,
                computerSequence: state.computerSequence.concat(action.payload.computerSequence),
                RGYBlight: action.payload.RGYBlight,
            }

        case 'ADD_COMPUTER_STEP_INTERVAL':
            return {
                ...state,
            }

        default:
            return state;
    }
}