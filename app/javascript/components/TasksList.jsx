import React, { Component } from 'react';
import TaskItem from './TaskItem';
import axios from 'axios';
import { connect } from 'react-redux';
import update from 'immutability-helper';




class TasksList extends Component {
		constructor(props){
			super(props);

			this.state = {
				tasks: []
			}
		}
	

		componentDidMount() {
			axios.get('http://localhost:5000/api/v1/tasks.json')
				.then(response => {
					// console.log(response)
					this.setState({tasks: response.data})
				})

				.catch(error => console.log(error))
		}


		addTask = () => {
		    axios.post('http://localhost:5000/api/v1/tasks', {task: {title: '', body: ''}})
		    .then(response => {
		     	const tasks = update(this.state.tasks, { $splice: [[0, 0, response.data]]})
		        console.log(response)

		        this.setState({tasks: tasks})
		    })
		    .catch(error => console.log(error))
  }

		render(){
			// console.log('this.props-xx', this.props)
			return(
				<div>
					<div>
						<button 
							className="addTaskButton"
							onClick={this.addTask}
						> Add Task
						</button>
					</div>
					<div>
						
						{
							this.state.tasks.map((task, index) => {
								return(
									<TaskItem 
										task={task} 
										key={index}
									/>
									)
							})

						}
					</div>
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