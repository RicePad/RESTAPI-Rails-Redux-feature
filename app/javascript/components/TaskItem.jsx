import React, { Component } from 'react';

class TaskItem extends Component {
	render(){
		// console.log('TaskItem props', this.props)
		let task = this.props.task;	
		return(

				<div className="task-component-tile">
					<h3>{task.title}</h3>
					<p>{task.body}</p>
				</div>
			)
	}
}


export default TaskItem;