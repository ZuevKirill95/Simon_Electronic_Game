import React, { PureComponent } from 'react'


export default class StepSequence extends PureComponent {
    render(){
        const { className, id, value } = this.props
        return(
            <div
            className={className}
            key={id}>
            {value}
        </div>
        )
    }
}