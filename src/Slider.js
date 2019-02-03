import React, {Component} from 'react';

class Slider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			min : this.props.min,
			max : this.props.max,
			step : this.props.step,
			value : this.props.value,
			onChage : this.props.onChage,
		}
	}
	render(){
		return(
			<input type="range" onChage={this.state.onChage} min={this.state.min} max={this.state.max} value={this.state.value}></input>
		)
	}
	
}

export default Slider