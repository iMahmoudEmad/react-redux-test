import React from 'react'
import { buyBlela } from '../redux'
import { connect } from 'react-redux'

const BlelaContainer = props => {
    return (
        <div>
            <h2>Number of blela: {props.numOfBlela}</h2>
            <button onClick={props.buyBlela}>Buy Blela</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfBlela: state.blela.numOfBlela
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyBlela: () => dispatch(buyBlela())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlelaContainer)
