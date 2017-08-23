import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { resetSequence, addComputerStep, finishSequence, equalSequence } from '../actions/sequenceAction'

export class ResetButton extends PureComponent {

    addComputerStepInterval = () => {
        const arrColor = ['red', 'green', 'yellow', 'blue']
        const { addComputerStep, lengthSequence } = this.props;
        let i = 1;
        let timerId = setInterval(() => {
            const colorId = Math.floor(Math.random() * 4);
            addComputerStep(arrColor[colorId])
            if (i == lengthSequence) clearInterval(timerId);
            i++;
        }, 700);
    }

    onBtnClick = (e) => {
        e.preventDefault();
        this.props.resetSequence()
        this.props.finishSequence(false)
        this.props.equalSequence(false)
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
        finishSequence: finishSequence,
        equalSequence: equalSequence,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ResetButton)