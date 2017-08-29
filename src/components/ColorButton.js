import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addPlayerStep } from '../actions/sequenceAction'

export class ColorButton extends PureComponent {
    classColor = {
        redButton: 'lightRedButton',
        greenButton: 'lightGreenButton',
        yellowButton: 'lightYellowButton',
        blueButton: 'lightBlueButton',
    }
    
    lightColor = {
        0: 'lightRedButton',
        1: 'lightGreenButton',
        2: 'lightYellowButton',
        3: 'lightBlueButton',
    }

    checkLightButton = () => {
        const {RGYBlight} = this.props;
        for(let i = 0; i<4;i++){
            if(RGYBlight[i])
                return this.lightColor[i];
        }
        return null
    }
    onBtnClick = (e) => {
        e.preventDefault();
        const { addPlayerStep, id } = this.props;
        addPlayerStep(id)
    }

    render() {
        const {RGYBlight} = this.props;
        
        console.log(RGYBlight)
        const { id} = this.props;
        const lightButton = this.checkLightButton();
        return (
            <button className={`block-unit ${id} ${this.classColor[id] === lightButton? lightButton: ''}`}
                id={id}
                onClick={this.onBtnClick}
            />)
    }
}

function mapStateToProps(state) {
    return {
        RGYBlight: state.sequenceState.RGYBlight,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        addPlayerStep: addPlayerStep
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ColorButton)