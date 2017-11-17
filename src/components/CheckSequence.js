import React from 'react'

import { connect } from 'react-redux'
import { continueOrRestart } from '../actions/sequenceAction'
import { bindActionCreators } from 'redux'

export const CheckSequence= (props) => {

    const { continueOrRestart } = props
    continueOrRestart()

    return null
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        continueOrRestart: continueOrRestart,
    }, dispatch)
}

const mapStateToProps = (state) => {
    return {
        isEqualSequense: state.sequenceState.isEqualSequense,
        isFinish: state.sequenceState.isFinish,
        length: state.sequenceState.playerSequence,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckSequence)