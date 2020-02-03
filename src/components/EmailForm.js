import React, { Component } from 'react';

export class EmailForm extends Component {
  constructor() {
    super();
   
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
      window.open('https://mateo796943.typeform.com/to/n8qnJ7')
  }

  render() {
    
    return (
      <form id="signup-form" onSubmit={this.onSubmit} method="post" action="#">
       
        <input type="submit" value="Submit my trash" />
       
      </form>
    );
  }
}

export default EmailForm;
