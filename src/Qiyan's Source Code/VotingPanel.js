import React, { Component } from 'react';
import Vote from './Vote';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './Table.css';
import './Button.css';
import './Form.css';

class VotingPanel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			website: '',
			link: '',
			describe: '',
			adding: false,
			data: []
		};
	}
	addNew = () => {
		this.setState(
			{adding: true}
		);
	}

	handleInputChangeName = e => {
		this.setState({ website: e.target.value });
		console.log('set website to: ', e.target.value);
	};
	handleInputChangeLink = e => {
		this.setState({ link: e.target.value });
		console.log('set link to: ', e.target.value);
	};

	handleTextAreaChange = e => {
		this.setState({ describe: e.target.value });
		console.log('set textArea to: ', e.target.value);
	};

	handleSubmit = e => {
		e.preventDefault();
		console.log('The values in the form are: ', this.state);
		var newItem = {
			website: this.state.website,
			link: this.state.link,
			describe: this.state.describe,
			id : this.state.data.length,
		}
		this.setState(
			{ 	
				adding: false,
				website: '',
				link: '',
				describe: '',
				data: [...this.state.data, newItem], 
			}
		);
	};
	render() {
		const form = this.state.adding === true ? 
			<form className="elegant-aero" onSubmit={this.handleSubmit}>
							<div>
								<label>
									Website:
		<input
										type="text"
										value={this.state.website}
										onChange={this.handleInputChangeName}
									/>
								</label>
							</div>
							<div>
								<label>
									Link:   
		<input
										type="text"
										value={this.state.link}
										onChange={this.handleInputChangeLink}
									/>
								</label>
							</div>
							<div>
								<label>
									Describe: 
			<textarea
										value={this.state.describe}
										onChange={this.handleTextAreaChange}
									/>
								</label>
							</div>
							<div>
								<input type="submit" value="Submit" />
							</div>
						</form>
		: null
		return (
			<html>
				<body>
					<div>
						<table className="altrowstable" id="alternatecolor">
							<thead>
								<tr>
									{this.state.adding === true ? null : <th>Please vote for your favorite website:</th>}
								</tr>
							</thead>
							<tbody>
								{this.state.data.map((item, index) => {
									return <Vote key={item.id} website={item.website}
										link={item.link} describe={item.describe}
										{...item} />;
								})}
							</tbody>
						</table>
						<div>
							{this.state.adding === true ? null : <button className="blue" onClick={this.addNew}>Add Your Favorite Website</button>}
						</div>
					</div>
					<div>
						{form}
					</div>
				</body>
			</html>
		);
	}
}

export default VotingPanel;