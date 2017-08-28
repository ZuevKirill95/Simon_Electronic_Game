import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { resetSequence, addComputerStep } from '../actions/sequenceAction'

export class ResetButton extends PureComponent {

    addComputerStepInterval = () => {
        const { addComputerStep, lengthSequence } = this.props;
        let i = 1;
        let timerId = setInterval(() => {
            addComputerStep()
            if (i == lengthSequence) clearInterval(timerId);
            i++;
        }, 700);
    }

    onBtnClick = (e) => {
        e.preventDefault();
        this.props.resetSequence()
        this.addComputerStepInterval();
    }

    render() {
        return (
            <button
                className="start-circle"
                onClick={this.onBtnClick}>
            </button>
        )
    }
}

function mapStateToProps(state) {
    return {
        lengthSequence: state.sequenceState.lengthSequence,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        resetSequence: resetSequence,
        addComputerStep: addComputerStep,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ResetButton)