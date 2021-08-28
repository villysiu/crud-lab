import React, { Component } from 'react';

class UpdateButton extends Component {
    state = {
        text: this.props.restaurant.text,
      }
    
      handleChange = event => {  
        this.setState({
          text: event.target.value
        })
      }
      handleSubmit = event => {
        event.preventDefault();
        
        this.props.update({
            text: this.state.text,
            id: this.props.restaurant.id
        })
        this.props.handleChange();
        this.setState({
          text: ''
        })
      }
    
  render() {
    return (
      <div>
       
       <form onSubmit={this.handleSubmit} >
        <input name='text' id='id' value={this.state.text} onChange={this.handleChange} />
        <input type="submit" value="update" />
        </form>
      </div>
    );
  }

};

export default UpdateButton;
