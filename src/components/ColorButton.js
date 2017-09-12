import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addPlayerStep } from '../actions/sequenceAction'

export class ColorButton extends PureComponent {
    lightClass = {
        redButton: 'lightRedButton',
        greenButton: 'lightGreenButton',
        yellowButton: 'lightYellowButton',
        blueButton: 'lightBlueButton',
    }
    urlSound = {
        redButton: require('../assets/sounds/simonSound1.mp3'),
        greenButton: require('../assets/sounds/simonSound2.mp3'),
        yellowButton: require('../assets/sounds/simonSound3.mp3'),
        blueButton: require('../assets/sounds/simonSound4.mp3'),
    }

    onBtnClick = (e) => {
        e.preventDefault();
        const { addPlayerStep, id, playerSequence, computerSequence } = this.props;
        addPlayerStep(id)
        const buttonSound = new Audio;
        if (computerSequence[playerSequence.length] === id)
            buttonSound.src = this.urlSound[id];
        else
            buttonSound.src = require('../assets/sounds/wrong.mp3')
        buttonSound.play();
    }

    render() {
        const { id, lighten, lightButton } = this.props;
        return (
            <div>
                <button className={`block-unit ${id} ${lighten && this.lightClass[lightButton]}`}
                    id={id}
                    onClick={this.onBtnClick}
                />
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        lighten: state.sequenceState.lighten === ownProps.id,
        lightButton: state.sequenceState.lighten,
        computerSequence: state.sequenceState.computerSequence,
        playerSequence: state.sequenceState.playerSequence
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        addPlayerStep: addPlayerStep
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ColorButton)