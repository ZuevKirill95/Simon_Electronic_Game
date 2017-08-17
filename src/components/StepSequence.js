import React, { PureComponent } from 'react'


export default class StepSequence extends PureComponent {
    render(){
        return(
            <div
            className={this.props.className}
            key={this.props.id}>
            {this.props.value}
        </div>
        )
    }
}