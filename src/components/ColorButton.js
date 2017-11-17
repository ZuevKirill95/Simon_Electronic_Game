import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addPlayerStep, continueOrRestart } from '../actions/sequenceAction'

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

    const { id, playerSequence, computerSequence, lighten, lightButton, isFinish, finishBlink } = props
    const { addPlayerStep, continueOrRestart } = props
    const onBtnClick = () => {
        addPlayerStep(id)
        const buttonSound = new Audio
        if (computerSequence[playerSequence.length] === id)
            buttonSound.src = urlSound[id]
        else
            buttonSound.src = require('../assets/sounds/wrong.mp3')
        buttonSound.play()
        continueOrRestart()
    }

    return (
        <div>
            <button
                className={`block-unit ${id} ${lighten && lightClass[lightButton]}`}
                disabled={!finishBlink || isFinish}
                id={id}
                onClick={onBtnClick}
            />
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        lighten: state.sequenceState.lighten === ownProps.id,
        lightButton: state.sequenceState.lighten,
        computerSequence: state.sequenceState.computerSequence,
        playerSequence: state.sequenceState.playerSequence,
        isFinish: state.sequenceState.isFinish,
        finishBlink: state.sequenceState.finishBlink,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addPlayerStep: addPlayerStep,
        continueOrRestart: continueOrRestart,
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ColorButton)