import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { switchCheatMode } from '../actions/sequenceAction'

const CheatMode = (props) => {

    const click = () => {
        props.switchCheatMode()
    }

    return (
        <div>
            <input id="checkBox" type="checkbox" onClick={click} />
            <label htmlFor="checkBox">Cheat MODE </label>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        switchCheatMode: switchCheatMode,
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(CheatMode);