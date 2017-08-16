import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as sequenceAction from '../actions/sequenceAction'

export class ColorButton extends PureComponent {

    static defaultProps = {
        classColor: {
            red: 'redButton',
            green: 'greenButton',
            yellow: 'yellowButton',
            blue: 'blueButton',
        }
    }

    onBtnClick = (e) => {
        e.preventDefault();
        this.props.sequenceAction.addSequenceStep(this.props.id)
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


function mapDispatchToProps(dispatch) {
    return {
        sequenceAction: bindActionCreators(sequenceAction, dispatch),
    }
}

export default connect(null, mapDispatchToProps)(ColorButton)