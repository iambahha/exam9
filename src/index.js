import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import * as serviceWorker from './serviceWorker';
import reducer from './store/reducers/contactReducer'



const store = createStore(reducer,
	composeWithDevTools(applyMiddleware(thunk))
);

const app = (
	<Provider store={store}>
		<App/>
	</Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

