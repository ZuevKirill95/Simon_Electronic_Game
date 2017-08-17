import React, { Component } from 'react'
import '../styles/style.css';
import ColorButton from '../components/ColorButton'
import ResetButton from '../components/ResetButton'
import GameSequence from '../components/GameSequence'


export default class App extends Component {

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
                <GameSequence id = "computerSequence"/>
                <GameSequence id = "playerSequence"/>                
            </div>
        )
    }
}


