import React, { Component } from 'react';
import TaskForm from './TaskForm';

import TaskItem from './TaskItem';
import axios from 'axios';
import update from 'immutability-helper';

// #POST REQUEST
import { createTask } from '../actions';
import { connect } from 'react-redux';
import { fetchTasks } from '../actions';




class TasksList extends Component {
		constructor(props){
			super(props);

			this.state = {
				tasks: [],
				taskId: null,
				notification: ''
			}
		}

		
		// postTask(){
		// 	const taskObj = {
		// 		title: '',
		// 		body: ''
		// 	}

		// 	this.props.createTask(taskObj)
		// }

		// componentDidMount() {
		// 	axios.get('http://localhost:5000/api/v1/tasks.json')
		// 		.then(response => {
		// 			console.log(response)
		// 			this.setState({tasks: response.data})
		// 		})

		// 		.catch(error => console.log(error))
		// }



		addTask = () => {
		    axios.post('http://localhost:5000/api/v1/tasks', {task: {title: 'hello world', body: 'hello'}})
		    .then(response => {
		     	// const tasks = update(this.state.tasks, { $splice: [[0, 0, response.data]]})
		        console.log(response)

		        // this.setState({tasks: tasks, taskId: response.data.id})

		          this.props.createTask()
		    })
		    .catch(error => console.log(error))
  }

  	updateTask = (task) => {
  		const taskIndex = this.state.tasks.findIndex(x => x.id === task.id)
  		const tasks = update(this.state.tasks, {[taskIndex]: {$set: task }})
  		this.setState({tasks: tasks, notification: 'All Changes Saved'})
  	}


  	resetNotification = () => {
  		this.setState({notification: ''})
  	}


  	  enableEditing = (id) => {
   		 this.setState({taskId: id})
  }

  	deleteTask = (id) => {
  		 axios.delete(`http://localhost:5000/api/v1/tasks/${id}`)
	    .then(response => {
	      const taskIndex = this.state.tasks.findIndex(x => x.id === id)
	      const tasks = update(this.state.tasks, { $splice: [[taskIndex, 1]]})
	      this.setState({tasks: tasks})
	    })
	    .catch(error => console.log(error))

  	}
  	



		render(){
			// console.log('this.props-xx', this.props)
			// console.log('this.state', this.state)
			return(
				<div>
					<div>
						<button 
							className="addTaskButton"
							onClick={this.renderTaskForm}
						> Add Task
						</button>
						
						
						<span>
							{this.state.notification}
						</span>
						<div>
							<TaskForm />
						</div>
					</div>
				</div>
				)
		}
	}


function mapStateToProps(state){
	return {
			fetchTasks: state.fetchTasks,
			myTasks: state.myTasks
	}
}



export default connect(mapStateToProps, { createTask })(TasksList);