import React, { Component } from 'react'
import Sound from 'react-sound'
import { connect } from 'react-redux'


export class Sounds extends Component {
    urlSound = {
        redButton: 'https://s3.amazonaws.com/freecodecamp/simonSound1.mp3',
        greenButton: 'https://s3.amazonaws.com/freecodecamp/simonSound2.mp3',
        yellowButton: 'https://s3.amazonaws.com/freecodecamp/simonSound3.mp3',
        blueButton: 'https://s3.amazonaws.com/freecodecamp/simonSound4.mp3',
    }

    setUrl = () => {
        const { button, isEqualSequense } = this.props;
        if (isEqualSequense)
            return this.urlSound[button]
        return 'http://www.freesound.org/data/previews/331/331912_3248244-lq.mp3'

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
