import React, { Component } from 'react';
import './barista.css';

class Barista extends Component {

    // this sets the state for the orginal waiting message as well as the
    // three classNames of the divs in order to be able to use animation
    state = {
        waitingMessage: "",
        greetingClass: "firstGreeting",
        orderClass: "firstOrder",
        waitingClass: "firstMessage"
    }

    // this updates the component if another option is clicked in customer.js
    // and calls the changeClass function after 1 sec and the sendMessage function after 5 sec
    componentDidUpdate(prevProps) {
        if (this.props.passedOrder !== prevProps.passedOrder) {
            setTimeout( () => { this.changeClass() }, 1000);
            setTimeout( () => { this.sendMessage() }, 5000);
        }
    }

    //this updates the component after the first option is clicked when the original 
    // value is an empty string then calls the same functions as the last
    componentWillUpdate(nextProps, nextState) {
        if (this.state.waitingMessage === ""){
            setTimeout( () => { this.changeClass() }, 1000);
            setTimeout( () => { this.sendMessage() }, 5000);
        }
    }

    //this function calls the css animation
    //the greeting disappears after 2 sec while the order appears after 2s
    //then the order starts disappearing after waiting 6 sec
    changeClass() {
        this.setState({
            greetingClass: "transitionOut",
            orderClass: "transitionIn"
        })

        setTimeout( () => { this.setState({orderClass: "transitionOut"})}, 6000);
    }

    //this function changes the waiting message
    //the first message appears then the second appears after 5 sec
    sendMessage() {
        var message = "Waiting for " + this.props.passedOrder + ".";
        var secondMessage = "Here is your " + this.props.passedOrder + ".";

        this.setState({
            waitingMessage: message,
            waitingClass: "transitionIn"
        })

        setTimeout( () => { this.setState({waitingMessage: secondMessage}) }, 5000);

        setTimeout( () => { this.setState({waitingClass: "transitionOut"})}, 7000);
    }

    render() {
        return(
            <div className="barista">
                <div className="baristaHead"></div>
                <div className="threeDivs">
                    {/* these three divs store the current state in their className
                    the first two divs take the props from app.js and the third is the current 
                    waitingMessage state */}
                    <div className={this.state.greetingClass}>{ this.props.greeting }</div>
                    <div className={this.state.orderClass}>{ this.props.order }</div>
                    <div className={this.state.waitingClass} > { this.state.waitingMessage }</div>
                </div>
            </div>
        )
    }

}

export default Barista;