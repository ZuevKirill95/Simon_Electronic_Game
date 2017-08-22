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
        return (playerSequence.length == computerSequence.length - 1) ? true : false
    }

    onBtnClick = (e) => {
        if (this.props.isFinish)
            return
        e.preventDefault();
        const { playerSequence, computerSequence, id } = this.props;
        const { addSequenceStep, finishSequence, checkSequence } = this.props.sequenceAction;
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
    }
}

function mapDispatchToProps(dispatch) {
    return {
        sequenceAction: bindActionCreators({ addSequenceStep, equalSequence, finishSequence, checkSequence }, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ColorButton)