import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../styles/style.css';
import ColorButton from '../components/ColorButton'
import ResetButton from '../components/ResetButton'
import SequenceStep from '../components/SequenceStep'
import { bindActionCreators } from 'redux'
import * as sequenceAction from '../actions/sequenceAction'


class App extends Component {
    static defaultProps = {
        classColor: {
            red: 'sequenceRed',
            green: 'sequenceGreen',
            yellow: 'sequenceYellow',
            blue: 'sequenceBlue',
        }
    }

    renderSequence(sequence, index) {
        return <SequenceStep
            value={sequence[0]}
            key={`step_${index}`}
            color={this.props.classColor[sequence]}
        />
    }

    displayGameSequence() {
        return (
            <div className="sequenceContainer">
                {this.props.gameSequence.map((item, index) => {
                    return this.renderSequence(item, index)
                })}
            </div>
        )
    }
    onBtnClick = (e) => {
        e.preventDefault();
        this.props.sequenceAction.resetSequence()
    }
    render() {
        return (
            <div className="container">
                <ColorButton id="red" />
                <ColorButton id="green" />
                <ColorButton id="blue" />
                <ColorButton id="yellow" />
                <div className="center-circle">
                    <ResetButton />
                </div>
                {this.displayGameSequence()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        gameSequence: state.sequenceState.gameSequence,
    }
}

export default connect(mapStateToProps)(App)

