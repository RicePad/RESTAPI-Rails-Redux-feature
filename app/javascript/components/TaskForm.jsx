import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux';
import { createTask } from '../actions';


class TaskForm extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			title: this.props.task.title,
			body: this.props.task.body
		}
	}


	 
	
	handleInput = (event) => {
		this.setState({[event.target.name]: event.target.value})

	}

	handleBlur =() => {	
      	const task = {title: this.state.title, body: this.state.body}

      	axios.put(
      		`http://localhost:5000/api/v1/tasks/${this.props.task.id}`,
      		{task: task}
      		)
      	.then(response => {
      		console.log(response)
      		this.props.updateTask(response.data)
      	})
      	.catch(error => console.log(error))
      }





	render(){
		return(
			<div className="task-component-tile">
				
					<form onBlur={this.handleBlur}>
					<input
						type='text'
						className="input"
						placeholder='Enter a title'
						name="title"
						onChange={this.handleInput}
					 />
					<textarea
						type='text'
						className="input"
						placeholder="Enter your task"
						name="body"
						onChange={this.handleInput}

					> 
					</textarea>
					</form>
					
				
			</div>
			)
	}
}

export default connect(null, { createTask })(TaskForm);