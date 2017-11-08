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

function newTask(task){
	const action = {
		type: NEW_TASK,
		task
	}
	return action
}


// function postTaskJson(){
// 			axios.post('http://localhost:5000/api/v1/tasks', {task: {title: 'i just wrote this111', body: 'i just wrote thi111s'}})
// 		    .then(response => {
// 		    	console.log(response)
// 		    	response.json()
// 		    })	
// 		    .catch(error => console.log(error))

// }




export function createTask() {
	return(dispatch) => {
		return axios.post('http://localhost:5000/api/v1/tasks', {task: {title: '', body: ''}})
			.then(response => {
				dispatch(newTask(response.data))
				
			})
			.catch(error => console.log(error))

}}

// export function createTask(new_task_object){
// 	return function(dispatch){

// 		return postTaskJson()
// 			.then(new_task => dispatch(newTask(new_Task)))
// 	}
// }

// export function createTask(){
// 	return function(dispatch){
// 		return postTaskJson()
// 			.then(json => dispatch(task))
// 	}
// 
