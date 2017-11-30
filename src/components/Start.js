import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addComputerStep, displaySequence } from '../actions/sequenceAction'

export const Start = (props) => {
    const { addComputerStep, displaySequence } = props
    setTimeout(() => {
        addComputerStep()
        displaySequence()
    }, 1000)
    return null
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addComputerStep: addComputerStep,
        displaySequence: displaySequence,
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(Start)