import React, { Component } from 'react'
import '../styles/style.css';
import ColorButton from '../components/ColorButton'
import CenterButton from '../components/CenterButton'
import DisplaySequence from '../components/DisplaySequence'
import CheatMode from '../components/CheatMode'
import Start from '../components/Start'

CheatMode
export default class App extends Component {
    render() {
        return (
            <div className="container">
                <ColorButton id="redButton" />
                <ColorButton id="greenButton" />
                <ColorButton id="blueButton" />
                <ColorButton id="yellowButton" />
                <CenterButton />
                <Start />
                <CheatMode />
                <DisplaySequence id="computerSequence" />
                <DisplaySequence id="playerSequence" />
            </div>
        )
    }
}


