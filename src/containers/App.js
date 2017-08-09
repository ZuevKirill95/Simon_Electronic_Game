import React, { Component } from 'react'
import './style.css';

function GameSequence(props) {
    return (
        <div className={`sequence ${props.className}`} >
            {props.value}
        </div>
    )
}

function classColor(num) {
    switch (num) {
        case '0': return 'sequenceRed';
        case '1': return 'sequenceGreen';
        case '2': return 'sequenceYellow';        
        case '3': return 'sequenceBlue';
        default: return 'sequenceRed';
    }
}

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gameSequence: [],
        }
    }

    handleButtonClick = (e) => {
        e.preventDefault();
        const buttonId = e.target.id;
        this.setState({
            gameSequence: this.state.gameSequence.concat([buttonId]),
        })
    }


    renderSequence(i) {
        return <GameSequence
            value={this.state.gameSequence[i]}
            key={i}
            className={classColor(this.state.gameSequence[i])}
        />
    }

    displayGameSequence() {
        return (
            <div className="sequenceContainer">
                {this.state.gameSequence.map((item, index) => {
                    return this.renderSequence(index)
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

