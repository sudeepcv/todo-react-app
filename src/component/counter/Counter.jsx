import React, { Component } from 'react';
import './Counter.css';
import propTypes from 'prop-types'

class CounterButton extends Component {
    constructor() {
        super();
        this.state = { counter: 0 }
        //  With Arrow Function we don't need binding
        this.increment = this.increment.bind(this);
        // this.decrement=this.decrement.bind(this);
    }
    increment() {
       
        this.props.increment(this.props.by);
    }
    decrement=()=>{
    this.props.decrement(this.props.by);
    }


    render() {
        return (
            <div className="counter">
                <button onClick={this.increment}>+ {this.props.by}</button>
                <button onClick={this.decrement}>- {this.props.by}</button>
                
            </div>
        )
    }


}

CounterButton.defaultProps = { by: 1 }

CounterButton.propTypes = {
    by: propTypes.number
}



class Counter extends Component {
    constructor() {
        super();
        this.state = { counter: 0 }
        //  With Arrow Function we don't need binding
        this.increment = this.increment.bind(this);
        this.decrement=this.decrement.bind(this);
    }
    increment(inclrementBy) {
        console.log(`increment from Counter- ${inclrementBy}`);
        this.setState((prevState) => {
            return { counter: prevState.counter + inclrementBy };
        }
        )
    }
    decrement(decrementBy){
                this.setState((prevState) => {
            return { counter: prevState.counter - decrementBy };
        })

    }
    reset=()=>{
        this.setState({counter:0})
    }

    render() {
        return (
            <div className="counter">
                <CounterButton by={1} increment={this.increment} decrement={this.decrement}  />
                <CounterButton by={5} increment={this.increment} decrement={this.decrement}/>
                <CounterButton by={10} increment={this.increment} decrement={this.decrement}/>

                <span className="count">{this.state.counter}</span>

                <div className="reSetButton">
                <button onClick={this.reset}>Reset</button>
                </div>
            </div>

        );
    }

}
export default Counter;