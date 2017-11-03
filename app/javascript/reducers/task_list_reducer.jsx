import { RECIEVE_ALL_TASKS } from '../actions';


export default function tasks(state = [], action){
	switch(action.type){
		case RECIEVE_ALL_TASKS:
			return action.tasks

		default:
			return state;
	}
}