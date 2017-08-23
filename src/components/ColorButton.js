import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addSequenceStep, equalSequence, finishSequence, checkSequence } from '../actions/sequenceAction'

export class ColorButton extends PureComponent {
    static defaultProps = {
        classColor: {
            red: 'redButton',
            green: 'greenButton',
            yellow: 'yellowButton',
            blue: 'blueButton',
        }
    }

    checkFinish(playerSequence, computerSequence) {
        return (playerSequence.length === computerSequence.length - 1)
    }

    onBtnClick = (e) => {
        if (this.props.isFinish || this.props.computerSequence.length !== this.props.lengthSequence)
            return
        e.preventDefault();
        const { playerSequence, computerSequence, id } = this.props;
        const { addSequenceStep, finishSequence, checkSequence } = this.props;
        addSequenceStep(id)
        if (this.checkFinish(playerSequence, computerSequence)) {
            finishSequence(true)
            checkSequence(playerSequence, computerSequence, id);
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
        lengthSequence: state.sequenceState.lengthSequence,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        addSequenceStep: addSequenceStep,
        checkSequence: checkSequence,
        finishSequence: finishSequence,
        equalSequence: equalSequence,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ColorButton)