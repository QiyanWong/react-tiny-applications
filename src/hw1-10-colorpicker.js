import React, {Component} from 'react';
import Slider from 'react-rangeslider';
import './Slider.css';
import 'react-rangeslider/lib/index.css'
class ColorPicker extends Component {
	constructor(props) {
		super(props);
		this.state = {
			red : 125,
			blue: 125,
			green: 125,
			alpha: 0.5,
		}
	}
		changeBlue = (value) => {
			this.setState({blue : value});
		}
		changeRed = (value) => {
			this.setState({red : value});
		}
		changeGreen = (value) => {
			this.setState({green : value});
		}
		changeAlpha = (value) => {
			this.setState({alpha : value});
		}
	render() {
		const bodyStyle = {
			backgroundColor : `rgba(${this.state.red},${this.state.green},${this.state.blue},${this.state.alpha})`,
		};
		const pStyle = {
			fontSize: '15px',
			textAlign: 'center'
		};

		return (
			<html>
				<body style = {bodyStyle}>
					<div>
						<Slider
							value={this.state.red}
							onChange={this.changeRed}
							min={0}
							max={255}
							id="red"></Slider>
						<p sytle = {pStyle}>red : {this.state.red}</p>
						<Slider
							value={this.state.green}
							onChange={this.changeGreen}
							min={0}
							max={255}
							id="green"></Slider>
						<p sytle = {pStyle}>green : {this.state.green}</p>
						<Slider
							value={this.state.blue}
							onChange={this.changeBlue}
							min={0}
							max={255}
							id="blue"></Slider>
						<p sytle = {pStyle}>blue : {this.state.blue}</p>
						<Slider
							value={this.state.alpha}
							onChange={this.changeAlpha}
							min={0}
							max={1}
							step={0.01}
							id="Alpha"></Slider>
						<p sytle = {pStyle}>alpha : {this.state.alpha}</p>
					</div>
				</body>
			</html>
		);
	}
}

export default ColorPicker;