import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { uniqueId } from 'lodash'

export class GameSequence extends PureComponent {
    classColor = {
        redButton: 'sequenceRed',
        greenButton: 'sequenceGreen',
        yellowButton: 'sequenceYellow',
        blueButton: 'sequenceBlue',
    }

    renderSequence(sequence) {
        return (
            <div
                className={`sequence ${this.classColor[sequence]}`}
                key={uniqueId('step-')}>
                {sequence[0]}
            </div>
        )
    }

    render() {
        if (this.props.computerSequence.length == 0)
            return <div></div>
        const { id } = this.props
        const gameSequence = this.props[id]
        return (
            <div className="sequenceContainer">
                <div className="sequenceName">{id}</div>
                {gameSequence.map((item) => this.renderSequence(item))}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        playerSequence: state.sequenceState.playerSequence,
        computerSequence: state.sequenceState.computerSequence,
    }
}

export default connect(mapStateToProps)(GameSequence)