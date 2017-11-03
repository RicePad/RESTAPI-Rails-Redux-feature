import React, { Component } from 'react';

class TaskItem extends Component {
	render(){
		// console.log('TaskItem props', this.props)
		let task = this.props.task;	
		return(

				<div className="task-component-tile">
					<h4>{task.title}</h4>
					<p>{task.body}</p>
				</div>
			)
	}
}


export default TaskItem;