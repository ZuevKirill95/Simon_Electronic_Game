import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addSequenceStep, equalSequence, notEqualSequence, finishSequence } from '../actions/sequenceAction'
export class ColorButton extends PureComponent {

    static defaultProps = {
        classColor: {
            red: 'redButton',
            green: 'greenButton',
            yellow: 'yellowButton',
            blue: 'blueButton',
        }
    }
    checkSequence(playerSequence, computerSequence, color) {
        for (let i = 0; i < playerSequence.length; i++) {
            if (playerSequence[i] !== computerSequence[i]) {
                console.log(i)
                return false;
            }
        }
        if (color === computerSequence[computerSequence.length - 1]) {
            return true;
        }
        else false
    }

    isFinish(playerSequence, computerSequence) {
        return (playerSequence.length == computerSequence.length - 1) ? true : false
    }

    onBtnClick = (e) => {
        if (this.props.isFinish)
            return
        e.preventDefault();
        const { playerSequence, computerSequence, id } = this.props;
        const { addSequenceStep, finishSequence, equalSequence, notEqualSequence } = this.props.sequenceAction;
        addSequenceStep(id)
        if (this.isFinish(playerSequence, computerSequence)) {
            finishSequence()
            if (this.checkSequence(playerSequence, computerSequence, id))
                equalSequence()
            else
                notEqualSequence()

        }
    }

    render() {
        const id = this.props.id;
        return (
            <button className={`block-unit ${this.props.classColor[id]}`}
                id={id}
                onClick={this.onBtnClick}
            />)
    }
}

function mapStateToProps(state) {
    return {
        playerSequence: state.sequenceState.playerSequence,
        computerSequence: state.sequenceState.computerSequence,
        isFinish: state.sequenceState.isFinish,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        sequenceAction: bindActionCreators({ addSequenceStep, equalSequence, notEqualSequence, finishSequence }, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ColorButton)