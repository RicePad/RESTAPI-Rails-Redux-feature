import React, { Component } from 'react';
import { createTask } from '../actions';
import { connect } from 'react-redux';
import axios from 'axios';

class TaskItem extends Component {
<<<<<<< HEAD
	
	handleClick(){
	 	{this.props.onClick(this.props.task.id)}
	}

	handleDelete(){
		 {this.props.onDelete(this.props.task.id)}
	}

	postTask(){
			const taskObj = {
					title: this.props.title
			}

			this.props.createTask(taskObj);
	}

	

=======
>>>>>>> parent of 504aa17... add DELETE method using axios
	render(){
		// console.log('TaskItem props', this.props)
		let task = this.props.task;	
		console.log('TaskItem props', this.props.createTask)
		return(

<<<<<<< HEAD
				<div 
				 className="task-component-tile"
				 // onClick={() => this.postTask()}

				 >
					<span className="deleteButton" onClick={() => this.handleDelete()}>X</span>
					<h4 onClick={() => this.handleClick()}>{task.title}</h4>
					<p onClick={() => this.handleClick()}>{task.body}</p>
=======
				<div className="task-component-tile">
					<h4>{task.title}</h4>
					<p>{task.body}</p>
>>>>>>> parent of 504aa17... add DELETE method using axios
				</div>
			)
	}
}


export default connect(null, { createTask })(TaskItem);