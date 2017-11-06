import { NEW_TASK } from '../actions';

export default function myTasks(state = [], action) {
	switch(action.type){
		case NEW_TASK:
			state = [...state, action.task]

		default:
			return state;
	}
}