import React, { Component } from 'react';

class EditButton extends Component {

  render() {
     console.log(this.props)
  

    return (
      <div>
       
          {this.props.restaurant.text}
 
        <input type="submit" value="edit" onClick={this.props.handleChange} />
  
      </div>
    );
  }

};

export default EditButton;
