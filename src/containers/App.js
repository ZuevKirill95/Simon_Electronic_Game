import React, { Component } from 'react'
import './style.css';

class PressedButton extends React.PureComponent {
     constructor(props) {
        super(props);
     }
    render(){
    return (
        <div className={`sequence ${this.props.className}`} >
            {this.props.value}
        </div>
    )}
}

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            gameSequence: [],
        }
        this.classColor = {
            0: 'sequenceRed',
            1: 'sequenceGreen',
            2: 'sequenceYellow',
            3: 'sequenceBlue',
        }

    }

    handleButtonClick = (e) => {
        e.preventDefault();
        const buttonId = e.target.id;
        const  {gameSequence} = this.state
        gameSequence.push(buttonId);
        this.setState({
            gameSequence,
        })
    }


    renderSequence(sequence, index) {
        return <PressedButton
            value={sequence}
            key={`step_${index}`}
            className={`sequence ${this.classColor[sequence]}`}
        />
    }

    displayGameSequence() {
        return (
            <div className="sequenceContainer">
                {this.state.gameSequence.map((item, index) => {
                    return this.renderSequence(item, index)
                })}
            </div>
        )
    }

    render() {
        return (
            <div className="container">
                <button className="block-unit red" id="0" onClick={this.handleButtonClick} />
                <button className="block-unit green" id="1" onClick={this.handleButtonClick} />
                <button className="block-unit blue" id="3" onClick={this.handleButtonClick} />
                <button className="block-unit yellow" id="2" onClick={this.handleButtonClick} />
                <div className="center-circle">
                    <button className="start-circle"></button>
                </div>
                {this.displayGameSequence()}
            </div>
        )
    }
}

