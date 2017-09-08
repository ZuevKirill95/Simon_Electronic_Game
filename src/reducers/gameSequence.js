const initialState = {
    playerSequence: [],
    computerSequence: [],
    isEqualSequense: null,
    isFinish: null,
    lengthSequence: 5,
    lighten: null,
    finishBlink: null,
}

export default function sequenceState(state = initialState, action) {

    switch (action.type) {
        case 'ADD_PLAYER_STEP': {
            const { playerSequence, computerSequence } = state;
            return {
                ...state,
                playerSequence: playerSequence.concat(action.payload),
                isFinish: (computerSequence.length === playerSequence.length + 1) ? true : false,
                isEqualSequense: (computerSequence[playerSequence.length] === action.payload) ? true : false,
            }
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
                computerSequence: state.computerSequence.concat(action.payload),
                playerSequence: [],
                isFinish: false,
            }

        case 'BUTTON_BLINK':
            return {
                ...state,
                lighten: action.payload,
                finishBlink: false,
            }

        case 'RESET_BLINK':
            return {
                ...state,
                lighten: null,
            }
        case 'FINISH_BLINK':
            return {
                ...state,
                finishBlink: true,
            }
        default:
            return state;
    }
}