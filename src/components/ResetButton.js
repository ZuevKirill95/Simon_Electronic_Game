import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { resetSequence }  from '../actions/sequenceAction'

export class ResetButton extends PureComponent {
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
        sequenceAction: bindActionCreators( { resetSequence } , dispatch),
    }
}

export default connect(null, mapDispatchToProps)(ResetButton)