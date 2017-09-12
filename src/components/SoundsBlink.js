import React, { Component } from 'react'
import { connect } from 'react-redux'

export class SoundsBlink extends Component {
    urlSound = {
        redButton: require('../assets/sounds/simonSound1.mp3'),
        greenButton: require('../assets/sounds/simonSound2.mp3'),
        yellowButton: require('../assets/sounds/simonSound3.mp3'),
        blueButton: require('../assets/sounds/simonSound4.mp3'),
    }

    render() {
        const { button, lighten } = this.props;
        if (button && lighten) {
            const buttonSound = new Audio;
            buttonSound.src = this.urlSound[button];
            buttonSound.play();
        }
        return (<div></div>)
    }
}

function mapStateToProps(state) {
    return {
        button: state.sequenceState.pressedButton,
        lighten: state.sequenceState.lighten,
    }
}

export default connect(mapStateToProps)(SoundsBlink)
