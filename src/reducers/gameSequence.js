const initialState = {
    playerSequence: [],
    computerSequence: [],
    isEqualSequense: true,
    isFinish: null,
    lengthSequence: 5,
    lighten: null,
    finishBlink: null,
    pressedButton: null,
    changeSound: true,
}

export default function sequenceState(state = initialState, action) {

    switch (action.type) {
        case 'ADD_PLAYER_STEP': {
            const { playerSequence, computerSequence } = state;
            console.log(action.payload)
            return {
                ...state,
                playerSequence: playerSequence.concat(action.payload),
                isFinish: (computerSequence.length === playerSequence.length + 1) ? true : false,
                isEqualSequense: (computerSequence[playerSequence.length] === action.payload) ? true : false,
                pressedButton: action.payload, 
                changeSound: !state.changeSound                
            }
        }

        case 'RESET_SEQUENCE':
            return {
                ...state,
                playerSequence: [],
                computerSequence: [],
                isFinish: false,
                isEqualSequense: true,
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
                pressedButton: action.payload,                                
                finishBlink: false,
                changeSound: !state.changeSound
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