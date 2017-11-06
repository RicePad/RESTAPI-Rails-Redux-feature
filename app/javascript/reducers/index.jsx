import { combineReducers } from 'redux';
import fetchTasks from './task_list_reducer.jsx'
import myTasks from './my_tasks_reducer.jsx'

export default combineReducers({
	fetchTasks,
	myTasks
})