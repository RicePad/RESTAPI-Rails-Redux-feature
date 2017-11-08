import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux';
import { createTask } from '../actions';


class TaskForm extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			title: '',
			body: ''
		}
	}


	 pushTask() {
			return(dispatch) => {
				return axios.post('http://localhost:5000/api/v1/tasks', {task: {title: this.setState((event) => {title: event.target.value}), body: this.setState((event) => {body: event.target.value})}})
					.then(response => {
						dispatch(this.props.createTask(response.data))


					})
					.catch(error => console.log(error))

}}
	  // handleInput = (event) => {
	  // 	this.props.resetNotification()
   //  	this.setState({[event.target.name]: event.target.value})
   //    }

      // handleBlur(){	
      // 	const task = {title: this.state.title, body: this.state.body}

      // 	axios.put(
      // 		`http://localhost:5000/api/v1/tasks/${this.props.task.id}`,
      // 		{task: task}
      // 		)
      // 	.then(response => {
      // 		console.log(response)
      // 		this.props.updateTask(response.data)
      // 	})
      // 	.catch(error => console.log(error))
      // }






	render(){
		return(
			<div className="task-component-tile">
				
					<input
						type='text'
						className="input"
						placeholder='Enter a title'
						name="title"
						onChange={(event) => this.setState({title: event.target.value})}
					 />
					<textarea
						type='text'
						className="input"
						placeholder="Enter your task"
						name="body"
						onChange={(event) => this.setState({body: event.target.value})}

					> 
					</textarea>
					<button
						onClick={() => this.props.createTask()}
					>Save</button>
				
			</div>
			)
	}
}

export default connect(null, { createTask })(TaskForm);