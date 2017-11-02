import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
	constructor(props){
		super(props);

		this.state = {
			tasks: []
		}
	}
	
	componentDidMount() {
		axios.get('http://localhost:5000/api/v1/tasks.json')
			.then(response => {
				console.log(response)
				this.setState({tasks: response.date})

			})
			.catch(error => console.log(error))
	}

	render(){
		return(
			<div>
				<h1>SmartBoard Application</h1>
			</div>
			)
	}
}

export default App;