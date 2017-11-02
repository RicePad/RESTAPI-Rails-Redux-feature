import React, { Component } from 'react';
import TasksList from './TasksList';

class App extends Component {
		

	render(){
		return(
			<div>
				<h1>SmartBoard Application</h1>
				<TasksList />
			</div>
			)
	}
}

export default App;