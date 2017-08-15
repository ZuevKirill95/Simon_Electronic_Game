const initialState = {
    gameSequence: []
}

export default function sequenceState(state = initialState, action) {

    switch (action.type) {
        case 'ADD_DISPLAY_PRESSED_BUTTON':
            return { ...state,
                gameSequence: state.gameSequence.concat(action.payload)}
        default:
            return state;
    }
}