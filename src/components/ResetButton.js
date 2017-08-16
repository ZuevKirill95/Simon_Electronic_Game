import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as sequenceAction from '../actions/sequenceAction'

export class ResetButton extends React.PureComponent {
    onBtnClick = (e) => {
        e.preventDefault();
        this.props.sequenceAction.resetSequence()
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
        sequenceAction: bindActionCreators(sequenceAction, dispatch),
    }
}

export default connect(null, mapDispatchToProps)(ResetButton)