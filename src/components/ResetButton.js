import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { resetSequence, addComputerStep, notFinishSequence,notEqualSequence } from '../actions/sequenceAction'

export class ResetButton extends PureComponent {
    onBtnClick = (e) => {
        e.preventDefault();
        this.props.sequenceAction.resetSequence()
        this.props.sequenceAction.notFinishSequence()
        this.props.sequenceAction.notEqualSequence()
        const arrColor = ['red', 'green', 'yellow', 'blue']
        for (let i = 0; i < 5; i++) {
            const colorId = Math.floor(Math.random() * 4);
            this.props.sequenceAction.addComputerStep(arrColor[colorId])
        }
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
    return {
        sequenceAction: bindActionCreators({ resetSequence, addComputerStep, notFinishSequence,notEqualSequence }, dispatch),
    }
}

export default connect(null, mapDispatchToProps)(ResetButton)