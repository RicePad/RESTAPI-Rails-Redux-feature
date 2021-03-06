import React, { Component } from 'react';
import TaskForm from './TaskForm';

import TaskItem from './TaskItem';
import axios from 'axios';
import { connect } from 'react-redux';
import update from 'immutability-helper';


export const ROOT_URL = "https://ricepad-smartboard.herokuapp.com/api/v1/tasks"
// export const ROOT_URL = "http://localhost:5000/api/v1/tasks"

class TasksList extends Component {
		constructor(props){
			super(props);

			this.state = {
				tasks: [],
				taskId: null,
				notification: ''
			}
		}
	

		componentDidMount() {
			axios.get(`${ROOT_URL}`)
				.then(response => {
					console.log(response)
					this.setState({tasks: response.data})
				})

				.catch(error => console.log(error))
		}


		addTask = () => {
		    axios.post(`${ROOT_URL}`, {task: {title: '', body: ''}})
		    .then(response => {
		     	const tasks = update(this.state.tasks, { $splice: [[0, 0, response.data]]})
		        console.log(response)

		        this.setState({tasks: tasks, taskId: response.data.id})
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
  		 axios.delete(`${ROOT_URL}/${id}`)
	    .then(response => {
	      const taskIndex = this.state.tasks.findIndex(x => x.id === id)
	      const tasks = update(this.state.tasks, { $splice: [[taskIndex, 1]]})
	      this.setState({tasks: tasks})
	    })
	    .catch(error => console.log(error))

  	}
  	

		render(){
			// console.log('this.props-xx', this.props)
			console.log('this.state', this.state)
			return(
				<div>
					<div>
						<button 
							className="addTaskButton"
							onClick={this.addTask}
						> Add Task
						</button>
						<span>
							{this.state.notification}
						</span>
					</div>
					
						 {this.state.tasks.map((task) => {
					          if(this.state.taskId === task.id) {
					            return(
					            	<TaskForm task={task} key={task.id} updateTask={this.updateTask} resetNotification={this.resetNotification} />
					            )
					          } else {
					            return (<TaskItem task={task} key={task.id} onClick={this.enableEditing} onDelete={this.deleteTask}/>)
					          }
					        })}
						 
				</div>
				)
		}
	}


function mapStateToProps(state){
	return {
			fetchTasks: state.fetchTasks
	}
}



export default connect(mapStateToProps)(TasksList);