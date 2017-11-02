import React, { Component } from 'react';

class TaskItem extends Component {
	render(){
		console.log('TaskItem props', this.props.task)
		return(

				<div className="task-component-tile">
					<h3>{this.props.task.title}</h3>
					<p>{this.props.task.body}</p>
				</div>
			)
	}
}


export default TaskItem;