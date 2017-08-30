const initialState = {
    playerSequence: [],
    computerSequence: [],
    isEqualSequense: null,
    isFinish: null,
    lengthSequence: 5,
    lighten: null

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
                lighten: action.payload.lighten,
            }

        case 'RESET_BLINK':
            return {
                ...state,
                lighten: null,
            }
        default:
            return state;
    }
}