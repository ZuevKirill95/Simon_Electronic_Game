import React, { Component } from 'react'
import './style.css';
class Button extends React.PureComponent{
      constructor(props) {
        super(props);
        this.classColor = {
            0: 'red',
            1: 'green',
            2: 'yellow',
            3: 'blue',
        }
    }
    render(){
        const id = this.props.id;
        return(
        <div className={`block-unit ${this.classColor[id]}`}
         id={id}
         onClick={this.props.click}
         />)
    }
}
class DisplayPressedButton extends React.PureComponent {
    render(){
    return (
        <div className={`sequence ${this.props.color}`} >
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
        return <DisplayPressedButton
            value={sequence}
            key={`step_${index}`}
            color={this.classColor[sequence]}
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
                <Button click={this.handleButtonClick} id="0"/>
                <Button click={this.handleButtonClick} id="1"/>
                <Button click={this.handleButtonClick} id="3"/>                
                <Button click={this.handleButtonClick} id="2"/>
                <div className="center-circle">
                    <button className="start-circle"></button>
                </div>
                {this.displayGameSequence()}
            </div>
        )
    }
}

