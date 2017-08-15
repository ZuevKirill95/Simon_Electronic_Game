import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as sequenceAction from '../actions/sequenceAction'
import '../styles/style.css';

class Button extends React.PureComponent {

    static defaultProps = {
        classColor: {
            red: 'redButton',
            green: 'greenButton',
            yellow: 'yellowButton',
            blue: 'blueButton',
        }
    }

    onBtnClick(e) {
        e.preventDefault();
        this.props.addPressedButton(e.target.id)
    }

    render() {
        const id = this.props.id;
        return (
            <button className={`block-unit ${this.props.classColor[id]}`}
                id={id}
                onClick={::this.onBtnClick}                
            />)
    }
}
class PressedButton extends React.PureComponent {
    render() {
        return (
            <div className={`sequence ${this.props.color}`} >
                {this.props.value}
            </div>
        )
    }
}

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
        return <PressedButton
            value={sequence.charAt(0)}
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

    render() {
        const { addPressedButton } = this.props.sequenceAction;
        return (
            <div className="container">
                <Button id="red" addPressedButton={addPressedButton} />
                <Button id="green" addPressedButton={addPressedButton} />
                <Button id="blue" addPressedButton={addPressedButton} />
                <Button id="yellow" addPressedButton={addPressedButton} />
                <div className="center-circle">
                    <button className="start-circle"></button>
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

function mapDispatchToProps(dispatch) {
    return {
        sequenceAction: bindActionCreators(sequenceAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

