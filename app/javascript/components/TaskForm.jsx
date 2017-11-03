import React, { Component } from 'react';


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

	render(){
		return(
			<div className="tile">
				<form>
					<input
						type='text'
						className='input'
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