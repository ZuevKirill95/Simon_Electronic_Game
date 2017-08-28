import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import StepSequence from '../components/StepSequence'

export class GameSequence extends PureComponent {
    classColor = {
        red: 'sequenceRed',
        green: 'sequenceGreen',
        yellow: 'sequenceYellow',
        blue: 'sequenceBlue',
    }

    renderSequence(sequence, index) {
        return (
            <StepSequence
                className={`sequence ${this.classColor[sequence]}`}
                key={`step_${index}`}
                value={sequence[0]}
            />
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
                {gameSequence.map((item, index) => this.renderSequence(item, index))}
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