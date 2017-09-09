import React, { Component } from 'react'
import '../styles/style.css';
import ColorButton from '../components/ColorButton'
import ResetButton from '../components/ResetButton'
import GameSequence from '../components/GameSequence'
import CheckSequence from '../components/CheckSequence'
import Sounds from '../components/Sounds'

export default class App extends Component {

    render() {
        return (
            <div className="container">
                <Sounds />
                <ColorButton id="redButton" />
                <ColorButton id="greenButton" />
                <ColorButton id="blueButton" />
                <ColorButton id="yellowButton" />
                <div className="center-circle">
                    <ResetButton />
                </div>
                <GameSequence id="computerSequence" />
                <GameSequence id="playerSequence" />
                <CheckSequence />
            </div>
        )
    }
}


