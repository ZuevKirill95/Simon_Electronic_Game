import React, {PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as sequenceAction from '../actions/sequenceAction'
import './style.css';

class Button extends React.PureComponent {

    constructor(props) {
        super(props);
        this.classColor = {
            0: 'red',
            1: 'green',
            2: 'yellow',
            3: 'blue',
        }
    }

    render() {
        const id = this.props.id;
        return (
            <button className={`block-unit ${this.classColor[id]}`}
                id={id}
                onClick={this.props.click}
            />)
    }
}


class DisplayPressedButton extends React.PureComponent {
    render() {
        return (
            <div className={`sequence ${this.props.color}`} >
                {this.props.value}
            </div>
        )
    }
}



class App extends Component {
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

    onBtnClick(e) {
        e.preventDefault();
        const buttonId = e.target.id;
        const newGameSeq = this.props.gameSequence;
        newGameSeq.push(buttonId);
        this.props.actionBtn.addDissplayPressedButton(newGameSeq)
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
                {this.props.gameSequence.map((item, index) => {
                    return this.renderSequence(item, index)
                })}
            </div>
        )
    }

    render() {
      const { addDissplayPressedButton} = this.props.actionBtn;
       const {gameSequence} = this.props
       console.log(this.props)
        return (
            <div className="container">
                <Button id="0" click={::this.onBtnClick} addDissplayPressedButton={addDissplayPressedButton} />
                <Button id="1" click={this.handleButtonClick} />
                <Button id="3" click={this.handleButtonClick} />
                <Button id="2" click={this.handleButtonClick} />
                <div className="center-circle">
                    <button className="start-circle"></button>
                </div>
                {this.displayGameSequence()}
                <div>{ gameSequence}!</div>
            </div>
        )
    }
}


function mapStateToProps (state) {
    return {
        gameSequence: state.sequenceState.gameSequence
    }
  }

  function mapDispatchToProps(dispatch){
      return {
        actionBtn: bindActionCreators(sequenceAction, dispatch)
      }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(App)

