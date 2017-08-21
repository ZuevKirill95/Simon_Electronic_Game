import React, { PureComponent } from 'react'
import { connect } from 'react-redux'


export class CheckSequence extends PureComponent {
    render() {
        const { isEqualSequense,isFinish } = this.props
        let statusText = ''
        if(isFinish){
            statusText = ((isEqualSequense) ? 'good!' : 'wrong')
        }
        return (
            <div className = "statusText">
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