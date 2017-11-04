import React, { Component } from 'react';

class TaskItem extends Component {
	
	handleClick(){
	 	{this.props.onClick(this.props.task.id)}
	}

	handleDelete(){
		 {this.props.onDelete(this.props.task.id)}
	}


	render(){
		// console.log('TaskItem props', this.props)
		let task = this.props.task;	
		return(

				<div className="task-component-tile">
					<span className="deleteButton" onClick={() => this.handleDelete()}>X</span>
					<h4 onClick={() => this.handleClick()}>{task.title}</h4>
					<p onClick={() => this.handleClick()}>{task.body}</p>
				</div>
			)
	}
}


export default TaskItem;