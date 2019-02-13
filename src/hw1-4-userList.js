import React, {Component} from 'react';
import axios from 'axios'
import './UserList.css'
function List(props) {
	const imageStyle = { width: 100, height: 100 };
	return (
		<tr>
			<td>{props.id}</td>
			<td onClick={props.onClick}>{props.login}</td>
			<td>
				<img style={imageStyle} src={props.avatar_url} alt={props.avatar_url} />
			</td>
		</tr>
	);
}

class UserList extends Component {
	constructor(props) {
		super(props);
		// remember that you have to initialize
		// the same data type for the result you want to get in state
		this.state = { data: [],
			detail : {}
		};
	}
	componentDidMount() {
		// componentDidMount is the right place to get some data to render the page
		axios({ method: "get", url: "https://api.github.com/users" })
			.then(response => {
				console.log(response);
				this.setState({ data: response.data });
			})
			.catch(err => {
				console.log(err);
				alert(err);
			});
	}
	handleChildClick(item,event) {
		var name = item.login;
		var url = "https://api.github.com/users/" + name;
		axios({ method: "get", url: url})
			.then(response => {
				console.log(response);
				this.setState({ detail: response.data });
			})
			.catch(err => {
				console.log(err);
				alert(err);
			});
	}
	render() {
		return (
			<div className="wrapper">
				<div className="left">
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>username</th>
						<th>image</th>
					</tr>
				</thead>
				<tbody>
					{this.state.data.map((item, index) => {
						return <List key={item.id} onClick={e => this.handleChildClick(item,e)} {...item} />;
					})}
				</tbody>
			</table>
			</div>
				<div className="right">
					<p>Name: {this.state.detail.login}</p>
					<p>Location: {this.state.detail.location}</p>
					<p>Followers: {this.state.detail.followers}</p>
					<p>Following: {this.state.detail.following}</p>
				</div>
			</div>
		);
	}
}

export default UserList;
