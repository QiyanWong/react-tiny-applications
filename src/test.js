import React, {Component} from 'react';

class Test extends Component {
	render(){
		return(
			<html>
				<div>
					<input type="range" id="start" name="volume"
						min="0" max="11"></input>
					<label for="volume">Volume</label>
				</div>
				<div>
					<input type="range" id="cowbell" name="cowbell"
						min="0" max="100" value="90" step="10"></input>
					<label for="cowbell">Cowbell</label>
				</div>
			</html> 
		);
	}
}

export default Test;