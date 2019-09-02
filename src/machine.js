import React, { Component } from 'react';
import './machine.css';

class Machine extends Component {

    //this stores the info for both divs in the current state
    state = {
        makingDrink: "Now brewing: Nothing.",
        loadingBar: "firstLoadingBar"
    }

    //this is similar to barista and only calls the brewCoffee function
    // after 5 sec if the order was changed
    componentDidUpdate(prevProps) {
        if (this.props.passedOrder !== prevProps.passedOrder) {
            setTimeout( () => { this.brewCoffee() }, 5000);
        }
    }

    //this is similar to barista and cllas the brewCoffee function
    //after the initial click in customer.js
    componentWillUpdate(nextProps, nextState) {
        if (this.state.makingDrink==="Now brewing: Nothing.") {
            setTimeout( () => { this.brewCoffee() }, 5000);
        }
    }

    //this function dispalys the first message then the second after 5 sec
    //It also sets the state of the loading bar once its called
    brewCoffee() {
        var message = "Currently brewing " + this.props.passedOrder + ".";
        var secondMessage = this.props.passedOrder + " is done!";

        this.setState({
            makingDrink: message,
            loadingBar: "loadBar"
        })

        setTimeout( () => { this.setState({makingDrink: secondMessage, loadingBar: "unloadBar"}) }, 5000);
    }

    render() {
        return (
            <div className="machine">
                <div className="machineHead"></div>
                <div className="twoDivs">
                    {/* the first div stores the current state in the div
                    and the second stores the current state in the class for animation */}
                    <div className="statusMessage">{ this.state.makingDrink }</div>
                    <div className={this.state.loadingBar}>Status</div>
                </div>
            </div>
        )
    }
}

export default Machine;