import React, { Component } from "react";
import "./Optin.css";
import validator from 'validator'

class Optin extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" , errors:{}};

  }
  
 
  handleChange=(event) =>{
    this.setState({ value: event.target.value });
  }

  handleSubmit = (event)=>{
    event.preventDefault();
    let errors={};
    if(!validator.isEmail(this.state.value)){
      errors["email"] = "Invalid Email Format";
      this.setState({errors:errors}, ()=>console.log(errors))
    }else{
      this.setState({errors:{}}, ()=>console.log(errors))
      alert("A email was submitted: " + this.state.value);
    }
    
    // event.preventDefault();
  }

  render() {
    return (
      <div className="optin">
        <p>What to know more what we do? Send me an email</p>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="abc@example.com"
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button type="submit">
            Subscribe
          </button>
          <p className="errortext">{this.state.errors.email}</p>
        </form>
        
      </div>
    );
  }
}

export default Optin;
