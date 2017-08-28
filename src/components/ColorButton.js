import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addPlayerStep} from '../actions/sequenceAction'

export class ColorButton extends PureComponent {
    classColor = {
        red: 'redButton',
        green: 'greenButton',
        yellow: 'yellowButton',
        blue: 'blueButton',
    }

    onBtnClick = (e) => {
        e.preventDefault();
        const { playerSequence, computerSequence, id, isFinish, lengthSequence } = this.props;
        const { addPlayerStep } = this.props;
        addPlayerStep(playerSequence, computerSequence, id, isFinish, lengthSequence)
    }

    render() {
        const { id } = this.props;
        return (
            <button className={`block-unit ${this.classColor[id]}`}
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
        addPlayerStep: addPlayerStep
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ColorButton)