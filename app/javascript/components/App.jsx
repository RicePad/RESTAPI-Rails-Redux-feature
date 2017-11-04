import React, { Component } from 'react';
import TasksList from './TasksList';

class App extends Component {

	render(){
		return(
			<div className="App">
				<div className="App-header">
					<h1>SmartBoard Application</h1>
				</div>
				
				<TasksList />
			</div>
			)
	}
}


export default App;