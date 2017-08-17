const initialState = {
    playerSequence: [],
    computerSequence:['red', 'green', 'red'],
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
                playerSequence: action.payload
            }
        default:
            return state;
    }
}