import React, {Component}from 'react';

export class Vote extends Component {
	constructor() {
		super();
		this.state = {
			upScore: 0,
			downScore: 0,
			name: "Google",
			link: "www.google.com",
			describe: "Search Engine"
		};

		this.increment = this.increment.bind(this);
		this.decrement = this.decrement.bind(this);
	}

	render() {
		return (
			<div>
				<div>
					<p>
						Up:{this.state.upScore}
					</p>
					<p>
						Down:{this.state.downScore}
					</p>
				</div>
				<div>
				<p>
						{this.state.name}
					</p>
					<p>
						{this.state.describe}
					</p>
				</div>
				<button className="countUp" onClick={this.increment}>UP</button>
				<button className="countDown" onClick={this.decrement}>DOWN</button>
			</div>
		);
	}

	increment = () => {
		this.setState({
			upScore: this.state.upScore + 1,
		});
	}

	decrement = () => {
		this.setState({
			downScore: this.state.downScore + 1,
		});
	}
}

export default Vote