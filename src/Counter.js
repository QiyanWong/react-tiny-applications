import React, { Component } from 'react';

class Counter extends Component {
	constructor(props) {
		super(props);
		
		this.state.number = 0;
		return <h1> {this.props.data}</h1>
	}
	addOne = () => { 
		this.props.data += 1;
	}
	reduceOne = () => {
		this.props.data -= 1;
	}

}