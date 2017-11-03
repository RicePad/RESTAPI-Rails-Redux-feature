import React, { Component } from 'react';
import TaskItem from './TaskItem';
import axios from 'axios';
import { connect } from 'react-redux';



class TasksList extends Component {
	

		// componentDidMount() {
		// 	axios.get('http://localhost:5000/api/v1/tasks.json')
		// 		.then(response => {
		// 			// console.log(response)
		// 			this.props.showTasks()
		// 		})

		// 		.catch(error => console.log(error))
		// }

		render(){
			// console.log('this.props-xx', this.props)
			return(
				<div>
					<div>
						
						{


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