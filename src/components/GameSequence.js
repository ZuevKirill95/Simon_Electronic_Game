import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import StepSequence from '../components/StepSequence'

export class GameSequence extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            gameSequence: [],
            nameSequence: ''
        }
    }
    static defaultProps = {
        classColor: {
            red: 'sequenceRed',
            green: 'sequenceGreen',
            yellow: 'sequenceYellow',
            blue: 'sequenceBlue',
        },
    }

    renderSequence(sequence, index) {
        return (
            <StepSequence
                className={`sequence ${this.props.classColor[sequence]}`}
                id={`step_${index}`}
                value={sequence[0]}
            />
        )
    }

    render() {
        if (this.props.id == 'playerSequence') {
            this.state.gameSequence = this.props.playerSequence
            this.state.nameSequence = 'Последовательность игрока'
        }
        else if (this.props.id == 'computerSequence') {
            this.state.gameSequence = this.props.computerSequence
            this.state.nameSequence = 'Последовательность компьютера'
        }
        return (
            <div className="sequenceContainer">
                <div className="sequenceName">{this.state.nameSequence}</div>
                {this.state.gameSequence.map((item, index) => {
                    return this.renderSequence(item, index)
                })}
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