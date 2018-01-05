import React, { Component } from 'react';
import axios from 'axios';
import { ROOT_URL } from './TasksList';


class TaskForm extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			title: this.props.task.title,
			body: this.props.task.body
		}
	}


	  handleInput = (event) => {
	  	this.props.resetNotification()
    	this.setState({[event.target.name]: event.target.value})
      }

      handleBlur(){	
      	const task = {title: this.state.title, body: this.state.body}

      	axios.put(
      		`${ROOT_URL}/${this.props.task.id}`,
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
				<form onBlur={() => this.handleBlur()}>
					<input
						type='text'
						className="input"
						placeholder='Enter a title'
						value={this.state.title}
						onChange={this.handleInput}
						name="title"
					 />
					<textarea
						type='text'
						className="input"
						placeholder="Enter your task"
						value={this.state.body}
						onChange={this.handleInput}
						name="body"
					> 
					</textarea>
				</form>
			</div>
			)
	}
}

export default TaskForm;