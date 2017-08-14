const initialState = {
    gameSequence: [1,2]
}

export default function sequenceState(state = initialState, action) {

    switch (action.type) {
        case 'ADD_DISPLAY_PRESSED_BUTTON':
            return { ...state, gameSequence:action.payload }
        default:
            return state;
    }
}