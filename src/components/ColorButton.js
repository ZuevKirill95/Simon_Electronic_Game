import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addPlayerStep } from '../actions/sequenceAction'

export const ColorButton = (props) => {

    const lightClass = {
        redButton: 'lightRedButton',
        greenButton: 'lightGreenButton',
        yellowButton: 'lightYellowButton',
        blueButton: 'lightBlueButton',
    }
    const urlSound = {
        redButton: require('../assets/sounds/simonSound1.mp3'),
        greenButton: require('../assets/sounds/simonSound2.mp3'),
        yellowButton: require('../assets/sounds/simonSound3.mp3'),
        blueButton: require('../assets/sounds/simonSound4.mp3'),
    }

    const onBtnClick = (e) => {
        e.preventDefault();
        const { addPlayerStep, id, playerSequence, computerSequence } = props;
        addPlayerStep(id)
        const buttonSound = new Audio;
        if (computerSequence[playerSequence.length] === id)
            buttonSound.src = urlSound[id];
        else
            buttonSound.src = require('../assets/sounds/wrong.mp3')
        buttonSound.play();
    }

    const { id, lighten, lightButton } = props;
    return (
        <div>
            <button className={`block-unit ${id} ${lighten && lightClass[lightButton]}`}
                id={id}
                onClick={onBtnClick}
            />
        </div>
    )
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