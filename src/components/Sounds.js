import React, { Component } from 'react'
import Sound from 'react-sound'
import { connect } from 'react-redux'


export class Sounds extends Component {
    urlSound = {
        redButton: require('../assets/sounds/simonSound1.mp3'),
        greenButton: require('../assets/sounds/simonSound1.mp3'),
        yellowButton: require('../assets/sounds/simonSound1.mp3'),
        blueButton: require('../assets/sounds/simonSound1.mp3'),
    }

    setUrl = () => {
        const { button, isEqualSequense } = this.props;
        if (isEqualSequense)
            return this.urlSound[button]
        return require('../assets/sounds/wrong.mp3')
    }

    render() {
        return (
            <Sound
                url={this.setUrl()}
                playStatus={Sound.status.PLAYING}
            />
        )
    }
}

function mapStateToProps(state) {
    return {
        button: state.sequenceState.pressedButton,
        isEqualSequense: state.sequenceState.isEqualSequense,
        changeSound: state.sequenceState.changeSound
    }
}

export default connect(mapStateToProps)(Sounds)
