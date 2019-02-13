import React, {Component} from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Counter from './hw1-2-counter';
import UserList from './hw1-4-userList';
import Slider from './hw1-10-colorpicker';
import VotingPanel from './VotingPanel'
import Timer from './hw1-3-timer'
/* Home component */
const Home = () => (
	<div>
		<h2>Home</h2>
		<div>
			<p>Homework List:</p>
			<Link to="/counter">Homework 1-2 Counter</Link><br></br>
			<Link to="/timer">Homework 1-3 Timer</Link><br></br>
			<Link to="/userlist">Homework 1-4 User List</Link><br></br>
			<Link to="/colorpicker">Homework 1-10 Color Picker</Link><br></br>
			<Link to="/voting"> React Project Test 1-1 Voting</Link><br></br>

		</div>
	</div>
);


class Router extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Route exact={true} path="/" component={Home} />
					<Route path="/timer" component={Timer} />
					<Route path="/colorpicker" component={Slider} />
					<Route path="/counter" component={Counter} />
					<Route path="/userlist" component={UserList}/>
					<Route path="/voting" component={VotingPanel}/>
				</div>
			</BrowserRouter>
		);
	}
}

export default Router;