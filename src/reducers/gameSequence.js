const initialState = {
    gameSequence: []
}

export default function sequenceState(state = initialState, action) {

    switch (action.type) {
        case 'ADD_SEQUENCE_STEP':
            return {
                ...state,
                gameSequence: state.gameSequence.concat(action.payload)
            }
        case 'RESET_SEQUENCE':
            return {
                ...state,
                gameSequence: action.payload
            }
        default:
            return state;
    }
}