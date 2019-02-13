import React, {Component} from 'react';
import axios from 'axios'
function List(props) {
	const imageStyle = { width: 100, height: 100 };
	return (
		<tr>
			<td>{props.id}</td>
			<td>{props.login}</td>
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
		this.state = { data: [] };
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
	render() {
		return (
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
						return <List key={item.id} {...item} />;
					})}
				</tbody>
			</table>
		);
	}
}

export default UserList;
