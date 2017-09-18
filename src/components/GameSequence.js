import React from 'react'
import { connect } from 'react-redux'
import { uniqueId } from 'lodash'

export const GameSequence = (props) => {
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

    if (props.computerSequence.length == 0)
        return <div></div>
    const { id } = props
    const gameSequence = props[id]
    return (
        <div className="sequenceContainer">
            <div className="sequenceName">{id}</div>
            {gameSequence.map((item) => renderSequence(item))}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        playerSequence: state.sequenceState.playerSequence,
        computerSequence: state.sequenceState.computerSequence,
    }
}

export default connect(mapStateToProps)(GameSequence)