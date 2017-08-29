import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

export class CheckSequence extends PureComponent {
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

function mapStateToProps(state) {
    return {
        isEqualSequense: state.sequenceState.isEqualSequense,
        isFinish: state.sequenceState.isFinish,
    }
}

export default connect(mapStateToProps)(CheckSequence)