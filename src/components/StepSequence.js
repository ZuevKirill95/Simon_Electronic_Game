import React, { PureComponent } from 'react'


export default class StepSequence extends PureComponent {
    render(){
        const { className, key, value } = this.props
        return(
            <div
            className={className}
            key={key}>
            {value}
        </div>
        )
    }
}