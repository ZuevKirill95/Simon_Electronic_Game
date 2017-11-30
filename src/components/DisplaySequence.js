import React from 'react'
import { connect } from 'react-redux'
import { uniqueId } from 'lodash'

export const DisplaySequence = (props) => {

    const classColor = {
        redButton: 'sequenceRed',
        greenButton: 'sequenceGreen',
        yellowButton: 'sequenceYellow',
        blueButton: 'sequenceBlue',
    }

    const renderSequence = (sequence) => {
        return (
            <div
                className={`sequence ${classColor[sequence]}`}
                key={uniqueId('step-')}>
                {sequence[0]}
            </div>
        )
    }
    
    if (!props.isCheatMode)
        return null
    const { id } = props
    const gameSequence = props[id]
    return (
        <div className="sequenceContainer">
            <div className="sequenceName">{id}</div>
            {gameSequence.map((item) => renderSequence(item))}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        playerSequence: state.sequenceState.playerSequence,
        computerSequence: state.sequenceState.computerSequence,
        isCheatMode: state.sequenceState.isCheatMode,
    }
}

export default connect(mapStateToProps)(DisplaySequence)