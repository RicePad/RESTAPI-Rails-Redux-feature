import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';

// Redux Store Setup
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';
import { fetchTasks } from '../actions'
import thunk from 'redux-thunk';

const store = createStore(reducers, applyMiddleware(thunk));
// console.log('store.getState()', store.getState())
store.subscribe(() => console.log('store', store.getState()))
store.dispatch(fetchTasks())




const appComponent = document.getElementById('main-app')
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, appComponent

	)