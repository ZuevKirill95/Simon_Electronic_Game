import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { resetSequence, addComputerStep, displaySequence } from '../actions/sequenceAction'

export const ResetButton = (props) => {
    const { finishBlink, resetSequence, addComputerStep, displaySequence } = props

    const onBtnClick = () => {
            resetSequence()
            addComputerStep()
            displaySequence()
    }

    return (
        <button
            className="start-circle"
            disabled={finishBlink !== null && !finishBlink}
            onClick={onBtnClick}>
        </button>
    )
}

function mapStateToProps(state) {
    return {
        finishBlink: state.sequenceState.finishBlink,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        resetSequence: resetSequence,
        addComputerStep: addComputerStep,
        displaySequence: displaySequence,
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ResetButton)