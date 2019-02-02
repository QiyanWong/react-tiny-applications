import React, {Component} from 'react';
class Timer extends Component {
	constructor(props){
		super(props);
		this.state = {
			time : 0,
			isOn : false
		};
	}

	start = () => {
		this.timer = setInterval(() => this.setState({
			time : this.state.time + 1,
			isOn : true
		}),1000);
	};
	stop = () => {
		clearInterval(this.timer);
		this.setState({
			time : this.state.time,
			isOn : false
		});
	};
	reset = () => {
		this.setState({
			time : 0,
			isOn : this.state.isOn,
		});
	}
	render() {
		let start = (this.state.isOn === true) ? null : <button onClick={this.start}>Start </button>
		let stop = (this.state.isOn === true) ? <button onClick={this.stop}>Stop </button> : null
		return (
			<html>
				<div>
					<p>{this.state.time}</p>
					{start}
					{stop}
					<button onClick={this.reset}>Reset </button>
				</div>
			</html>
		)
		}

}


export default Timer;