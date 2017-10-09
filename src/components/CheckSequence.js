import React from 'react'
import { connect } from 'react-redux'
import { resetSequence, addComputerStep, displaySequence } from '../actions/sequenceAction'
import { bindActionCreators } from 'redux'

export const CheckSequence = (props) => {

    const { isEqualSequense, isFinish, addComputerStep, displaySequence } = props

    const addNextCopmuterStep = () => {
        setTimeout(() => {
            addComputerStep()
            displaySequence()
        }, 1000)
    }

    let statusText = ''
    let classColor = '';
    (!isEqualSequense) && (statusText = 'wrong') && (classColor = 'statusTextWrong');
    if (isFinish)
        (isEqualSequense) && (statusText = 'good!') && (classColor = 'statusTextGood') && addNextCopmuterStep()
    return (
        <div className={`statusText ${classColor}`}>
            {statusText}
        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        resetSequence: resetSequence,
        addComputerStep: addComputerStep,
        displaySequence: displaySequence,
    }, dispatch)
}

function mapStateToProps(state) {
    return {
        isEqualSequense: state.sequenceState.isEqualSequense,
        isFinish: state.sequenceState.isFinish,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckSequence)