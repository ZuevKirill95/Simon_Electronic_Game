import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { resetSequence, addComputerStep, displaySequence } from '../actions/sequenceAction'

export const ResetButton = (props) => {

    const onBtnClick = () => {
        props.resetSequence()
        props.addComputerStep()
        props.displaySequence()
    }

    return (
        <button
            className="start-circle"
            onClick={onBtnClick}>
        </button>
    )
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        resetSequence: resetSequence,
        addComputerStep: addComputerStep,
        displaySequence: displaySequence,
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(ResetButton)