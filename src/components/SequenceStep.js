import React, { PureComponent } from 'react'

export default class SequenceStep extends PureComponent {
    render() {
        return (
            <div className={`sequence ${this.props.color}`} >
                {this.props.value}
            </div>
        )
    }
}