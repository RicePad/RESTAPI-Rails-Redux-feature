import axios from 'axios';
export const RECIEVE_ALL_TASKS = 'RECIEVE_ALL_TASKS';
export const NEW_TASK = 'NEW_TASK';

 function recieveTasks(tasks){

	return {
		type: RECIEVE_ALL_TASKS,
		tasks
		
	}

}

function fetchTasksJson(){
	return fetch('http://localhost:5000/api/v1/tasks.json')
		.then(response => response.json())
}



export function fetchTasks(){
	return function(dispatch){

		return fetchTasksJson()
			.then(json => dispatch(recieveTasks(json)))
	}
}


// ******************* POST REQUEST ACTION *******************

function newTask(task) {
	const action = {
		type: NEW_TASK,
		task
	}
	return action
}


function postTaskJson(params){
			axios.post('https://ricepad-smartboard.herokuapp.com/api/v1/tasks.json', {task: {title: '', body: ''}})
		    .then(response => {
		     	const tasks = update(this.state.tasks, { $splice: [[0, 0, response.data]]})
		        console.log(response)

		        this.setState({tasks: tasks, taskId: response.data.id})
		    })
		    .catch(error => console.log(error))	
}




export function createTask(task){
	return function(dispatch){
		return postTaskJson()
			.then(json => dispatch(task))
	}
}