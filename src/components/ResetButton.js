import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { resetSequence, addComputerStep,displaySequence } from '../actions/sequenceAction'

export class ResetButton extends PureComponent {

    onBtnClick = (e) => {
        e.preventDefault();
        this.props.resetSequence()
        this.props.addComputerStep();
        this.props.displaySequence();
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

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        resetSequence: resetSequence,
        addComputerStep: addComputerStep,
        displaySequence: displaySequence,
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(ResetButton)