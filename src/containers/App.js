import React, { Component } from 'react'
import '../styles/style.css';
import ColorButton from '../components/ColorButton'
import ResetButton from '../components/ResetButton'
import DisplaySequence from '../components/DisplaySequence'
import CheckSequence from '../components/CheckSequence'
import CheatMode from '../components/CheatMode'

CheatMode
export default class App extends Component {
    render() {
        return (
            <div className="container">
                <ColorButton id="redButton" />
                <ColorButton id="greenButton" />
                <ColorButton id="blueButton" />
                <ColorButton id="yellowButton" />
                <div className="center-circle">
                    <ResetButton />
                </div>
                <CheatMode />     
                <DisplaySequence id="computerSequence" />
                <DisplaySequence id="playerSequence" />          
                <CheckSequence /> 
            </div>
        )
    }
}


