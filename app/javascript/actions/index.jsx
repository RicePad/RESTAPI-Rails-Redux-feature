export const RECIEVE_ALL_TASKS = 'RECIEVE_ALL_TASKS';

 
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