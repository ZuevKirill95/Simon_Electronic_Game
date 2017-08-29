import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { resetSequence, addComputerStepInterval } from '../actions/sequenceAction'

export class ResetButton extends PureComponent {

    onBtnClick = (e) => {
        e.preventDefault();
        this.props.resetSequence()
        this.props.addComputerStepInterval();
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
        addComputerStepInterval: addComputerStepInterval,
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(ResetButton)