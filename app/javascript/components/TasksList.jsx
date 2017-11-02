import React, { Component } from 'react';
import axios from 'axios';

class TasksList extends Component {
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
					this.setState({tasks: response.data})
				})

				.catch(error => console.log(error))
		}

		render(){
			return(
				<div>
					<h1>List of Tasks </h1>
					<div>
						
					</div>
				</div>
				)
		}
	}



export default TasksList;