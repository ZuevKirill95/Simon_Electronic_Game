import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addPlayerStep, continueOrRestart } from '../actions/sequenceAction'

export class ColorButton extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            disabled: false
        }
    }
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

    undisable = async () => {
        await setTimeout(() => { this.setState({ disabled: false }) }, 1500)
    }


    onBtnClick = () => {
        const { id, playerSequence, computerSequence } = this.props
        const { addPlayerStep, continueOrRestart } = this.props
        addPlayerStep(id)
        const buttonSound = new Audio
        if (computerSequence[playerSequence.length] === id)
            buttonSound.src = this.urlSound[id]
        else {
            this.setState({ disabled: true })
            this.undisable()
            buttonSound.src = require('../assets/sounds/wrong.mp3')
        }
        buttonSound.play()
        continueOrRestart()
    }

    render() {
        const { id, lighten, lightButton, isFinish, finishBlink } = this.props
        return (
            <div>
                <button
                    className={`block-unit ${id} ${lighten && this.lightClass[lightButton]}`}
                    disabled={this.state.disabled || !finishBlink || isFinish}
                    id={id}
                    onClick={this.onBtnClick}
                />
            </div>
        )
    }
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