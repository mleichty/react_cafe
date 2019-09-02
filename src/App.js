import React, { Component } from 'react';
import './App.css';
import Customer from './customer.js';
import Barista from './barista.js';
import Machine from './machine.js';

class App extends Component {

  //this defines the state of the three elements in the Barista.js
  state = {
    passedOrder: "",
    order: "",
    greeting: "Hello, how may I help you today?",
  }

  render() {
    return (
      <div className="App">
        <div className="Cafe">
          {/* this component passes the order information from customer.js to app.js
          then calls the handleOrder function with the order as a parameter. */}
          <Customer orderOption={ (newOrder) => { this.handleOrder(newOrder) }}/>

          {/* this component takes the three states from above and calls them as props
          in barista.js to display the messages. The waiting message is the only one not from app.js */}
          <Barista order = {this.state.order} 
                    passedOrder = {this.state.passedOrder}
                    greeting = {this.state.greeting}/>

          {/* this component also takes the passedOrder state from above to display what drink it's making. */}
          <Machine passedOrder = {this.state.passedOrder}/>
        </div>
      </div>
    );
  }

  handleOrder(newOrder) {

    // this if statement runs through the class names in barista.js and display a message
    // depending on which class name was chosen (the newOrder variable)
    if(newOrder === "dripBrew") {
      //this sets the state to the messages that will be shown in barista.js
      this.setState({
        passedOrder: "Drip Coffee",
        order: "One Drip Coffee? That will be $3.50.",
      })
    } else if (newOrder === "frenchPress") {
      this.setState({
        passedOrder: "French Press",
        order: "One French Press? That will be $4.25.",
      })
      //need last else if statement or else will automatically change to espresso on second click
    } else if (newOrder ==="espresso"){
      this.setState({
        passedOrder: "Espresso",
        order: "One Espresso? That will be $4.00.",
      })
    }
  }
}

export default App;
