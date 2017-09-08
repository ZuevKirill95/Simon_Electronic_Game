import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { resetSequence, addComputerStep, displaySequence } from '../actions/sequenceAction'
import { bindActionCreators } from 'redux'

export class CheckSequence extends PureComponent {
    componentDidUpdate() {
        const { isEqualSequense, isFinish, addComputerStep, displaySequence } = this.props
        if (isFinish && isEqualSequense) {
            addComputerStep();
            displaySequence();
        }
    }
    render() {
        const { isEqualSequense, isFinish } = this.props
        let statusText = ''
        let classColor = ''   
        if (isFinish) {
            statusText = ((isEqualSequense) ? 'good!' : 'wrong')
            classColor = ((isEqualSequense) ? 'statusTextGood' : 'statusTextWrong')
        }
        return (
            <div className={`statusText ${classColor}`}>
                {statusText}
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        resetSequence: resetSequence,
        addComputerStep: addComputerStep,
        displaySequence: displaySequence,
    }, dispatch);
}

function mapStateToProps(state) {
    return {
        isEqualSequense: state.sequenceState.isEqualSequense,
        isFinish: state.sequenceState.isFinish,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckSequence)