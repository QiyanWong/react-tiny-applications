import React, {Component}from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css';
class Vote extends Component {
	constructor(props) {
		super(props);
		this.state = {
			upScore: 0,
			downScore: 0,
			id : props.id,
			website: props.website,
			link: props.link,
			describe: props.describe,
		};

		this.increment = this.increment.bind(this);
		this.decrement = this.decrement.bind(this);
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
	
	render() {
		const trClass = this.state.id % 2 === 0 ? "evenrowcolor" : "oddrowcolor";
		return (
			<tr className={trClass}>
				<td>
					<button className="fa fa-thumbs-up" onClick={this.increment}></button><b>{" " + this.state.upScore + " "}</b>
					<button className="fa fa-thumbs-down" onClick={this.decrement}></button><b>{" " + this.state.downScore + " "}</b>
				</td>

				<td>
				<a href={this.state.link}>{this.state.website}</a><br></br>
					{this.state.describe}
				</td>
			</tr>
		);
	}
}
export default Vote