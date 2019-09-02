import React, { Component } from 'react';
import './customer.css';

class Customer extends Component {

    //this defines the original state for what class will be displayed
    state = {
        dripClass: "dripBrew",
        frenchClass: "frenchPress",
        espressoClass: "espresso"
    }

    //these three highlight functions will change the class of the selected div
    //and make the other two return to their original state
    highlightDrip() {
        this.setState ( { dripClass: "dripHighlighted" } )
        this.setState ( { frenchClass: "frenchPress" } )
        this.setState ( { espressoClass: "espresso" } )

        //this stores the current class in a variable to send to app.js
        var order = this.state.dripClass;

        //this sends that variable with the property orderOption to be called in the component
        this.props.orderOption(order);
    }

    highlightFrench() {
        this.setState ( { frenchClass: "frenchHighlighted" } )
        this.setState ( { dripClass: "dripBrew" } )
        this.setState ( { espressoClass: "espresso" } )

        var order = this.state.frenchClass;

        this.props.orderOption(order);
    }

    highlightEspresso() {
        this.setState ( { espressoClass: "espressoHighlighted" } )
        this.setState ( { dripClass: "dripBrew" } )
        this.setState ( { frenchClass: "frenchPress" } )

        var order = this.state.espressoClass;

        this.props.orderOption(order);
    }

    render() {
        return(
            <div className="customer">
                <div className="customerHead">Please place your order.</div>
                <div className="threeOptions">
                    {/* these divs have the className defined by the current state and the onClick function is called 
                    that will then change the classes depending on which is clicked */}
                    <div className={this.state.dripClass} onClick={() => { this.highlightDrip() }}>Drip Brew</div>
                    <div className={this.state.frenchClass} onClick={() => { this.highlightFrench() }}>French Press</div>
                    <div className={this.state.espressoClass} onClick={() => { this.highlightEspresso() }}>Espresso</div>
                </div>
            </div>
        )
    }
}

export default Customer;