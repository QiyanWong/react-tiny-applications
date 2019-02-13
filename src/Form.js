import React, {Component}from 'react';

class Form extends Component {
	constructor(props) {
	  super(props);
	  this.state = {textInput: '', textArea: '', select: ''};
	}
  
	handleInputChange = e => {
	  this.setState({textInput: e.target.value});
	  console.log('set textInput to: ', e.target.value);
	};
	handleTextAreaChange = e => {
	  this.setState({textArea: e.target.value});
	  console.log('set textArea to: ', e.target.value);
	};
	handleSelectChange = e => {
	  this.setState({select: e.target.value});
	  console.log('set select to: ', e.target.value);
	};
  
	handleSubmit = e => {
	  e.preventDefault(); // prevent Default HTML action
	  console.log('The values in the form are: ', this.state);
	};
  
	render() {
	  const formStyle = {
		margin: 'auto',
		padding: '50px',
	  };
	  const rowStyle = {
		margin: '10px',
		width: '300px',
		height: '100px',
		padding: '10px',
	  };
	  return (
		<form style={formStyle} onSubmit={this.handleSubmit}>
		  <div style={rowStyle}>
			<label>
			  Text Input
			  <input
				type="text"
				value={this.state.textInput}
				onChange={this.handleInputChange}
			  />
			</label>
		  </div>
		  <div style={rowStyle}>
			<label>
			  Text Area
			  <textarea
				value={this.state.textArea}
				onChange={this.handleTextAreaChange}
			  />
			</label>
		  </div>
		  <div style={rowStyle}>
		  </div>
		  <div style={rowStyle}>
			<input type="submit" value="Submit" />
		  </div>
		</form>
	  );
	}
  }

export default Form