import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addPlayerStep } from '../actions/sequenceAction'

export class ColorButton extends PureComponent {
    lightClass = {
        redButton: 'lightRedButton',
        greenButton: 'lightGreenButton',
        yellowButton: 'lightYellowButton',
        blueButton: 'lightBlueButton',
    }

    onBtnClick = (e) => {
        e.preventDefault();
        const { addPlayerStep, id } = this.props;
        addPlayerStep(id)
    }

    render() {
        const { id, lighten, lightButton } = this.props;
        return (
            <button className={`block-unit ${id} ${lighten && this.lightClass[lightButton]}`}
                id={id}
                onClick={this.onBtnClick}
            />)
    }
}

function mapStateToProps(state, ownProps) {
    return {
        lighten: state.sequenceState.lighten === ownProps.id,
        lightButton: state.sequenceState.lighten,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        addPlayerStep: addPlayerStep
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ColorButton)